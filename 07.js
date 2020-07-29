#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')


program.command('undone', 'set task to be undone')
    .argument('<id>', 'task id')
    .action(({ args }) => {
        Task.update({ status: false }, {
            where: {
                id: args.id
            }
        }).then(() => {
            console.log('task undone')
        })
    })

program.run()
