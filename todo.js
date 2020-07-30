#!/usr/bin/env node

const { program } = require('@caporal/core')
const list = require('./src/list.js')
const add = require('./src/add.js')
const update = require('./src/update.js')
const del = require('./src/del.js')
const clear = require('./src/clear.js')
const done = require('./src/done.js')
const undone = require('./src/undone.js')

program.command('list', 'Tasks list')
    .action(() => list())

program.command('add', 'Create new Task')
    .argument('<text>', 'input text')
    .action(({ args }) => add(args.text))

program.command('update', 'Update current Task')
    .argument('<id>', 'task id')
    .argument('<text>', 'input text')
    .action(({ args }) => update(args.id, args.text))

program.command('del', 'Delete Task')
    .argument('<id>', 'task id')
    .action(({ args }) => del(args.id))

program.command('clear', 'Clear all Tasks')
    .action(() => clear())

program.command('done', 'Set done task')
    .argument('<id>', 'task id')
    .action(({ args }) => done(args.id))

program.command('undone', 'undone task')
    .argument('<id>', 'task id')
    .action(({ args }) => undone(args.id))

program.run()