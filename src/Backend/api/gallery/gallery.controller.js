const galleryService = require('./gallery.service');


exports.saveImage = (req,res,next)  => {
  galleryService.saveImage(req.file,res)
};

exports.getImages = (req,res,next) =>{
  galleryService.getImages(res)
};