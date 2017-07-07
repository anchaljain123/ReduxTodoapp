import {combineReducers} from 'redux'
import {userReducer} from './component.reducer/user.reducer'
import {todoReducer} from './component.reducer/todo.reducer'
import {commentReducer} from './component.reducer/commentReducer'
import {galleryReducer} from './component.reducer/galleryReducer'

export const rootReducer = combineReducers({
  userReducer,
  todoReducer,
  commentReducer,
  galleryReducer
  // intl: intlReducer,
});