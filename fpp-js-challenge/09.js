const fs = require('fs')

// pake file system buat ambil data dari 09.json trus data yg udah di baca di tangkep sama argumen kedua di callback
fs.readFile('09.json', (err, data) => {
    // kalo eror ya throw lah
    if(err) throw err
    // kalo engga baru jalanin
    else {
        // data tadi masi json pulen
        data = JSON.parse(data)

        const february = data
            // filter data berdasarkan tanggal, pake object Date trus dapetin bulan nya yang sama dengan 1, karna getMonth di date mulai dari 0
            .filter(val => new Date(val.created_at).getMonth() === 1)

        const ari = data
            // filter array cari customer ari
            .filter(value => value.customer.name === 'Ari')
            // dapetin total tiap item
            .map(val => val.items
                // total tiap items = qty * price
                .map(item => item.qty * item.price)
                // total tadi ditambah dengan item item lainnya di dalem array items
                .reduce((x, y) => x + y)
            )
        
        const lowerThan = ([
            // pake set supaya ga duplikat karena set itu collection yang valuenya hanya bisa ada satu kali
            ...new Set(
                data
                    // filter array cari grand total nya kurang dari 300000
                    .filter(value => value.items
                        .map(item => item.qty * item.price)
                        .reduce((x, y) => x + y) < 300000
                    )
                    // dapetin customer name
                    .map(val => val.customer.name)
            )
        ])
        
        console.log(february);
        console.log(ari);
        console.log(lowerThan);
    }
})

