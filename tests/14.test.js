const isIsogram = require('../src/14.js')

describe('check isogram', () => {
    it('returns true', () => {
        expect(isIsogram('gelas')).toBe(true)
    })

    it('returns false', () => {
        expect(isIsogram('makan')).toBe(false)
    })
})