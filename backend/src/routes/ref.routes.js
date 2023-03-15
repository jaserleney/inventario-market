import { Router } from "express";
import * as RefController from '../controllers/ref.controller.js'

const router = Router();

router.get('/', RefController.getAll);

router.get('/:id', RefController.getOne);

router.post('/', RefController.save);

router.put('/:id', RefController.update);

router.delete('/:id', RefController.deleteOne);

export default router;