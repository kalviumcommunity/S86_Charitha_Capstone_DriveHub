// models/vehicleModel.js
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number },
  type: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Vehicle', vehicleSchema);
