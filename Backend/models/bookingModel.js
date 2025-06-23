import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Customer name
  vehicle: { type: String, required: true }, // Vehicle name
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
