import React, {Component} from 'react'
import EventEmitter from 'events';
import {connect} from 'react-redux'
import TodoForm from './TodoForm'
import Filter from './Filter'
import TodoList from './TodoList'
import {
  asyncsaveTodo,
  asyncgetTodos,
  asyncgetUser,
  asyncsearchTodos,
  updateStore
}from '../../action'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    }
  }

  componentWillMount() {
    this.props.dispatch(asyncgetUser())
      .then(data => {
        this.props.dispatch(asyncgetTodos(data._id))
      })
  }

  filteredTodos = (todosState) => {
    console.log(todosState);
    this.props.dispatch(updateStore(todosState));
  };

  savetodoDetails = (todoState) => {
    this.props.dispatch(asyncsaveTodo(todoState))
  };

  handleChange = (event) => {
    console.log(this.props.user._id);
    this.setState({
      searchVal: event.target.value
    }, () => {
      this.props.dispatch(asyncsearchTodos(this.state.searchVal, this.props.user._id))
    })
  };

  render() {

    return (
      <div>
        <TodoForm savetodo={this.savetodoDetails} userDetails={this.props.user}/>
        <hr/>
        <input style={{width: "20%",display:'inline-block',float:'right',marginLeft:'5px'}} type="text"
               placeholder="Search.." className="form-control"
               value={this.state.searchVal} onChange={this.handleChange}/> &nbsp;&nbsp;
        <Filter todoList = {this.props.todoReducer} filteredTodos={this.filteredTodos}/>
        <hr/>
        <br/>
        <TodoList userDetails={this.props.user} dispatch={this.props.dispatch} />
      </div>
    )
  }
}

export default connect(state => state)(Todo);