import {
LOADER_STARTED,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILED
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
      const commentData = state.comments.concat(action.data);
      console.log(action.data,'>>>savecmnt reducer==============>')
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
      console.log(action.data,'>>>reducer getComments==============>')
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

    case DELETE_COMMENT_SUCCESS:{
      console.log(action.data,'...delsucc');
      let arry = state.comments;
       arry.filter((item,i) =>{
        if(item._id === action.data._id){
          arry.splice(i,1)
        }
      });
      return{
        ...state,
        comments:arry,
        loading:false
      }
    }

    case DELETE_COMMENT_FAILED:{
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