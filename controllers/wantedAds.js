const express = require('express');
const jwt = require('jsonwebtoken');
const WantedAd = require('../models/wantedAd');
const router = express.Router();
const verifyToken = require('../middleware/verify-token')

// get all wanted ads
router.get('/', async (req, res) => {
  try {
      const WantedsAds = await WantedAd.find({})
      res.json(WantedsAds)
  } catch (err) {
      res.status(500).json({ err: err.message })
  }
})


//get specific wanted ad
router.get('/:wantedAdId', verifyToken, async (req, res) => {
  try{
    const wantedAd = await WantedAd.findById(req.params.wantedAdId);
    res.status(200).json(wantedAd)
  }catch(err){
    res.status(500).json({ err: err.message });
  }
});

router.delete("/:wantedAdId", verifyToken, async (req, res) => {
  try{
    const wantedAd = await WantedAd.findById(req.params.wantedAdId);

    // console.log('user id:',ad.userId.toString())
    // console.log('req.user._id:',req.user._id)

    if (!deletedWantedAd) {
      return res.status(404).json({ err: 'Wanted Ad not found' })
    }

    if(req.user._id !== wantedAd.userId.toString()){
      return res.status(403).send("You are not allowed to delete the ad")
    }

    const deletedWantedAd = await WantedAd.findByIdAndDelete(req.params.wantedAdId);
    
    res.status(200).json(deletedWantedAd)
  }catch(err){
    res.status(500).json({ err: err.message });
  }
});

// create ad
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !image ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const userId = req.user._id;

    const newAd = new WantedAd({
      userId,
      title,
      description,
      image
    });

    const savedAd = await newAd.save();

    res.status(201).json(savedAd);
  } catch (err) {
    console.error('Error creating ad:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;