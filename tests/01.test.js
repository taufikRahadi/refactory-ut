const charLength = require('../src/01.js')

const string = "Hitung panjang karakter string ini" // 34

test('count character length', () => {
    expect(charLength(string)).toBe(string.length)
})