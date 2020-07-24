const symmetrical = require('../src/09.js')

const malam = symmetrical('malam') // true
const taat = symmetrical('taat')  // true
const tidur = symmetrical('tidur') // false
const angka = symmetrical(1234)    // false
const num = symmetrical(108801)  // true
const number = symmetrical(8001008) // true

test('symmetrical value', () => {
    expect(malam).toBeTruthy()
    expect(taat).toBeTruthy()
    expect(tidur).toBeFalsy()
    expect(angka).toBeFalsy()
    expect(num).toBeTruthy()
    expect(number).toBeTruthy()
})