#!/usr/bin/env node

const { program } = require('@caporal/core')

// task 1
program.command('lowercase', 'convert string to lowercase letter')
    .argument('<string>', 'input string')
    .action(({ logger, args }) => {
        logger.info(args.string.toLowerCase())
    })

program.command('uppercase', 'convert string to uppercase letter')
    .argument('<string>', 'input string')
    .action(({ logger, args }) => {
        logger.info(args.string.toUpperCase())
    })

program.command('capitalize', 'capitalize string')
    .argument('<string>', 'input string')
    .action(({ logger, args }) => {
        logger.info(args.string.split(' ').map(val => val.toLowerCase().replace(val.charAt(0), val.charAt(0).toUpperCase())).join(' '))
    })

// task 2
program.command('add', 'add all argumeents')
    .argument('<number...>', 'Number to add')
    .action(({ logger, args }) => {
        logger.info(args.number.reduce((a, b) => a + b))
    })

program.command('subtract', 'subtract all arguments')
    .argument('<number...>', 'number to subtract')
    .action(({ logger, args }) => {
        logger.info(args.number.reduce((a, b) => a - b))
    })

program.command('multiply', 'multiply all arguments')
    .argument('<number...>', 'number to multiply')
    .action(({ logger, args }) => {
        logger.info(args.number.reduce((a, b) => a * b))
    })

program.command('divide', 'divide all arguments')
    .argument('<number...>', 'number to divide')
    .action(({ logger, args }) => {
        logger.info(args.number.reduce((a, b) => a / b))
    })

// task 3
program.command('palindrome')
.argument('<string>', 'input strring to check palindrome')
.action(({ logger, args }) => {
    const rev = args.string.toLowerCase().split('').map(val => val.match(/\w/g)).reverse().join() === args.string.toLowerCase().replace(/\w/g, '')
    logger.info(`String: ${args.string}`)
    logger.info('is palindrome: ' + (rev) ? 'yes' : 'no')
})

// task 4
program.command('obfuscate', '...')
    .argument('<string>', 'input it')
    .action(({ logger, args }) => {
        logger.info([...args.string].map(x => '&#' + x.charCodeAt(0)).join(";"))
    })

// task 5
const charLoop = (charSet, charlength) => {
    let result = ''
    for(let i = 0; i <= charlength; i++) {
        result += charSet[Math.floor(Math.random() * charSet.length)]
    }

    return result
}
const lowerChar = 'abcdefghijklmnoopqrstuvwxyz'
const numChar = '1234567890'
const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charset = [...lowerChar, ...numChar, ...upperChar]

program.command('random', 'returns a random string')
    .option('--charlength <charlength>', 'length of the string', {
        default: 32 
    })
    .action(({ logger, options }) => {
        const result = charLoop([...lowerChar, ...numChar, ...upperChar], options.charlength)
        logger.info(result)
    })
    .option('--letters <letters>', 'contain a letter or not', { validator: program.BOOLEAN, default: true })
    .action(({ logger, options }) => {
        if(!options.letters) {
            const result = charLoop([...numChar], options.charlength)
            logger.info(result)
        } else {
            const result = charLoop(charset, options.charlength)
            logger.info(result)
        }
    })
    .option('--numbers <numbers>', 'contain a number or not', { validator: program.BOOLEAN, default: true })
    .action(({ logger, options }) => {
        if(!options.numbers) {
            const result = charLoop([...lowerChar, ...upperChar], options.charlength)
            logger.info(result)
        } else {
            const result = charLoop(charset, options.charlength)
            logger.info(result)
        }
    })
    .option('--uppercase <uppercase>', 'uppercase or not')
    .action(({ logger, options }) => {
        if(options.uppercase) {
            const result = charLoop(charset, options.charlength).toUpperCase()
            logger.info(result)
        } else {
            const result = charLoop(charlength, options.charlength)
            logger.info(result)
        }
    })
    .option('--lowercase <lowercase>', 'lowercase or not')
    .action(({ logger, options }) => {
        if(options.lowercase) {
            const result = charLoop(charset, options.charlength).toLowerCase()
            logger.info(result)
        } else {
            const result = charLoop(charset, options.charlength)
            logger.info(result)
        }
    })


const privateIp = require('internal-ip')
program.command('ip', 'returns private ip address')
    .action(async ({ logger }) => {
        logger.info(await privateIp.v4())
    })

const publicIp = require('public-ip')
program.command('ip-external', 'returns public ip address')
    .action(async ({ logger }) => {
        logger.info(await publicIp.v4())
    })

const axios = require('axios')
const cheerio = require('cheerio')
program.command('headlines', 'fetch kompas.com headlines')
    .action(async () => {
        const html = await axios.get('https://indeks.kompas.com/headline')
        const $ = await cheerio.load(html.data)
        let data = []

        $('.article__list').each((i, elem) => {
            data.push({
                title: $(elem).find('.article__link').text(),
                url: $(elem).find('.article__link').attr('href')
            })
        })
        console.log(data)
    })

const converCsvToXlsx = require('@aternus/csv-to-xlsx')
const { convert } = require('xlsx-converter')
const path = require('path')
program.command('convert', 'convert csv to xlsx')
    .argument('<file...>', 'input file to convert')
    .action(({ logger, args }) => {
        if(args.file[0].split('.')[1].match(/csv/)) {
            let source = path.join(__dirname, args.file[0])
            let destination = path.join(__dirname, args.file[1])

            try {
                converCsvToXlsx(source, destination)
                logger.info('converted')
            } catch (e) {
                logger.info(e.toString())
            }
        } else {
            
        }
    })
program.run()