import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  startDate: Date,
  endDate: Date,
});

export default mongoose.model('Booking', bookingSchema);
