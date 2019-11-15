/* eslint-disable no-unused-vars */
/* MIGRATION CRIADA PARA A CONSTRUÇÃO DA TABELA TASKS */
module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      task_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('tasks'),
};
