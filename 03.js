const print = () => {
    // buat promise
    return new Promise((resolve,reject) => {
        // loop
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                // if i lower or equal to 3 resolve promise if false reject promise
                (i <= 3) ? resolve('done') : reject('fail')
                console.log(i)
            }, 1000);
        }
    })
}

(async () => {
    const out = await print()
    console.log(out)
})()