const commentService = require('./comment.service');

export const saveComment = (req,res,next)  => {
  commentService.saveComment(req.body,res);
};

export const getComments = (req,res,next) =>{
  commentService.getComments(res)
};

export const deleteComment = (req,res,next) => {
  commentService.deleteComment(req.body,res)
};