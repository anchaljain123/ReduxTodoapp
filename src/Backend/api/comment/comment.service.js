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
    .populate('todoId')
    .exec((err, data) => {
      if (err)
        res.send({error: err});
      else {
        console.log(data,'>>getcmnt')
        res.send(data);
      }
    })
};

exports.deleteComment = (commentId, res) => {
  Comment.remove({'_id': commentId.id}, (err, data) => {
    if (err)
      res.send({msg: "Failed to remove document", error: err});
    else {
      Comment.find((err, data) => {
        if (err) {
          res.send({msg: "Failed to fetch data", error: err})
        }
        else {
          res.send(data);
        }
      })
    }
  })
};
