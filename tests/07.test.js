const repeatLetter = require('../src/07.js')

test('repeat letter in string 3 times', () => {
    expect(repeatLetter('Hello World!', 3)).toBe('HHHeeellllllooo WWWooorrrlllddd!')
})