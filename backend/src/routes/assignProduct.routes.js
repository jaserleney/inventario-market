import { Router } from "express";
import * as assignProductController from '../controllers/assignProduct.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Assign:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of Assign
 *              employee_id:
 *                  type: string
 *                  description: employee's id
 *              product_id: 
 *                  type: string
 *                  description: product's id
 *              description:
 *                  type: string
 *                  description: Description of product condition
 *          required: 
 *              - employee_id
 *              - product_id
 *              - description
 *          example:
 *              id: 64112596a101906834d58eaa
 *              employee_id: 6410f0d0807773f0cbbb90ae
 *              product_id: 6411221100e7fc435fd0a51e
 *              description: Se entrega el celular en óptimas condiciones
 *  parameters:
 *      assignId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: assign's id
 */

/**
 * @swagger
 * tags:
 *  name: Assigns
 *  description: Assigns's endpoints
 */

/**
 * @swagger
 *  /api/v1/assigns:
 *      get:
 *          summary: Get an assigns list
 *          tags: [Assigns]
 *          responses: 
 *              200:
 *                  description: the list of assigns
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Assign'
 * */
router.get('/', assignProductController.getAll);

/**
 * @swagger
 *  /api/v1/assigns/{id}:
 *      get:
 *          summary: Get an assign by id
 *          tags: [Assigns]
 *          parameters:
 *              - $ref: '#/components/parameters/assignId'
 *          responses: 
 *              200:
 *                  description: Assign was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Assign'
 *              500:
 *                  description: Assign wasn't found     
 * */
router.get('/:id', assignProductController.getOne);

/**
 * @swagger
 *  /api/v1/assigns:
 *      post:
 *          summary: Save a new assign
 *          tags: [Assigns]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Assign'
 *          responses: 
 *              201:
 *                  description: Assign succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Assign'
 *              404:
 *                  description: Assign was not found
 * */
router.post('/', assignProductController.save);

/**
 * @swagger
 *  /api/v1/assigns/{id}:
 *      put:
 *          summary: Update an assign by id
 *          tags: [Assigns]
 *          parameters:
 *              - $ref: '#/components/parameters/assignId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Assign'
 *          responses:
 *              200:
 *                  description: Updated assign
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Assign'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', assignProductController.update);

/**
 * @swagger
 *  /api/v1/assigns/{id}:
 *      delete: 
 *          summary: Delete an assign by id
 *          tags: [Assigns]
 *          parameters:
 *              - $ref: '#/components/parameters/assignId'
 *          responses:
 *              200: 
 *                  description: the assign was deleted
 */
router.delete('/:id', assignProductController.deleteOne);

export default router;