import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getTask,getTasks,postTask,putTask,deleteTask,getAllTasks } from 
'../controllers/tasks.controller.js';

const router = Router();

router.get('/tasks', getAllTasks);
/*router.get('/tasks/:id',authRequired, getTask);
router.post('/tasks',authRequired, postTask);
router.delete('/tasks/:id',authRequired, deleteTask);
router.put('/tasks/:id',authRequired, putTask);*/

export default router;