const Item = require('../src/12.js')

describe('check the items that returned by is on sale or not', () => {
    it('returns false', () => {
        expect(Item.findById(3).isOnSale()).toBeFalsy()
    })

    it('returns true', () => {
        expect(Item.findById(5).isOnSale()).toBeTruthy()
    })
})