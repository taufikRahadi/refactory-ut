const { program } = require('@caporal/core')

program.command('random', 'returns a random string')
    .option('--charlength <lengths>', 'length of the string', { validator: program.NUMBER }, { default: 32 })
    .option('--letters <letter>', 'contain a letter or not', { validator: program.BOOLEAN }, { default: true })
    .option('--numbers <numbers>', 'contain a number or not', { validator: program.BOOLEAN }, { default: true })
    .option('-u', '--uppercase', 'uppercase or not')
    .option('-l', '-lowercase', 'lowercase or not')
    .action(({ logger, options }) => {
        const lowerChar = 'abcdefghijklmnoopqrstuvwxyz'
        const numChar = '1234567890'
        const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const charLoop = (char, length) => {
            let result = ''
            for(let i = 0; i <= length; i++) {
                result += char[Math.floor(Math.random() * char.length)]
            }
            return result
        }
        let result = ''
        let charSet = ''
        if(options.charlength) {
            if(!options.letters) {
                charset = [...upperChar, ...lowerChar].join('')
            } else if(!options.numbers) {
                charSet = [...upperChar, ...lowerChar].join('')
            } else if(!options.letters) {
                charSet = [...numChar].join('')
            } else if(options.lowercase) {
                charSet = [...numChar, ...lowerChar].join('')
            } else if(options.uppercase) {
                charSet = [...numChar, ...upperChar].join('')
            } else {
                charSet = [...numChar, ...upperChar, ...lowerChar].join('')
            }
            result = charLoop(charSet, options.charlength)
            logger.info(result)
        } else {
            charSet = [...numChar, ...upperChar, ...lowerChar].join('')
            for(let i = 0; i <= 32; i++) {
                result += charSet[Math.floor(Math.random() * charSet.length)]
            }
            
            logger.info(result)
        }
    })

program.run()