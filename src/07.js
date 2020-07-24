const repeatLetter = (text, number = 1) => text.split("").map(str => (str.match(/[a-zA-Z0-9]/) ? str.repeat(number) : str)).join("")

module.exports = repeatLetter
console.log(repeatLetter('Hello World!', 3));
