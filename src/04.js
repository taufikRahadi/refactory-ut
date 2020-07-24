const isLeapYear = year => { 
    return (year % 4 == 0) ? true : false
}

module.exports = isLeapYear