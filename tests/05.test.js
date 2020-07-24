const isPrime = require('../src/05.js')

test('return true if the arguments is prime number', () => {
    expect(isPrime(2)).toBeTruthy()
    expect(isPrime(89)).toBeTruthy()
})