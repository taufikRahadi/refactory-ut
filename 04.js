#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')

program.command('del', 'Delete task')
    .argument('<id>', 'task id')
    .action(async ({ args }) => {
        const task = await Task.findByPk(args.id)
        task.destroy().then(async () => {
            const tasks = await Task.findAll()
            tasks.forEach(task => console.log(`${task.id}. ${task.text}`))
        })
    })

program.run()