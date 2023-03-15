import { Router } from "express";
import * as assignProductController from '../controllers/assignProduct.controller.js'

const router = Router();

router.get('/', assignProductController.getAll);

router.get('/:id', assignProductController.getOne);

router.post('/', assignProductController.save);

router.put('/:id', assignProductController.update);

router.delete('/:id', assignProductController.deleteOne);

export default router;