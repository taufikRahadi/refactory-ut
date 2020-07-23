const palindrome = str => {
    const splitted = str.split("").filter(val => val.match(/[^\s]/) && val.match(/[a-zA-Z]/))
    return splitted.join("").toLowerCase() === splitted.reverse().join("").toLowerCase()
}

console.log(palindrome('ibu ratna antar ubi'))
console.log(palindrome('kasur ini rusak'))
console.log(palindrome('A nut for a jar of tuna'))
console.log(palindrome('Borrow or rob?'))
console.log(palindrome('Was it a car or a cat i saw?'))
console.log(palindrome('Yo, banana boy!'))
console.log(palindrome('UFO tofu?'))
console.log(palindrome('Hello pintu'))