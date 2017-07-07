const Gallery = require('./gallery.model');

exports.saveImage = function (imageData, res) {
  Gallery.create(imageData,(err,data)=>{
    if(err){
      res.send(err);
    }else {
      console.log(data,'..data')
      res.send(data)
    }
  })
};

