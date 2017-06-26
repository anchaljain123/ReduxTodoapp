import React, {Component} from 'react'
import EditTodo from './EditTodo'
import {connect} from 'react-redux'
import {
  asyncUpdateTodo, asyncDeleteTodo
}from '../../action'

class TodoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  deleteTodo = () => {
    const {todo} = this.props;
    this.props.dispatch(asyncDeleteTodo({id: todo._id}));
  };

  editTodo = (changedTodoState) => {
    this.props.dispatch(asyncUpdateTodo(changedTodoState));
  };

  render() {
    const {todo} = this.props;
    var val = '';
    if (this.state.edit) {
         val = 'Cancel'
    }else {
      val = 'Edit'

    }

    return (
      <div>
        {
          this.state.edit ?
            <EditTodo todoData={this.props.todo} editTodo={this.editTodo}/>
            :
            <span> {todo.name} - {todo.status}</span>
        }
        <button onClick={() => this.setState({edit: !this.state.edit})}>{val} </button>
            <button onClick={this.deleteTodo}>Delete</button>
            </div>
            )
            }
          }

          export default connect()(TodoRow);