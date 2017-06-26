import fetch from 'isomorphic-fetch'
import {
  asyncsaveCommentSuccess,
  asyncsaveCommentFailed,
  asyncgetCommentSuccess,
  asyncgetCommentFailed
} from  '../component.action/comment.action'
import {
  asyncLoaderStarted
}from '../component.action/user.actions'

export const asyncsaveComment = (commentState) => {
  console.log(commentState,'=======asynccmmnt');
  return function (dispatch) {
    dispatch(asyncLoaderStarted());
    fetch('/saveComment', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentState),
      method: 'post'
    })
      .then(res => res.json())
      .then(data => dispatch(asyncsaveCommentSuccess(data)))
      .catch(err => dispatch(asyncsaveCommentFailed(err)))
  }
};

export const asyncgetComments = () =>{
  return function (dispatch) {
    dispatch(asyncLoaderStarted());
    fetch('/getComments')
      .then(res => res.json())
      .then(data => dispatch(asyncgetCommentSuccess(data)))
      .catch(err => dispatch(asyncgetCommentFailed(err)))
  }
};