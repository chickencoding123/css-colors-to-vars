remap-css-colors [![Build Status](https://travis-ci.org/jotform/css.js.svg)](https://travis-ci.org/jotform/css.js)
======

<div align="center">

Remap arbitrary CSS colors to CSS variables. Useful for libraries and custom CSS files.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/IRoninCoder/css-colors-to-vars/blob/master/LICENSE)

</div>

## How to use
You must clone this repository locally, then:
```sh
cd <the root directory of your clone>
npm run remap <input CSS file path> <output CSS file path>
# e.g. npm run remap tests/fixtures/bootstrap-v5.0.2.css dist/bootstrap.css
```
Which will give you a remaped version with all colors remaped and saved under the `:root`

## Why?
Because someone may find this useful. Perhaps accelarate their rewrite process when working on older CSS files. Maybe you love to use [Bootstrap](https://github.com/twbs/bootstrap), but need a greater control over the color theme because you'd want to allow users to choose their own colors and save their preferences in their account.
