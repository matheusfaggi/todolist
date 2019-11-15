import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init({
      task_description: Sequelize.STRING,
      is_done: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    });
  }
}

export default Task;
