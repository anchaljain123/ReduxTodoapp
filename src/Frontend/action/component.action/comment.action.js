import {
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILED

}from '../../constant'

export const asyncsaveCommentSuccess = (data) =>{
  return{
    type:SAVE_COMMENT_SUCCESS,
    data
  }
};

export const asyncsaveCommentFailed = (err) =>{
  return{
    type:SAVE_COMMENT_FAILED,
    err
  }
};