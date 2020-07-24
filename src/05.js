const isPrime = num => {
    if(num < 2) return false
    for(let i = 2; i < num; i++) {
        if(i % num == 0) return false
    }

    return true
}

module.exports = isPrime