#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')

program.command('update', 'Update selected task')
    .argument('<id>', 'Task id')
    .argument('<text>', 'Task text')
    .action(async ({ args }) => {
        const task = await Task.findByPk(args.id)
        task.update({ text: args.text }).then(task => {
            console.log(`${task.id}. ${task.text}`)
        })
    })

program.run()