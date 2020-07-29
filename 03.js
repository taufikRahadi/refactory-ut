const print = () => {
    // buat promise
    return new Promise((resolve,reject) => {
        // loop
        for (let i = 1; i <= 3; i++) {
            console.log(i)
            setTimeout(() => {
                resolve("done")
            }, 1000)
        }
    })
}

(async () => {
    const out = await print()
    console.log(out)
})()