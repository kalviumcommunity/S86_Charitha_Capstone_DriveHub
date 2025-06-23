import express from 'express';
import Vehicle from '../models/vehicleModel.js';

const router = express.Router();

// GET all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a vehicle
router.post('/', async (req, res) => {
  try {
    const { name, model, type, location, price, mileage } = req.body;
    const vehicle = new Vehicle({ name, model, type, location, price, mileage });
    const saved = await vehicle.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add vehicle', error: err.message });
  }
});

export default router;
