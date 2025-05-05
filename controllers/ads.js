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


//get specific ad
router.get('/:adId', verifyToken, async (req, res) => {
  try{
    const ad = await Ad.findById(req.params.adId);
    res.status(200).json(ad)
  }catch(err){
    res.status(500).json({ err: err.message });
  }
});

router.delete("/:adId", verifyToken, async (req, res) => {
  try{
    const ad = await Ad.findById(req.params.adId);

    // console.log('user id:',ad.userId.toString())
    // console.log('req.user._id:',req.user._id)

    if (!ad) {
      return res.status(404).json({ err: 'Ad not found' })
    }

    if(req.user._id !== ad.userId.toString()){
      return res.status(403).send("You are not allowed to delete the ad")
    }

    const deletedAd = await Ad.findByIdAndDelete(req.params.adId);

    res.status(200).json(deletedAd)
  }catch(err){
    res.status(500).json({ err: err.message });
  }
});

// create ad
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description, price, status, location, image, category } = req.body;

    if (!title || !price || !status || !location || !category) {
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

// update ad
router.put('/:adId', verifyToken, async (req, res) => {
  try {
    const { title, description, price, status, location, image, category, } = req.body;
    const { adId } = req.params;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and image are required' });
    }

    const userId = req.user._id;  // Ensure the user is updating their own ad

    // Find the ad by ID and update it
    const ad = await Ad.findById(adId);

    if (!ad) {
      return res.status(404).json({ error: 'Ad not found' });
    }

    // Check if the user is the owner of the ad
    if (ad.userId.toString() !== userId.toString()) {
      return res.status(403).json({ error: 'You are not authorized to update this ad' });
    }

    // Update the ad fields
    ad.title = title || ad.title;
    ad.description = description || ad.description;
    ad.image = image || ad.image;

    // Save the updated ad
    const updatedAd = await ad.save();

    res.status(200).json(updatedAd);
  } catch (err) {
    console.error('Error updating ad:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;