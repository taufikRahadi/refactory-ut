const repeatLetter = (text, number = 1) => {
    return text.split("").map(str => {
        if(str.match(/\S/)) return str.repeat(number)
        else return str
    }).join("")
}

module.exports = repeatLetter