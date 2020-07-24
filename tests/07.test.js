const repeatLetter = require('../src/07.js')

test('should return an output HHeelllloo WWoorrlldd!!', () => {
    expect(repeatLetter('Hello World!', 2)).toBe('HHeelllloo WWoorrlldd!!')
})