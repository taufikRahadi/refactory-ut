const numbers = [...Array(1001).keys()]

const even = num => {
    return num.filter(number => (number % 2) == 0 )
}

const odd = num => {
    return num.filter(number => (number % 2) != 0)
}

const multipliesByFive = num => {
    console.log(num.filter(number => (number % 5 == 0)))
}

const isPrime = n => {
    if(n == 2) return true
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }

    return true
}

console.log(even(numbers));
console.log(odd(numbers));
console.log(multipliesByFive(numbers))
console.log(numbers.filter(val => isPrime(val)))
console.log(numbers.filter(val => isPrime(val) && val < 100))


