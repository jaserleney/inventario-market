import { Router } from "express";
import * as BrandController from '../controllers/brand.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Brand:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of Brand
 *              name:
 *                  type: string
 *                  description: brand's name
 *          required: 
 *              - name
 *          example:
 *              id: 6410bb953e324fcfd7f51221
 *              name: Samsung
 *  parameters:
 *      brandId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: brand's id
 */

/**
 * @swagger
 * tags:
 *  name: Brands
 *  description: Brand's endpoints
 */

/**
 * @swagger
 *  /api/v1/brands:
 *      get:
 *          summary: Get a brands list
 *          tags: [Brands]
 *          responses: 
 *              200:
 *                  description: the list of brands
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Brands'
 * */
router.get('/', BrandController.getAll);

/**
 * @swagger
 *  /api/v1/brands/{id}:
 *      get:
 *          summary: Get a brand by id
 *          tags: [Brands]
 *          parameters:
 *              - $ref: '#/components/parameters/brandId'
 *          responses: 
 *              200:
 *                  description: Brand was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Brand'
 *              500:
 *                  description: Brand wasn't found     
 * */
router.get('/:id', BrandController.getOne);

/**
 * @swagger
 *  /api/v1/brands:
 *      post:
 *          summary: Save a new brand
 *          tags: [Brands]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Brand'
 *          responses: 
 *              201:
 *                  description: Brand succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Brand'
 *              404:
 *                  description: Brand was not found
 * */
router.post('/', BrandController.save);

/**
 * @swagger
 *  /api/v1/brands/{id}:
 *      put:
 *          summary: Update a brand by id
 *          tags: [Brands]
 *          parameters:
 *              - $ref: '#/components/parameters/brandId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Brand'
 *          responses:
 *              200:
 *                  description: Updated brand
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Brand'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', BrandController.update);

/**
 * @swagger
 *  /api/v1/brands/{id}:
 *      delete: 
 *          summary: Delete a brand by id
 *          tags: [Brands]
 *          parameters:
 *              - $ref: '#/components/parameters/brandId'
 *          responses:
 *              200: 
 *                  description: the brand was deleted
 */
router.delete('/:id', BrandController.deleteOne);

export default router;