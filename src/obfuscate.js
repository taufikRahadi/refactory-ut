const { program } = require('@caporal/core')

program.command('obfuscate', '...')
    .argument('<string>', 'input it')
    .action(({ logger, args }) => {
        logger.info([...args.string].map(x => '&#' + x.charCodeAt(0)).join(";"))
    })

program.run()