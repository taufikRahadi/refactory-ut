#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')

program.command('list', 'Show todo list')
    .action(async () => {
        const tasks = await Task.findAll()
        tasks.forEach(task => {
            console.log(`${task.id}. ${task.text} ${task.status ? '(DONE)' : ''}`)
        })
    })

program.run()