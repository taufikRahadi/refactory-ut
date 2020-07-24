const stats = require('../src/13.js')
const output = { 
    mean: 22.142857142857142,
    median: 23,
    mode: '23,38 each appeared 2 times',
    largest: 38,
    smallest: 2,
    range: 36,
    sum: 155,
    count: 7 
}
test('returns stats data', () => {
    expect(stats([10, 2, 38, 23, 38, 23, 21])).toEqual(output)
})