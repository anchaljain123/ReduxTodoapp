import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILED
}from '../../constant'

export const getImagesSuccess = (data) =>{
  return{
    type: GET_IMAGES_SUCCESS,data
  }
};

export const getImagesFailed = (err) => {
  return{
    type: GET_IMAGES_FAILED,err
  }
};