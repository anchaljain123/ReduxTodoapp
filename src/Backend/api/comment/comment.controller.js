const commentService = require('./comment.service');

export const saveComment = (req,res,next)  => {
  console.log(req.body,'--controller');
  commentService.saveComment(req.body,res);
};
