const censor = require('../src/10.js')

describe('censor word', () => {
    it('#### ingin makan #### goreng.', () => {
        expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toBe('#### ingin makan #### goreng.')
    })

    it('Pada hari ****** saya ***** siang.', () => {
        expect(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*')).toBe('pada hari ****** saya ***** siang.')
    })
})