const mongoose = require('mongoose');
const favoriteAdsSchema = require('./favoriteAdsSchema');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now  // automaitcly adding the date when the user joined the website
  },
  profilePicture: {
    type: String,
    default: 'default_profile_picture.png' // a default picture if the user did not put any
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ad',
    }
  ]
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
});

module.exports = mongoose.model('User', userSchema);
