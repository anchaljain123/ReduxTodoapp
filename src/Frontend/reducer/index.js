import {combineReducers} from 'redux'
import {userReducer} from './component.reducer/user.reducer'
import {todoReducer} from './component.reducer/todo.reducer'
export const rootReducer = combineReducers({
  userReducer,
  todoReducer
});