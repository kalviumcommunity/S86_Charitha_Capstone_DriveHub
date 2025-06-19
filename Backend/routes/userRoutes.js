import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
