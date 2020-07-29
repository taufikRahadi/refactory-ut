#!/usr/bin/env node

const { program } = require('@caporal/core')
const { Task } = require('./models')
const { Op } = require('sequelize')

program.command('clear')
    .action(async () => {
        Task.destroy({ where:  { 
            id: { 
                [Op.gt]: 0 
            } 
        }, truncate: true})
            .then(() => {
                console.log('success deleted all tasks')
            })
    })

program.run()