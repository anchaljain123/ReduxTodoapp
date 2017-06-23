import {
  SAVE_TODO_SUCCESS,
  SAVE_TODO_FAILED,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILED,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILED,
  SEARCH_TODOS_SUCCESS,
  SEARCH_TODOS_FAILED

}from '../../constant'

export const asyncsaveTodoSuccess = (data) => {
  return{
    type:SAVE_TODO_SUCCESS,
    data
  }
};

export const asyncsaveTodoFailed = (err) => {
  return{
    type:SAVE_TODO_FAILED,
    err:err
  }
};

export const asyncgetTodosSuccess = (data) => {
  return{
    type:GET_TODOS_SUCCESS,data
  }
};

export const asyncgetTodosFailed = (err) => {
  return{
    type:GET_TODOS_FAILED,err
  }
};

export const asyncupdateTodosSuccess = (data) => {
  return{
    type:UPDATE_TODO_SUCCESS,data
  }
};

export const asyncupdateTodosFailed = (err) => {
  return{
    type:UPDATE_TODO_FAILED,err
  }
};

export const asyncdeleteTodoSuccess = (data) =>{
  return{
    type:DELETE_TODO_SUCCESS,data
  }
};

export const asyncdeleteTodoFailed = (err) => {
  return{
    type:DELETE_TODO_FAILED,err
  }
};

export const asyncfetchTodosSuccess = (data) =>{
  return{
    type:FETCH_TODOS_SUCCESS,data
  }
};

export const asyncfetchTodosFailed = (err) => {
  return{
    type:FETCH_TODOS_FAILED,err
  }
};

export const asyncsearchTodosSuccess = (data) =>{
  return{
    type:SEARCH_TODOS_SUCCESS,data
  }
};

export const asyncsearchTodosFailed = (err) =>{
  return{
    type:SEARCH_TODOS_FAILED,err
  }
};