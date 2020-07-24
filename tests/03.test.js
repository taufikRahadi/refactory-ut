const mebiTokibi = require('../src/03')

test('4 MiB equal to 4096 KiB', () => {
    expect(mebiTokibi(4)).toBe(4096)
    expect(mebiTokibi(4)).toEqual(4096)
})