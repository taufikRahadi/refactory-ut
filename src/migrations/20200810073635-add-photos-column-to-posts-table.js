'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Posts', 'photo', {
      type: Sequelize.STRING,
      after: 'status'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'photo')
  }
};
