import fetch from 'isomorphic-fetch'
import {
  asyncsaveCommentSuccess,
  asyncsaveCommentFailed,
  asyncgetCommentSuccess,
  asyncgetCommentFailed,
  asyncDeleteCommentSuccess,
  asyncDeleteCommentFailed
} from  '../component.action/comment.action'
import {
  asyncLoaderStarted
}from '../component.action/user.actions'

export const asyncgetComments = () =>{
  return function (dispatch) {
    dispatch(asyncLoaderStarted());
    fetch('/getComments')
      .then(res => res.json())
      .then(data => dispatch(asyncgetCommentSuccess(data)))
      .catch(err => dispatch(asyncgetCommentFailed(err)))
  }
};



export const asyncsaveComment = (commentState) => {
  console.log(commentState,'=======asynccmmnt');
  return function (dispatch,getStore) {
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
      .then(data => {
        data.postedBy = getStore().userReducer.user;
        console.log(data,'>>>>>>>>>>>>>>>store')
        dispatch(asyncsaveCommentSuccess(data));

        //dispatch(asyncgetComments())
      })
      .catch(err => dispatch(asyncsaveCommentFailed(err)))
  }
};


export const asyncdeleteComment = (commentData) => {
  return(dispatch) =>{
    fetch('/deleteComment',{
      method:'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(commentData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data,'---asyncdata')
        dispatch(asyncDeleteCommentSuccess(data));
      })
      .catch(err => {
        dispatch(asyncDeleteCommentFailed(err));
      })
  }
};