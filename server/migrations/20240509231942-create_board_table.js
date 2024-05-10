'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HighBoards', {
      role: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      season: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      schema: "ieee_website"
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HighBoards');
  }
};
