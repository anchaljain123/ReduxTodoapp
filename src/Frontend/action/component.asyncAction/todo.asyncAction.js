import fetch from 'isomorphic-fetch'
import {
  asyncsaveTodoSuccess,
  asyncsaveTodoFailed,
  asyncgetTodosSuccess,
  asyncgetTodosFailed,
  asyncupdateTodosSuccess,
  asyncupdateTodosFailed,
  asyncdeleteTodoSuccess,
  asyncdeleteTodoFailed,
  asyncfetchTodosSuccess,
  asyncfetchTodosFailed,
  asyncsearchTodosSuccess,
  asyncsearchTodosFailed,
  asyncchangeTodoStatusSuccess,
  asyncchangeTodoStatusFailed,
  updateTodo
} from  '../component.action/todo.action'
import {
  asyncLoaderStarted
}from '../component.action/user.actions'

export const asyncsaveTodo = (todoData) => {
  return function (dispatch) {
    dispatch(asyncLoaderStarted());
    fetch('/saveTodo', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData)
    })
      .then(res => res.json())
      .then(data => dispatch(asyncsaveTodoSuccess(data)))
      .catch(err => dispatch(asyncsaveTodoFailed(err)))
  }
};

export const asyncgetTodos = (userId) => {
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    return fetch(`/getTodos?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        dispatch(asyncgetTodosSuccess(data));
        return data
      })
      .catch(err => dispatch(asyncgetTodosFailed(err)))
  }
};

export const asyncUpdateTodo = (todoData) => {
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/updateTodo', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData)
    })
      .then(res => res.json())
      .then(data => dispatch(asyncupdateTodosSuccess(data)))
      .catch(err => {
        dispatch(asyncupdateTodosFailed(err))
      })
  }
};

export const asyncDeleteTodo = (todoId) => {
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/deleteTodo', {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoId)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, '...data')
        dispatch(asyncdeleteTodoSuccess(data))
      })
      .catch(err => {
        console.log(err, 'err')
        dispatch(asyncdeleteTodoFailed(err))
      })
  }
};

export const asyncgetAllTodos = () => {
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/fetchTodos')
      .then(res => res.json())
      .then(data => dispatch(asyncfetchTodosSuccess(data)))
      .catch(err => dispatch(asyncfetchTodosFailed(err)))
  }
};

export const asyncsearchTodos = (searchData,user) =>{
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
     fetch(`/searchTodos?data=${searchData}&user=${user}`)
      .then(res => res.json())
      .then(data => {
        dispatch(asyncsearchTodosSuccess(data));
      })
      .catch(err => dispatch(asyncsearchTodosFailed(err)))
  }
};

export const asyncchangeTodoStatus = (todoData) => {
  console.log(todoData,'--asynchangestatus=====');
  return (dispatch) => {
    dispatch(asyncLoaderStarted());
    fetch('/changeStatus', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData)
    })
      .then(res => res.json())
      .then(data => dispatch(asyncchangeTodoStatusSuccess(data)))
      .catch(err => dispatch(asyncchangeTodoStatusFailed(err)))
  }
};

export const updateStore = (todoData) =>{
  return function (dispatch) {
    dispatch(updateTodo(todoData))
  }
};