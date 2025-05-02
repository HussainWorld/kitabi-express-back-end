const mongoose = require('mongoose');

const favoriteAdsSchema = new mongoose.Schema({
  adId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  }
});

module.exports = favoriteAdsSchema;
