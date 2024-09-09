const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ['Industrial Partner', 'Project Partner', 'Funding Partner'],
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

module.exports = mongoose.model('Partner', partnerSchema);
