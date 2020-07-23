class Str {
    static lower(str) {
        return str.toString().toLowerCase()
    }

    static upper(str) {
        return str.toString().toUpperCase()
    }

    static capitalize(str) {
        let string = str.toString().split(" ")
        let newStr = []

        string.forEach(s => {
            newStr.push(s.charAt(0).toUpperCase() + s.slice(1))
        })

        return newStr.join(" ")
    }

    static reverse(str) {
        return str.split("").reverse().join("")
    }

    static contains(words, str) {
        if(typeof str === 'string') {
            return (words.match(str)) ? true : false
        } else if(Array.isArray(str)) {
            let state = false
            str.forEach(string => {
                if(words.match(string)) {
                    state = true
                }
            })

            return state
        }
    }

    static random(length = 16) {
        return [...Array(length)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
    }

    static slug(str, specialChar = '-') {
        let string = str.split(" ")
        let newStr = string.filter(s => s.match(/[a-zA-Z0-9]/g)) 
        newStr = newStr.join(specialChar).toLowerCase()

        return newStr.replace(/[\,?]/g, "")
    }

    static count(str) {
        return str.toString().length
    }

    static countWords(str) {
        return str.split(" ").length
    }

    static trim(str, length = 100, replaceit = '...') {
        if(str.length <= length ) {
            return str
        }

        return str.slice(0, length) + ' ' + replaceit
    }

    static trimWords(str, length = 30, replaceit = '...') {
        let paragraph = str.split(" ")
        if(paragraph.length <= length) {
            return str
        }

        return paragraph.slice(0, length).join(" ") + ' ' + replaceit
    }
}

let str = new Str()

console.log(Str.lower('MAKAN'))

console.log(Str.upper('malam'))

console.log(Str.capitalize('saya ingin makan'))

console.log(Str.reverse('kasur'))

console.log(Str.contains('Saya ingin makan sate', 'makan'))
console.log(Str.contains('Saya ingin makan sate', 'rujak'))
console.log(Str.contains('Saya ingin makan sate', ['sate', 'rujak']))

console.log(Str.random())
console.log(Str.random(6))
console.log(Str.random(32))

const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
console.log(Str.slug(title))
console.log(Str.slug(title, '_'))

console.log(Str.count('lorem ipsum'))

console.log(Str.countWords('lorem ipsum'))

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
console.log(Str.trim('Less than 100 characters'))
console.log(Str.trim(text))
console.log(Str.trim(text, 20))
console.log(Str.trim(text, 20, '......'))

console.log()

console.log(Str.trimWords(text))
console.log(Str.trimWords(text, 3))
console.log(Str.trimWords(text, 3, '......'))