import fetch from 'isomorphic-fetch'
import {
  getImagesSuccess,
  getImagesFailed
}from '../component.action/gallery.action'

import {
  asyncLoaderStarted
}from '../component.action/user.actions'


export const getImages = () =>{
  return dispatch => {
    dispatch(asyncLoaderStarted());
    return fetch('/getImages')
      .then(res=>res.json())
      .then(data => {
        dispatch(getImagesSuccess(data));
        return data
      })
      .catch(err => {
        console.log(err);
        dispatch(getImagesFailed(err))
      })
  }
};