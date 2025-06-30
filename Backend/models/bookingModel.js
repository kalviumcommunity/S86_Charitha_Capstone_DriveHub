// models/bookingModel.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },  // customer name
  vehicle: { type: String, required: true }, // vehicle name
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  totalPrice: { type: Number },
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
