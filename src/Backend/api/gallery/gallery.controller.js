const galleryService = require('./gallery.service');


export const saveImage = (req,res,next)  => {
  galleryService.saveImage(req.file,res)
};

