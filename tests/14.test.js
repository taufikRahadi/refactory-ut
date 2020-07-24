const isIsogram = require('../src/14.js')

const gelas = isIsogram('gelas')
const makan = isIsogram('makan')

test('is isogram', () => {
    expect(gelas).toBeTruthy()
    expect(makan).toBeFalsy()
})