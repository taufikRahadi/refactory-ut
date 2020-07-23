const leapYear = (start, end) => {
    for(let i = start; i <= end; i++) {
        if((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
            console.log(`${i} tahun kabisat`)
        } else {
            console.log(`${i} bukan tahun kabisat`)
        }
    }
}

leapYear(1900, 2000)