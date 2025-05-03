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
    const deletedAd = await Ad.findByIdAndDelete(req.params.adId);

    // console.log('user id:',ad.userId.toString())
    // console.log('req.user._id:',req.user._id)

    if (!deletedAd) {
      return res.status(404).json({ err: 'Ad not found' })
    }

    if(req.user._id !== ad.userId.toString()){
      return res.status(403).send("You are not allowed to delete the ad")
    }
    
    res.status(200).json(deletedAd)
  }catch(err){
    res.status(500).json({ err: err.message });
  }
});
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