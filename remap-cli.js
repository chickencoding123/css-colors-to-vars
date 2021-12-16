#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const converter = require('./index.js')

yargs(hideBin(process.argv))
  .command('remap [input] [output]', 'remap css color valus to css variables', (yargs) => {
    return yargs
      .positional('input', {
        describe: 'input css file that contains color values',
        demandOption: true
      })
      .positional('output', {
        describe: 'output path to save the remaped css file that contains css color variables',
        demandOption: true
      })
  }, (argv) => {
    const inPath = argv.input
    const outPath = argv.output

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
  })
  .parse()
