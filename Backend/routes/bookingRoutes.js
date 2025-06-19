import express from 'express';
import Booking from '../models/bookingModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

export default router;
