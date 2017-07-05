import {
  LOADER_STARTED,
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
  SEARCH_TODOS_FAILED,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_FAILED,
  UPDATE_TODOS
}from '../../constant'

const initialState = {
  todos : [],
  loading : false,
  err:''
};

export const todoReducer = (state=initialState,action) => {

  switch (action.type){
    case LOADER_STARTED:{
      return{
        ...state,
        loading:true
      }
    }
    case SAVE_TODO_SUCCESS:{
      return{
        ...state,
        loading:false,
        todos: [...state.todos, action.data]
      }
    }

    case SAVE_TODO_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }
    case GET_TODOS_SUCCESS:{
      return{
        ...state,
        loading:false,
        todos:action.data
      }
    }

    case GET_TODOS_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }

    case FETCH_TODOS_SUCCESS:{
      console.log(action.data,'---feeds');
     return{
       ...state,
       todos:action.data,
       loading:false
     }
    }
    case FETCH_TODOS_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }
    case UPDATE_TODO_SUCCESS:{
      var newTodo = state.todos;
      newTodo.filter(function (item,i) {
       if(item._id === action.data._id){
         newTodo[i]=action.data;
       }
      });
      return{
        ...state,
        loading:false,
        todos:newTodo,
      }
    }

    case UPDATE_TODO_FAILED:{
      return{
        ...state,
        err:action.err,
        loading:false
      }
    }

    case DELETE_TODO_SUCCESS:{
      var arry = state.todos;
      for(var i=0;i<arry.length;i++) {
        if (arry[i]._id === action.data._id) {
          arry.splice(i, 1)
        }
      }
      return{
        ...state,
        loading:false,
        todos:arry
      }
    }

    case DELETE_TODO_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }

    case SEARCH_TODOS_SUCCESS:{
      return{
        ...state,
        todos:action.data,
        loading:false
      }
    }

    case SEARCH_TODOS_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }

    case CHANGE_STATUS_SUCCESS:{

      let newTodo = state.todos;
      newTodo.filter(function (item,i) {
        if(item._id === action.data._id){
          newTodo[i].status=action.data.status;
        }
      });
      console.log(newTodo,'---reducer---------------------');
      return{
        ...state,
        loading:false,
        todos:newTodo
      }
    }

    case CHANGE_STATUS_FAILED:{
      return{
        ...state,
        loading:false,
        err:action.err
      }
    }

    case UPDATE_TODOS :{
      console.log(action.data,'>>>>>filter')
      return{
        ...state,
        todos:action.data
      }
    }
    default:
      return state;
  }
};