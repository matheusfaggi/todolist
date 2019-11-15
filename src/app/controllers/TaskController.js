/* eslint-disable no-unused-vars */
import Task from '../models/Task';

class TaskController {
  async store(req, res) {
    const { id, task_description } = await Task.create(req.body);

    return res.json({ id, task_description });
  }

  async delete(req, res) {
    const task = await Task.findOne({ where: { id: req.body.id } });
    if (!task) {
      return res.status(400).json({ error: 'Tasks does not exists' });
    }
    const numAffectedRows = await Task.destroy({ where: { id: req.body.id } });

    return res.json({ message: `${numAffectedRows} registry affected` });
  }

  async show(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
  }
  /*
   * QUANDO IMPLEMENTAR O LOGIN E AUTENTICAÇÃO, SEPARAR TASKS POR USUÁRIO
   */

  async alter(req, res) {
    const { id, task_description, is_done } = req.body;
    const task = await Task.findOne({ where: { id } });
    if (!task) {
      return res.status(400).json({ error: 'Tasks does not exists' });
    }
    const [numberOfAffectedRows, affectedRows] = await Task.update({
      task_description,
      is_done,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    });
    return res.status(200).json({ message: `"${affectedRows.task_description}" has successfully changed` });
  }
}

export default new TaskController();
