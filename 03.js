const print = () => {
    return new Promise((resolve,reject) => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                (i <= 3) ? resolve('done') :reject('fail')
                console.log(i)
            }, 1000);
        }
    })
}

(async () => {
    const out = await print()
    console.log(out)
})()