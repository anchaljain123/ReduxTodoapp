const Gallery = require('./gallery.model');

exports.saveImage = function (imageData, res) {
  Gallery.create(imageData,(err,data)=>{
    if(err){
      res.send({msg:err});
    }else {
      res.send(data)
    }
  })
};

exports.getImages = (res) =>{
  Gallery.find({},(err,data)=>{
    if(err){
      res.send({msg:err});
    }else {
      res.send(data)
    }
  })
};