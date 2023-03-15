import { Router } from "express";
import * as RefController from '../controllers/ref.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Reference:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of Reference
 *              name:
 *                  type: string
 *                  description: reference's name
 *          required: 
 *              - name
 *          example:
 *              id: 6410f80de29b49fa35d2d721
 *              name: Celular
 *  parameters:
 *      referenceId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: reference's id
 */

/**
 * @swagger
 * tags:
 *  name: References
 *  description: Reference's endpoints
 */

/**
 * @swagger
 *  /api/v1/refs:
 *      get:
 *          summary: Get a references list
 *          tags: [References]
 *          responses: 
 *              200:
 *                  description: the list of references
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/References'
 * */
router.get('/', RefController.getAll);

/**
 * @swagger
 *  /api/v1/refs/{id}:
 *      get:
 *          summary: Get a reference by id
 *          tags: [References]
 *          parameters:
 *              - $ref: '#/components/parameters/referenceId'
 *          responses: 
 *              200:
 *                  description: Reference was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Reference'
 *              500:
 *                  description: Reference wasn't found     
 * */
router.get('/:id', RefController.getOne);

/**
 * @swagger
 *  /api/v1/refs:
 *      post:
 *          summary: Save a new reference
 *          tags: [References]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Reference'
 *          responses: 
 *              201:
 *                  description: Reference succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Reference'
 *              404:
 *                  description: Reference was not found
 * */
router.post('/', RefController.save);

/**
 * @swagger
 *  /api/v1/refs/{id}:
 *      put:
 *          summary: Update a reference by id
 *          tags: [References]
 *          parameters:
 *              - $ref: '#/components/parameters/referenceId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Reference'
 *          responses:
 *              200:
 *                  description: Updated reference
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Reference'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', RefController.update);

/**
 * @swagger
 *  /api/v1/refs/{id}:
 *      delete: 
 *          summary: Delete a reference by id
 *          tags: [References]
 *          parameters:
 *              - $ref: '#/components/parameters/referenceId'
 *          responses:
 *              200: 
 *                  description: the reference was deleted
 */
router.delete('/:id', RefController.deleteOne);

export default router;