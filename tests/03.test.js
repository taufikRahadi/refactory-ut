const mebiToKibi = require('../src/03.js')

test('convert mebi to kibi', () => {
    expect(mebiToKibi(4)).toEqual(4096)
})