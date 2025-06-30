import express from 'express';
import Booking from '../models/bookingModel.js';
import Vehicle from '../models/vehicleModel.js';

const router = express.Router();

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST booking using vehicle name
router.post('/', async (req, res) => {
  try {
    const { name, vehicle, startDate, endDate } = req.body;

    if (!name || !vehicle || !startDate || !endDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const vehicleData = await Vehicle.findOne({ name: vehicle });
    if (!vehicleData) return res.status(404).json({ message: 'Vehicle not found' });

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    if (days <= 0) return res.status(400).json({ message: 'Invalid date range' });

    const totalPrice = days * vehicleData.price;

    const booking = new Booking({ name, vehicle, startDate, endDate, status: 'pending', totalPrice });
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create booking', error: err.message });
  }
});

// PUT update a booking by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, vehicle, startDate, endDate, status } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    // If vehicle is being updated, recalculate totalPrice
    if (vehicle) {
      const vehicleData = await Vehicle.findOne({ name: vehicle });
      if (!vehicleData) return res.status(404).json({ message: 'Vehicle not found' });

      const start = new Date(startDate || booking.startDate);
      const end = new Date(endDate || booking.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

      if (days <= 0) return res.status(400).json({ message: 'Invalid date range' });

      booking.totalPrice = days * vehicleData.price;
      booking.vehicle = vehicle;
    }

    // Update other fields
    if (name) booking.name = name;
    if (startDate) booking.startDate = startDate;
    if (endDate) booking.endDate = endDate;
    if (status) booking.status = status;

    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update booking', error: err.message });
  }
});

// DELETE booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: 'Booking not found' });

    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete booking', error: err.message });
  }
});

export default router;
