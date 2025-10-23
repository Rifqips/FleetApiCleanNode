import { Router } from 'express';
import vehicleRoutes from '../modules/vehicles/routes.js';

const router = Router();

router.use('/vehicles', vehicleRoutes);

export default router;
