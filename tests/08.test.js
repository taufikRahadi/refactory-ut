const arrayMirroring = require('../src/08')

const array = [3, 4, 5]
const arr = [1, 2, 3]

describe('returns a mirror array', () => {
    it('returns [3, 4, 5, 5, 4, 3]', () => {
        expect(arrayMirroring(array)).toEqual(
            expect.arrayContaining([3, 4, 5, 5, 4, 3])
        )
    })
    it('returns [1, 2, 3, 3, 2, 1]', () => {
        expect(arrayMirroring(arr)).toEqual(
            expect.arrayContaining([1, 2, 3, 3, 2, 1])
        )
    })
})