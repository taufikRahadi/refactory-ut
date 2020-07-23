// generate number 1-1000
const rowOfNumbers = () => {
    let arr = []
    for(let i = 0; i <= 1000; i++) {
        arr.push(i)
    }

    return arr
}

// throw an error if argument is not an array
const checkArgument = num => {
    if(!Array.isArray(num)) {
        throw new Error("arguments must be an array")
    }

    return
}

function getEvenNumber(num) {
    checkArgument(num)

    let evenNumber = num.filter(number => (number % 2) == 0 )
    return evenNumber
}

function getOddNumber(num) {
    checkArgument(num)

    let oddNumber = num.filter(number => (number % 2) != 0)
    return oddNumber
}

function getMultipliesByFive(num) {
    checkArgument(num)

    let multipliesByFive = num.filter(number => (number % 5) == 0)
    return multipliesByFive
}

// return true if n is primenumber
const isPrime = n => {
    if(n == 2) return true
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }

    return true
}

function getPrimeNumbers(num) {
    checkArgument(num)


    let primeNumbers = []
    num.forEach(number => {
        if(isPrime(number)) {
            primeNumbers.push(number)
        }
    });

    return primeNumbers
}

function getPrimeNumberLessThanHundred(num) {
    checkArgument(num)

    let primeNumbersLessThanHundred = num.filter(number => isPrime(number) && number < 100)
    return primeNumbersLessThanHundred
}

console.log(getEvenNumber(rowOfNumbers()))
console.log(getOddNumber(rowOfNumbers()))
console.log(getMultipliesByFive(rowOfNumbers()))
console.log(getPrimeNumbers(rowOfNumbers()))
console.log(getPrimeNumberLessThanHundred(rowOfNumbers()))
