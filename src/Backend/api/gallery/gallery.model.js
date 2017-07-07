const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const gallerySchema = new mongoose.Schema({},{strict:false});

module.exports = mongoose.model('Gallery',gallerySchema);
