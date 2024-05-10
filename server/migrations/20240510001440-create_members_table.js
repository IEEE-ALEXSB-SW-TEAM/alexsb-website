'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      memberId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        defaultValue: 'member',
        type: Sequelize.STRING
      },
      joined: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      committee1Id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Committees',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      committee2Id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Committees',
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
    await queryInterface.dropTable('Members');
  }
};
