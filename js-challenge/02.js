function combineArray(first, second, third) {
    if(Array.isArray(first) && Array.isArray(second) && Array.isArray(third)) {
        // first.forEach(firstWord => {
        //     newArray.push(firstWord)
        // })

        // second.forEach(secondWord => {
        //     newArray.push(secondWord)
        // })

        // third.forEach(thirdWord => {
        //     newArray.push(thirdWord)
        // })

        // return newArray.join(" ")

        return [...first, ...second, ...third].join(" ")
    }

    return "Invalid"
}


const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

console.log(combineArray(first, second, third))