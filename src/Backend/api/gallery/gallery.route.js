const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'files/' });
const galleryController = require('./gallery.controller');

router.post('/saveImg',upload.single('img'),galleryController.saveImage);
router.get('/getImages',galleryController.getImages);

module.exports = router;