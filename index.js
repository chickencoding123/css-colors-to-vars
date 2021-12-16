const fs = require('fs')
const path = require('path')
const converter = require('./remap.js')

const args = process.argv.slice(2)

if (!args || args.length !== 3) {
  console.error('Need exactly one command and two arguments. See --help')
  process.exit(1)
}

const command = args[0]

switch (command) {
  case '--help':
    console.log(`

    Following commands are available:
    
        --remap: Remap the CSS colors to use var() and write to dist
          arg1: Where to find the CSS file for transformation
          arg2: Where to save the remapped version

    `)
    break
  case '--remap': {
    const inPath = args[1]
    const outPath = args[2]

    if (!inPath) {
      throw Error('Need input path for transformation')
    }
    if (!fs.existsSync(inPath)) {
      throw Error('Input path does not exist or is not accessible')
    }
    if (!outPath) {
      throw Error('Need output path for transformation')
    }

    const outDir = path.dirname(outPath)
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir)
    }

    const remapedCss = converter(inPath)

    fs.writeFileSync(outPath, remapedCss)

    break
  }
  default:
    console.log('Unkown command. See --help')
    process.exit(1)
}