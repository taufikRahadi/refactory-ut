function leapYearDetector(startYear, endYear) {
    for(let i = startYear; i <= endYear; i++) {
        ( i % 4 === 0 ) ? console.log(`${i} is a leap year`) : console.log(`${i} is not a leap year`)
    }
}

leapYearDetector(1999, 2021)