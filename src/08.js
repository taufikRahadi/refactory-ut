const arrayMirroring = (number = [1, 2, 3]) => {
    return [...number, ...number.reverse()]
}

module.exports = arrayMirroring