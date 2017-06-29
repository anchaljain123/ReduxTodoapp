const Comment = require('./comment.model');

exports.saveComment = function (todoDetails, res) {

console.log(todoDetails,'>>>>>>>service');
const newComment = new Comment(todoDetails);
 newComment.save(todoDetails, (err, data) => {
    if (err)
      res.send({error: err});
    else {
      res.send(data);
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
        console.log(data,'>>getcmnt')
        res.send(data);
      }
    })
};

exports.deleteComment = (commentId,res) => {

   Comment.findByIdAndRemove(commentId.id,(err,data)=>{
     if(err) {
       res.send(err)
     }else{
       console.log(data,'data------------')
       res.send(data)
     }
   });

};
