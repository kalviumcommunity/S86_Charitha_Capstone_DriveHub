import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

// GET all users (excluding passwords)
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = new User({ name, email, password, role });
    const saved = await user.save();
    res.status(201).json({ ...saved._doc, password: undefined }); // hide password in response
  } catch (err) {
    res.status(400).json({ message: 'Failed to add user', error: err.message });
  }
});

// PUT update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Prevent changing email to an existing user's email
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) return res.status(400).json({ message: 'Email already in use' });
      user.email = email;
    }

    if (name) user.name = name;
    if (password) user.password = password; // Ideally hash it before saving (handled in model middleware)
    if (role) user.role = role;

    const updated = await user.save();
    res.json({ ...updated._doc, password: undefined }); // hide password
  } catch (err) {
    res.status(400).json({ message: 'Failed to update user', error: err.message });
  }
});

// DELETE a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user', error: err.message });
  }
});

export default router;
