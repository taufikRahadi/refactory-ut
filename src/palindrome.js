const { program } = require('@caporal/core')

program.command('palindrome')
    .argument('<string>', 'input strring to check palindrome')
    .action(({ logger, args }) => {
        const rev = args.string.toLowerCase().split('').map(val => val.match(/\w/g)).reverse().join() === args.string.toLowerCase().replace(/\w/g, '')
        logger.info(`String: ${args.string}`)
        logger.info('is palindrome: ' + (rev) ? 'yes' : 'no')
    })

program.run()