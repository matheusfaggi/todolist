module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tasks', [
            {
                task_description: 'First task !',
            },
            {
                task_description: 'Second task !',
            },
            {
                task_description: 'Third task !',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('tasks', null, {})
    },
}
