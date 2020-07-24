const censor = require('../src/10.js')

test('censor words', () => {
    expect(censor('saya ingin makan nasi goreng', ['saya', 'nasi'])).toEqual('#### ingin makan #### goreng')
})