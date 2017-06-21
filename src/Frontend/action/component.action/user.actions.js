import {
  LOADER_STARTED,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILED,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../../constant'


export const asyncLoaderStarted = () => {
  return {
    type: LOADER_STARTED
  }
};

export const asyncSaveUserSuccess = (data) => {
  return {
    type: SAVE_USER_SUCCESS, data
  }
};

export const asyncSaveUserFailed = (err) => {
  return {
    type: SAVE_USER_FAILED,
    err
  }
};

export const asyncGetUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    data
  }
};

export const asyncGetUserFailed = (err) => {
  return {
    type: GET_USER_FAILED,
    err
  }
};

export const asyncLoginUserSuccess = (data) => {
  return{
    type:LOGIN_USER_SUCCESS,data
  }
};

export const asyncLoginUserFailed = (err) =>{
  return{
    type:LOGIN_USER_FAILED,err
  }
};