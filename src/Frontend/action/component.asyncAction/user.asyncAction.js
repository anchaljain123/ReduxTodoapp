import fetch from 'isomorphic-fetch'
import {
  asyncLoaderStarted,
  asyncSaveUserSuccess,
  asyncSaveUserFailed,
  asyncGetUserSuccess,
  asyncGetUserFailed,
  asyncLoginUserSuccess,
  asyncLoginUserFailed
} from '../component.action/user.actions'

export const asyncsaveUser = (userData) => {
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/saveUser', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(userData),
    })
      .then(res => {
        if(!res.ok) {
          return new Promise((resolve, reject) => {
            res.json().then((err) => {
              reject(err);
            });
          });
        } else {
          return res.json()
        }
      })
      .then(data => {
        dispatch(asyncSaveUserSuccess(data))
      })
      .catch(err => {
        dispatch(asyncSaveUserFailed(err))
      });

  }
}; //signup

export const asyncgetUser = () => {
  return(dispatch) => {
    dispatch(asyncLoaderStarted());
     fetch('/getUser',{
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials:'include'
    })
      .then(res=>res.json())
      .then(data => {
          dispatch(asyncGetUserSuccess(data));
        })
      .catch(err=> {
        dispatch(asyncGetUserFailed(err))
      })
  }
}; //afterLogin

export const asyncLoginUser = (userData) => {
  return function(dispatch) {
    dispatch(asyncLoaderStarted());
    return fetch('/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body:JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(asyncLoginUserSuccess(data));
        return data;
      })
      .catch(err => {
        dispatch(asyncLoginUserFailed(err))
      });

  }
}; //login