const { program } = require('@caporal/core')

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

program.run()