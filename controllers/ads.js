const express = require('express');
const jwt = require('jsonwebtoken');
const Ad = require('../models/ad');
const router = express.Router();
const verifyToken = require('../middleware/verify-token')

// get all ads
router.get('/', async (req, res) => {
  try {
      const ads = await Ad.find({})
      res.json(ads)
  } catch (err) {
      res.status(500).json({ err: err.message })
  }
})

// create ad
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description, price, status, location, image, category } = req.body;

    if (!title || !price || !status || !location || !image || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const userId = req.user._id;

    const newAd = new Ad({
      userId,
      title,
      description,
      price,
      status,
      location,
      image,
      category,
    });

    const savedAd = await newAd.save();

    res.status(201).json(savedAd);
  } catch (err) {
    console.error('Error creating ad:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;