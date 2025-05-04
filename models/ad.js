const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['New', 'Used']
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    require: false,
    default: 'defaultAdImage'
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // Save the creation date automatically
  },
});

module.exports = mongoose.model('ad', adSchema);
