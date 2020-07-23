const combineArray = (first, second, third) => { return [...first, ...second, ...third].join(" ") }

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

console.log(combineArray(first, second, third))