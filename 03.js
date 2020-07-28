const print = () => {
    return new Promise((resolve,reject) => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                resolve(i)
            }, 1000);
        }
    }).then(i => {
        Promise.resolve(i)
            .then(print())
            .then(console.log.bind(console))
    })
}

(() => {
    const out = print()
    console.log(out);    
})()
