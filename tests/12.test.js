const Item = require('../src/12.js')

describe('check iitem is one sale or not', () => {
    it('returns true', () => {
        expect(Item.findById(5).isOnSale()).toBeTruthy()
    })

    it('returns false', () => {
        expect(Item.findById(3).isOnSale()).toBeFalsy()
    })
})