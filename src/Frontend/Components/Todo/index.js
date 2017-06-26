import React, {Component} from 'react'
import {connect} from 'react-redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {
  asyncsaveTodo,
  asyncgetTodos,
  asyncgetUser,
  asyncsearchTodos
}from '../../action'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
     searchVal : ''
    }
  }

  componentWillMount() {
    console.log("***********Todo componentwillmount********", this.props);
    this.props.dispatch(asyncgetUser())
      .then(data => {
        console.log(data, 'then');
        this.props.dispatch(asyncgetTodos(data._id))
      })
      .then(data => {
        console.log(data, '>>>todocomponentwillmount>>>>>>>>>');
        this.setState({todoArry: data})
      })
  }
  /*componentWillReceiveProps(newprops) {
   console.log('**********todocomponent will rec props********', newprops);
   if(newprops.user._id && !newprops.todos.length){
   this.props.dispatch(asyncgetTodos(newprops.user._id))
   .then(data => {
   console.log(data, '>>>todocomponentwillrecprops');
   this.setState ({
   todoArry:data
   })
   })
   }
   }*/
  savetodoDetails = (todoState) => {
    this.props.dispatch(asyncsaveTodo(todoState))
  };

  handleChange = (event) => {
    console.log(this.props.user._id);
    this.setState({
      searchVal: event.target.value
    },()=>{
        this.props.dispatch(asyncsearchTodos(this.state.searchVal,this.props.user._id))
    })
  };

  render() {
    console.log(this.props.todos, ">>>todoprops");
    return (
      <div>
        <TodoForm savetodo={this.savetodoDetails} userDetails={this.props.user}/>
        <TodoList userDetails={this.props.user} dispatch={this.props.dispatch}/>
        <input type="text" placeholder="Search.." value={this.state.searchVal} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Todo;