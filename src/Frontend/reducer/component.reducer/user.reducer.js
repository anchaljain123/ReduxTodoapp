import {
  LOADER_STARTED,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILED,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../../constant'

const initialState = {
  user: {},
  loading: false,
  err: '',
  status:''
};
export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOADER_STARTED: {
      return {
        ...state,
        loading: true,
      }
    }

    case SAVE_USER_SUCCESS : {
      return {
        ...state,
        loading: false,
        status:'success'

      }
    }

    case SAVE_USER_FAILED: {
      return {
        ...state,
        loading: false,
        err: action.err
      }
    }

    case GET_USER_SUCCESS:{
      return{
        ...state,
        loading:false,
        user:action.data,
        status:'success'
      }
    }

    case GET_USER_FAILED:{
      return{
        ...state,
        err:action.err,
        loading:false,
      }
    }

    case LOGIN_USER_SUCCESS:{
    return{
        ...state
      }
    }

    case LOGIN_USER_FAILED:{
      return{
        ...state,
        err:action.err
      }
    }
  }
  return state;
};