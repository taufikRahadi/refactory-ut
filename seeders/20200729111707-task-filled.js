'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Tasks', [{
      text: 'Buat tugas',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Masak Nasi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Mandiin Kucing',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
