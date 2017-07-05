const Comment = require('./comment.model');

exports.saveComment = function (todoDetails, res) {
const newComment = new Comment(todoDetails);
 newComment.save(todoDetails, (err, data) => {
    if (err)
      res.send({error: err});
    else {
      setTimeout(()=>{
        res.send(data);
      },2000);

    }
  })
};

exports.getComments = function (res) {
  Comment.find({})
    .populate('postedBy')
    .exec((err, data) => {
      if (err)
        res.send({error: err});
      else {
        res.send(data);
      }
    })
};

exports.deleteComment = (commentId,res) => {

   Comment.findByIdAndRemove(commentId.id,(err,data)=>{
     if(err) {
       res.send(err)
     }else{
       res.send(data)
     }
   });

};
