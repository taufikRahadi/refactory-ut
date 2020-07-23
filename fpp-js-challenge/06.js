const censoredWords = 'dolor, elit, quis, nisi, fugiat, proident, laborum'.split(", ")

const word = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const trim = (text, censoredWords) => {
    censoredWords.forEach(element => {
        if(text.match(element)) {
            text = text.replace(element, '*'.repeat(element.length))
        }
    });

    return text
}

console.log(trim(word, censoredWords))