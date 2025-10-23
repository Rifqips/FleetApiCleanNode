// src/modules/vehicles/routes.js
import { Router } from 'express';
import { VehicleController } from './controller.js';
import { validate, vehicleSchemas } from '../../middlewares/validate.js';

const r = Router();

/**
 * @openapi
 * /api/v1/vehicles:
 *   get:
 *     summary: List vehicles (search & pagination)
 *     tags: [Vehicles]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema: { type: string }
 *         description: Free text search (plate/brand/model)
 *       - in: query
 *         name: page
 *         schema: { type: integer, minimum: 1, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, minimum: 1, maximum: 100, default: 10 }
 *     responses:
 *       200:
 *         description: Paginated list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VehicleList'
 */
r.get('/', validate(vehicleSchemas.listQuery), VehicleController.list);

/**
 * @openapi
 * /api/v1/vehicles/{id}:
 *   get:
 *     summary: Get vehicle by id
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Vehicle
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Not found
 */
r.get('/:id', validate(vehicleSchemas.idParam), VehicleController.get);

/**
 * @openapi
 * /api/v1/vehicles:
 *   post:
 *     summary: Create vehicle
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 */
r.post('/', validate(vehicleSchemas.create), VehicleController.create);

/**
 * @openapi
 * /api/v1/vehicles/{id}:
 *   put:
 *     summary: Update vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       200:
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Not found
 */
r.put('/:id', validate(vehicleSchemas.update), VehicleController.update);

/**
 * @openapi
 * /api/v1/vehicles/{id}:
 *   delete:
 *     summary: Delete vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
r.delete('/:id', validate(vehicleSchemas.idParam), VehicleController.remove);

export default r;
