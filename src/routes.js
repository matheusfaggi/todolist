import Router from 'express';

import UserController from './app/controllers/UserController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.get('/tasks', TaskController.show);
routes.post('/task', TaskController.store);
routes.delete('/task', TaskController.delete);
routes.put('/task', TaskController.alter);

export default routes;
