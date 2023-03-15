import { Router } from "express";
import * as ProductController from '../controllers/product.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of Product
 *              name:
 *                  type: string
 *                  description: product's name
 *              serial: 
 *                  type: number
 *                  description: product's serial
 *              brand_id:
 *                  type: string
 *                  description: brand's id
 *              ref_id:
 *                  type: string
 *                  description: ref's id
 *              description:
 *                  type: string
 *                  description: employee's unique email
 *              status:
 *                  type: string
 *                  description: Nuevo o Usado
 *          required: 
 *              - name
 *              - serial
 *              - brand_id
 *              - ref_id
 *              - description
 *          example:
 *              id: 6411221100e7fc435fd0a51e
 *              name: Mi 9
 *              serial: 1235
 *              brand_id: 6411214fb1d5d97cda2ce0d7
 *              ref_id: 6410f80de29b49fa35d2d721
 *              description: Celular alta gama
 *              status: Nuevo
 *  parameters:
 *      productId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: product's id
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Product's endpoints
 */

/**
 * @swagger
 *  /api/v1/products:
 *      get:
 *          summary: Get a products list
 *          tags: [Products]
 *          responses: 
 *              200:
 *                  description: the list of products
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Product'
 * */
router.get('/', ProductController.getAll);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *      get:
 *          summary: Get a product by id
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/productId'
 *          responses: 
 *              200:
 *                  description: Product was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Product wasn't found     
 * */
router.get('/:id', ProductController.getOne);

/**
 * @swagger
 *  /api/v1/products:
 *      post:
 *          summary: Save a new product
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses: 
 *              201:
 *                  description: Product succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Product'
 *              404:
 *                  description: Product was not found
 * */
router.post('/', ProductController.save);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *      put:
 *          summary: Update a product by id
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/productId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              200:
 *                  description: Updated product
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', ProductController.update);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *      delete: 
 *          summary: Delete a product by id
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/productId'
 *          responses:
 *              200: 
 *                  description: the product was deleted
 */
router.delete('/:id', ProductController.deleteOne);

export default router;