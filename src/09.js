const symmetrical = value => {
    return value.toString().split("").reverse().join("") === value.toString().split("").join("")
}

symmetrical('malam') // true
symmetrical('taat')  // true
symmetrical('tidur') // false
symmetrical(1234)    // false
symmetrical(108801)  // true
symmetrical(8001008) // true

module.exports = symmetrical