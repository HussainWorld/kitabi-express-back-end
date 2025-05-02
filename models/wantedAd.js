const mongoose = require('mongoose');

const wantedAdSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now // Save the creation date automatically
  },
});

module.exports = mongoose.model('wantedAd', wantedAdSchema);

