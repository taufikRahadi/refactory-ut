const { program } = require('@caporal/core')

program.command('lowercase', 'convert string to lowercase letter')
    .argument('<string>', 'input string')
    .action(({ logger, args, options }) => {
        logger.info(args.string.toLowerCase())
    })

program.command('uppercase', 'convert string to uppercase letter')
    .argument('<string>', 'input string')
    .action(({ logger, args, options }) => {
        logger.info(args.string.toUpperCase())
    })

program.command('capitalize', 'capitalize string')
    .argument('<string>', 'input string')
    .action(({ logger, args, options }) => {
        logger.info(args.string.split(' ').map(val => val.toLowerCase().replace(val.charAt(0), val.charAt(0).toUpperCase())).join(' '))
    })

program.run()