const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const galleryController = require('./gallery.controller');

router.post('/saveImg',upload.single('img'),galleryController.saveImage);


module.exports = router;