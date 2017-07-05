const commentService = require('./comment.service');
const sendMail = require('../../configuration/sendMail');

export const saveComment = (req,res,next)  => {
  if(req.body.tagEmail){
    let ob = {
      email : req.body.tagEmail,
      tagcomment : req.body.comment,
      todo:req.body.todoId,
      User:req.body.taggedBy
    };
    sendMail.send(ob)
  }
  commentService.saveComment(req.body,res);
};

export const getComments = (req,res,next) =>{
  commentService.getComments(res)
};

export const deleteComment = (req,res,next) => {
  commentService.deleteComment(req.body,res)
};