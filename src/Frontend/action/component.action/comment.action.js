import {
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILED
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

export const asyncgetCommentSuccess =(data) =>{
  return{
    type:GET_COMMENTS_SUCCESS,
    data
  }
};

export const asyncgetCommentFailed = (err) =>{
  return{
    type:GET_COMMENTS_FAILED,
    err
  }
};

export const asyncDeleteCommentFailed = (err) => {
  return {
    type: DELETE_COMMENT_FAILED, err
  }
};

export const asyncDeleteCommentSuccess = (data) =>{
  return{
    type:DELETE_COMMENT_SUCCESS,data
  }
};
