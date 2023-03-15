import { Router } from "express";
import * as BrandController from '../controllers/brand.controller.js'

const router = Router();

router.get('/', BrandController.getAll);

router.get('/:id', BrandController.getOne);

router.post('/', BrandController.save);

router.put('/:id', BrandController.update);

router.delete('/:id', BrandController.deleteOne);

export default router;