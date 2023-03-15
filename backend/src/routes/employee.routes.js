import { Router } from "express";
import * as EmployeeController from '../controllers/employee.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Employee:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of Employee
 *              name:
 *                  type: string
 *                  description: employee's name
 *              lastname: 
 *                  type: string
 *                  description: employee's lastname
 *              address:
 *                  type: string
 *                  description: employee's address
 *              phone:
 *                  type: string
 *                  description: employee's phone number
 *              email:
 *                  type: string
 *                  description: employee's unique email
 *          required: 
 *              - name
 *              - lastname
 *              - addresss
 *              - phone
 *              - email
 *          example:
 *              id: 6410f0d0807773f0cbbb90ae
 *              name: Laura
 *              lastname: Riascos
 *              address: Medellín, Antioquia
 *              phone: 132565
 *              email: laura.riascos@gmail.com
 *  parameters:
 *      employeeId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: employee's id
 */

/**
 * @swagger
 * tags:
 *  name: Employees
 *  description: Employee's endpoints
 */

/**
 * @swagger
 *  /api/v1/employees:
 *      get:
 *          summary: Get an employees list
 *          tags: [Employees]
 *          responses: 
 *              200:
 *                  description: the list of employees
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Employee'
 * */
router.get('/', EmployeeController.getAll);

/**
 * @swagger
 *  /api/v1/employees/{id}:
 *      get:
 *          summary: Get an employee by id
 *          tags: [Employees]
 *          parameters:
 *              - $ref: '#/components/parameters/employeeId'
 *          responses: 
 *              200:
 *                  description: Employee was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Employee'
 *              500:
 *                  description: Employee wasn't found     
 * */
router.get('/:id', EmployeeController.getOne);

/**
 * @swagger
 *  /api/v1/employees:
 *      post:
 *          summary: Save a new employee
 *          tags: [Employees]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Employee'
 *          responses: 
 *              201:
 *                  description: Employee succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Employee'
 *              404:
 *                  description: Employee was not found
 * */
router.post('/', EmployeeController.save);

/**
 * @swagger
 *  /api/v1/employees/{id}:
 *      put:
 *          summary: Update a employee by id
 *          tags: [Employees]
 *          parameters:
 *              - $ref: '#/components/parameters/employeeId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Employee'
 *          responses:
 *              200:
 *                  description: Updated employee
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Employee'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', EmployeeController.update);

/**
 * @swagger
 *  /api/v1/employees/{id}:
 *      delete: 
 *          summary: Delete a employee by id
 *          tags: [Employees]
 *          parameters:
 *              - $ref: '#/components/parameters/employeeId'
 *          responses:
 *              200: 
 *                  description: the employee was deleted
 */
router.delete('/:id', EmployeeController.deleteOne);

export default router;