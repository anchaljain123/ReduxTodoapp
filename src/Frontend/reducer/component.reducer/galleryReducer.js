import {
  LOADER_STARTED,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILED
} from '../../constant'

const initialState = {
  gallery: [],
  loading: false,
  err: '',
};
export const galleryReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOADER_STARTED: {
      return {
        ...state,
        loading: true,
      }
    }

    case GET_IMAGES_SUCCESS : {
      return {
        ...state,
        gallery:action.data,
        loading: false,
      }
    }

    case GET_IMAGES_FAILED: {
      return {
        ...state,
        loading: false,
        err: action.err
      }
    }


  }
  return state;
};