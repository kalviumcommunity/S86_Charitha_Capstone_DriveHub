import express from 'express';
import Vehicle from '../models/vehicleModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
});

export default router;
