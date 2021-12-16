const fs = require('fs')
const path = require('path')
const css = require('css')
const { pseudosRegex, ruleRegex, valueRegex } = require('./regex')

const selectorsContain = (rule, lookFor) => {
  const selectors = rule.selectors.join(' ')
  const matches = selectors.match(lookFor)

  return matches ? matches.map(m => m.replace('.', '').replace(/\.|_|:/gi, '-')) : undefined
}

const findNewVariableName = (rule, declaration, match, root) => {
  const pseudoMatches = selectorsContain(rule, pseudosRegex)
  const ruleMatches = selectorsContain(rule, ruleRegex)
  let matches = []
  let name = '--' + match

  if (pseudoMatches && pseudoMatches.length > 0) {
    matches = pseudoMatches
  }
  else if (ruleMatches && ruleMatches.length > 0) {
    matches = ruleMatches
  }

  for (let i = 0; i < matches.length; i++) {
    name = '--' + matches[i] + (declaration.property.startsWith('-') ? declaration.property : '-' + declaration.property)

    if (!root.vars[name]) break
  }

  return name
}

const parseRoot = (rule, root) => {
  root.type = rule.type
  root.selectors = rule.selectors

  for (let j = 0; j < rule.declarations.length; j++) {
    const declaration = rule.declarations[j]
    const matches = declaration.value.match(valueRegex)
    const hasMatch = matches && matches.length > 0
    const rootValues = Object.values(root.vars)
    const rootIndex = rootValues.indexOf(declaration.value)

    if (hasMatch && rootIndex === -1) {
      root.vars[declaration.property] = declaration.value
      root.declarations.push(declaration)
    }
  }
}

const parseDeclarations = (rule, root) => {
  const declarationsWithColors = []
  const unmappedColors = {}
  const rootValues = Object.values(root.vars)

  for (let i = 0; i < rule.declarations.length; i++) {
    const declaration = rule.declarations[i]
    const matches = declaration.value.match(valueRegex)

    if (matches && matches.length > 0) {
      if (declaration.property.startsWith('--')) {
        declarationsWithColors.push(declaration)
        continue
      }

      for (let j = 0; j < matches.length; j++) {
        const match = matches[j]
        const unmappedValues = Object.values(unmappedColors)
        const rootIndex = rootValues.indexOf(match)
        const seenIndex = unmappedValues.indexOf(match)
        const name = findNewVariableName(rule, declaration, match, root)

        if (rootIndex === -1 && seenIndex === -1) {
          unmappedColors[name] = match
          declaration.value = declaration.value.replace(match, `var(${name})`)
        }
        else if (rootIndex > -1) {
          const rootKeys = Object.keys(root.vars)
          declaration.value = declaration.value.replace(match, `var(${rootKeys[rootIndex]})`)
        }
        else if (seenIndex > -1) {
          const seenKeys = Object.keys(unmappedColors)
          declaration.value = declaration.value.replace(match, `var(${seenKeys[seenIndex]})`)
        }
      }
      declarationsWithColors.push(declaration)
    }
  }

  const unmappedKeys = Object.keys(unmappedColors)
  if (unmappedKeys.length > 0) {
    for (let i = 0; i < unmappedKeys.length; i++) {
      root.vars[unmappedKeys[i]] = unmappedColors[unmappedKeys[i]]
    }
  }

  return declarationsWithColors
}

const remap = (uri) => {
  const resolvedPath = path.resolve(uri)
  const cssContent = fs.readFileSync(resolvedPath).toString('utf-8')
  const parsed = css.parse(cssContent)
  const rulesWithColors = []
  const root = { declarations: [], vars: {} }

  if (!parsed.stylesheet || (parsed.stylesheet.parsingErrors && parsed.stylesheet.parsingErrors.length > 0)) {
    console.error(!parsed.stylesheet ? 'No stylesheet retuned from parser' : parsed.stylesheet.parsingErrors)
  }

  for (let i = 0; i < parsed.stylesheet.rules.length; i++) {
    const rule = parsed.stylesheet.rules[i]
    let declarationsWithColors = []

    if (!rule.declarations || rule.media || rule.comment) {
      continue
    }

    if (rule.selectors.length === 1 && rule.selectors[0] === ':root') {
      parseRoot(rule, root)
      continue
    }
    else {
      declarationsWithColors = parseDeclarations(rule, root)
    }

    if (declarationsWithColors.length > 0) {
      rulesWithColors.push({ type: rule.type, selectors: rule.selectors, declarations: declarationsWithColors })
    }
  }

  const newColors = Object.values(root.vars)
  const newColorKeys = Object.keys(root.vars)
  for (let i = 0; i < newColorKeys.length; i++) {
    if (root.declarations.every(d => d.property !== newColorKeys[i]))
      root.declarations.push({ type: 'declaration', property: newColorKeys[i], value: newColors[i] })
  }
  rulesWithColors.splice(0, null, root)

  const result = css.stringify({ type: parsed.type, stylesheet: { rules: rulesWithColors } })
  return result
}

module.exports = remap