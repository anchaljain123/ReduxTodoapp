import {
LOADER_STARTED,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILED
}from '../../constant'

const initialState = {
  comments : [],
  loading : false,
  err:''
};

export const commentReducer = (state=initialState,action) => {

  switch (action.type){
    case LOADER_STARTED:{
      return{
        ...state,
        loading:true
      }
    }

    case SAVE_COMMENT_SUCCESS:{
      return{
        ...state,
        loading:false
      }
    }

    case SAVE_COMMENT_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }

    default:
      return state;
  }
};