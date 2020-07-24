const censor = (text, censoredWords, censorSymbol = '#') => {
  censoredWords.forEach((value) => {
    if (text.includes(value)) {
      text = text.toLowerCase().replace(new RegExp(value, "g"), censorSymbol.repeat(value.length))
    }
  })

  return text
}
module.exports = censor