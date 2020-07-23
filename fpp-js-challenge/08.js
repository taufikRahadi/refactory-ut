class Str {
    static lower(str) {
        console.log(str.toLowerCase());
    }

    static upper(str) {
        console.log(str.toUpperCase());
    }

    static capitalize(str) {
        console.log(str.split(" ").map(val => val.toLowerCase().replace(val.charAt(0), val.charAt(0).toUpperCase())).join(" "));
        
    }

    static reverse(str) {
        console.log(str.split("").reverse().join(""));
    }

    static contains(str, word) {
        (typeof word === 'string') ?
            console.log((str.match(word)) ? true : false) : 
            console.log(word.some(val => str.includes(val)))
        
    }

    static random(length = 16) {
        console.log([...Array(length)].map(rand => (~~(Math.random() * 36)).toString(36)).join(""));
        
    }

    static slug(str, specialChar = '-') {
        console.log(str.split(" ").filter(s => s.match(/[a-zA-Z0-9]/)).join(specialChar).toLowerCase().replace(/[\,?]/g, ""))
    }

    static count(str) {
        console.log(str.length)
    }

    static countWord(str) {
        console.log(str.split(" ").length)        
    }

    static trim(text, length = 100, replace = '...') {
        console.log((text.length <= 100) ? text : text.slice(0, length) + replace)
    }
    
    static trimWords(text, length = 30, replace = '...') {
        console.log((text.length <= length) ? 
            text : 
            text.split(" ").slice(0, length).join(" ") + replace
        )
    }
}

Str.lower('MALAM')
Str.upper('makan')
Str.capitalize('anjing tanah')
Str.reverse("kasur rusak")
Str.contains("Saya ingin makan sate", 'sate')
Str.contains("Saya ingin makan sate", ["sate", "rujak"])
Str.random()
Str.random(32)
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
Str.slug(title)
Str.slug(title, '_')
Str.count('lorem ipsum')
Str.countWord('lorem ipsum')

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
Str.trim('Less than 100 characters') // Less than 100 characters

Str.trim(text) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

Str.trim(text, 20) // Lorem ipsum dolor si...

Str.trim(text, 20, '·····') // Lorem ipsum dolor si·····

Str.trimWords('Less than 30 words') // Less than 30 words

Str.trimWords(text) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...

Str.trimWords(text, 3) // Lorem ipsum dolor...

Str.trimWords(text, 3, '·····') // Lorem ipsum dolor····
