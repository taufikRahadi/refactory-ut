const print = () => new Promise((resolve, reject) => {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            resolve(i)
        }, 1000);
    }
})

print().then((angka) => {
    console.log(angka + ' Done')
})