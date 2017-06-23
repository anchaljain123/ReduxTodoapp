import commentService from './comment.service'

export const saveComment = (req,res,next)  => {
  console.log(req.body);
  //commentService.saveComment(req.body,res);
  next()
};
