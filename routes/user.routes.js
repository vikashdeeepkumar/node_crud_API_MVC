import { Router } from 'express';
import { index,showsingleuser,insert,update,remove } from '../controllers/controller.crud.js';

const router = Router();
router.get('/', index);
router.get('/show/:id',showsingleuser)
router.post('/add',insert);
router.put('/update/:id', update);
router.delete('/delete/:id', remove); 

export default router;