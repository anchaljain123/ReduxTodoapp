import {
LOADER_STARTED,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED
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
      console.log(action.data)
      const commentData = state.comments.concat(action.data)
      return{
        ...state,
        loading:false,
        comments:commentData
      }
    }

    case SAVE_COMMENT_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }

    case GET_COMMENTS_SUCCESS:{
      console.log(action.data,'>>>reducer------------------------')
      return{
        ...state,
        loading:false,
        comments:action.data
      }
    }

    case GET_COMMENTS_FAILED:{
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