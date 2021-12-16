const remap = require('../remap.js')

describe('converter tests', () => {
  it('can remap bootstrap color values to use CSS variables', () => {
    const remaped = remap('tests/fixtures/bootstrap-v5.0.2.css')
    //TODO: check colors are mapped correctly
  })
})