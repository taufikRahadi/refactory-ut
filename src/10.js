const censor = (text, censoredWords, censorSymbol = '#') => {
    censoredWords.forEach(word => {
        text = text.toLowerCase().replace(new RegExp(word), censorSymbol.repeat(word.length))
    })

    return text
}

console.log(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi']));
console.log(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*'));

module.exports = censor