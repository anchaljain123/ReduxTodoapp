import React,{Component} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {
  asyncsaveTodo
}from '../../action'

class Todo extends Component{

  savetodoDetails = (todoState) => {
    this.props.dispatch(asyncsaveTodo(todoState))
  };

  render(){
    return(
      <div>
        <TodoForm savetodo={this.savetodoDetails}/>
        <TodoList todoData={this.props.todos} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}


export default Todo;