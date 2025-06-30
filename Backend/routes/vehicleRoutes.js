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

    if (!name || !model || !type || !location || !price || !mileage) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const vehicle = new Vehicle({ name, model, type, location, price, mileage });
    const saved = await vehicle.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add vehicle', error: err.message });
  }
});

// PUT update a vehicle by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, model, type, location, price, mileage } = req.body;

    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    if (name) vehicle.name = name;
    if (model) vehicle.model = model;
    if (type) vehicle.type = type;
    if (location) vehicle.location = location;
    if (price) vehicle.price = price;
    if (mileage) vehicle.mileage = mileage;

    const updated = await vehicle.save();
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update vehicle', error: err.message });
  }
});

// DELETE a vehicle by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Vehicle.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Vehicle not found' });

    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete vehicle', error: err.message });
  }
});

export default router;
