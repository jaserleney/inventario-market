import { Router } from "express";
import * as EmployeeController from '../controllers/employee.controller.js'

const router = Router();

router.get('/', EmployeeController.getAll);

router.get('/:id', EmployeeController.getOne);

router.post('/', EmployeeController.save);

router.put('/:id', EmployeeController.update);

router.delete('/:id', EmployeeController.deleteOne);

export default router;