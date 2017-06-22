import React,{Component} from 'react'
import {connect} from 'react-redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {
  asyncsaveTodo,
  asyncgetTodos
}from '../../action'

class Todo extends Component{

 componentWillMount(){
    console.log("***********Todo componentwillmount********",this.props.user)
     this.props.dispatch(asyncgetTodos(this.props.user._id))
      .then(data =>  console.log(data,'>>>todocomponentwillmount'))
  }

  savetodoDetails = (todoState) => {
    this.props.dispatch(asyncsaveTodo(todoState))
  };

  render(){
    console.log(this.props.todos,">>>todo");
    //const {todos} = this.props.todoReducer;
    return(
      <div>
        <TodoForm savetodo={this.savetodoDetails} userDetails={this.props.user}/>
        <TodoList todoData={this.props.todos} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}


export default Todo;