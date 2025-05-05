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

    if (!wan) {
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

// update wanted ad
router.put('/:wantedAdId', verifyToken, async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const { wantedAdId } = req.params;

    if (!title || !image) {
      return res.status(400).json({ error: 'Title and image are required' });
    }

    const userId = req.user._id;  // Ensure the user is updating their own ad

    // Find the ad by ID and update it
    const wantedAd = await WantedAd.findById(wantedAdId);

    if (!wantedAd) {
      return res.status(404).json({ error: 'Ad not found' });
    }

    // Check if the user is the owner of the ad
    if (wantedAd.userId.toString() !== userId.toString()) {
      return res.status(403).json({ error: 'You are not authorized to update this ad' });
    }

    // Update the ad fields
    wantedAd.title = title || wantedAd.title;
    wantedAd.description = description || wantedAd.description;
    wantedAd.image = image || wantedAd.image;

    // Save the updated ad
    const updatedWantedAd = await wantedAd.save();

    res.status(200).json(updatedWantedAd);
  } catch (err) {
    console.error('Error updating ad:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;