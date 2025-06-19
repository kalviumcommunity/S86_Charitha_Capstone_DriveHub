import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  model: String,
  type: String,
  location: String,
  price: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Vehicle', vehicleSchema);
