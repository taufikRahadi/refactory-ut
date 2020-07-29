#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')

program.command('add', 'Add new task to database')
    .argument('<task>', 'Task text', { validator: program.STRING })
    .action(async ({ args }) => {
        const task = await Task.create({ text: args.task })
        console.log(`${task.id}. ${task.text}`)
    })

program.run()