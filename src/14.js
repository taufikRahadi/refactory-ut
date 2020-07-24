const isIsogram = text => {
    return text.split("").every((val, index) => text.indexOf(val) == index)
}

module.exports = isIsogram