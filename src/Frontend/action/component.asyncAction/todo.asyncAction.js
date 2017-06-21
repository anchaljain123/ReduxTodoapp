import fetch from 'isomorphic-fetch'
import {
  asyncsaveTodoSuccess,
  asyncsaveTodoFailed,
  asyncgetTodosSuccess,
  asyncgetTodosFailed,
  asyncupdateTodosSuccess,
  asyncupdateTodosFailed,
  asyncdeleteTodoSuccess,
  asyncdeleteTodoFailed

} from  '../component.action/todo.action'
import {
  asyncLoaderStarted
}from '../component.action/user.actions'

export const asyncsaveTodo = (todoData) => {
  return function (dispatch) {
    dispatch(asyncLoaderStarted());
    fetch('/saveTodo', {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData)
    })
      .then(res => res.json())
      .then(data=> dispatch(asyncsaveTodoSuccess(data)))
      .catch(err=>dispatch(asyncsaveTodoFailed(err)))
  }
};

export const asyncgetTodos = () =>{
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/getTodos')
      .then(res=>res.json())
      .then(data=>dispatch(asyncgetTodosSuccess(data)))
      .catch(err=>dispatch(asyncgetTodosFailed(err)))
  }
};

export const asyncUpdateTodo = (todoData) =>{
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/updateTodo',{
      method: 'put',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(todoData)
    })
      .then(res=>res.json())
      .then(data=>dispatch(asyncupdateTodosSuccess(data)))
      .catch(err=> {
        dispatch(asyncupdateTodosFailed(err))
      })
  }
};

export const asyncDeleteTodo = (todoId) => {
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/deleteTodo',{
      method: 'delete',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(todoId)
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data,'...data')
        dispatch(asyncdeleteTodoSuccess(data))
      })
      .catch(err=> {
        console.log(err,'err')
        dispatch(asyncdeleteTodoFailed(err))
      })
  }
};