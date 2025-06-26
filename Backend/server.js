// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config(); // Loads environment variables from .env file

const app = express(); // ✅ Make sure this is defined
const PORT = process.env.PORT || 5000; // ✅ Default to 5000 if .env missing

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err.message));

// API Routes
app.use('/api/users', userRoutes);         // GET, POST, PUT, DELETE
app.use('/api/vehicles', vehicleRoutes);   // GET, POST, PUT, DELETE
app.use('/api/bookings', bookingRoutes);   // GET, POST, PUT, DELETE

// Root test route
app.get('/', (req, res) => {
  res.send('🚗 DriveHub API Running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌍 Server running at http://localhost:${PORT}`);
});
