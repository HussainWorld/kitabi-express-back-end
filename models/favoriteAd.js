const mongoose = require('mongoose');

const favoriteAd = new mongoose.Schema({
  adId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  }
});

module.exports = favoriteAd;
