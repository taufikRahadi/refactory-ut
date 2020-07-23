function countWords() {
    const str = "Aku ingin begini\
    Aku ingin begitu\
    Ingin ini itu banyak sekali\
    \
    Semua semua semua\
    Dapat dikabulkan\
    Dapat dikabulkan\
    Dengan kantong ajaib\
    \
    Aku ingin terbang bebas\
    Di angkasa\
    Hei… baling baling bambu\
    \
    La... la... la...\
    Aku sayang sekali\
    Doraemon\
    \
    La... la... la...\
    Aku sayang sekali"

    let countAku = str.match(/aku/gi).length
    let countIngin = str.match(/ingin/gi).length
    let countDapat = str.match(/dapat/gi).length

    return `aku: ${countAku} kata, ingin: ${countIngin} kata, dapat: ${countDapat} kata`
}

console.log(countWords())