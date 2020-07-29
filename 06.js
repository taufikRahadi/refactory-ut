#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')

program.command('done', 'set task to be done')
    .argument('<id>', 'task id')
    .action(async ({ args }) => {
        Task.update({ status: true }, { where: {
            id: args.id
        } })
            .then(() => {
                console.log('task done')
            })

    })

program.run()