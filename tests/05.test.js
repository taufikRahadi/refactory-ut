const isPrime = require('../src/05')

test('45 is not a prime number & 83 is prime number', () => {
    expect(isPrime(45)).toBeFalsy()
    expect(isPrime(45)).not.toBeTruthy()
    expect(isPrime(2)).toBeTruthy()
    expect(isPrime(83)).toBeTruthy()
})