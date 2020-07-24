const isIsogram = str => str.split("").every((a, b) => str.indexOf(a) === b)

module.exports = isIsogram
