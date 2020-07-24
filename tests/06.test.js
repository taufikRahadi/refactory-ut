const repeatString = require('../src/06.js')

test('Makan! Makan! Makan! ', () => {
    expect(repeatString('Makan! ', 3)).toBe('Makan! Makan! Makan! ')
})