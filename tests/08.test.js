const arrayMirroring = require('../src/08.js')

test('mirror array', () => {
    expect(arrayMirroring([1,2,3])).toEqual(expect.arrayContaining([1,2,3,3,2,1]))
})