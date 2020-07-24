const sum = require('../src/02.js')

const firstNum = 2
const secondNum = 2

test('two plus two is four skrrrraak', () => {
    expect(sum(firstNum, secondNum)).toBe(firstNum + secondNum)
    expect(sum(firstNum, secondNum)).toEqual(firstNum + secondNum)
    expect(sum(firstNum, secondNum)).toBeGreaterThan(firstNum + (secondNum - 1))
})