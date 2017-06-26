import React, {Component} from 'react'
import EditTodo from './EditTodo'
import {connect} from 'react-redux'
import {
  asyncUpdateTodo,asyncDeleteTodo
}from '../../action'

class TodoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  deleteTodo = () => {
    const { todo } = this.props;
    this.props.dispatch(asyncDeleteTodo({id:todo._id}));
  };

  editTodo = (changedTodoState) => {
    this.props.dispatch(asyncUpdateTodo(changedTodoState));
  };

  render() {
    const { todo } = this.props;
    return (
      <tr>
        {
          this.state.edit ?
            <EditTodo todoData={this.props.todo} editTodo={this.editTodo} />
            :<td> {todo.name}-{todo.status}</td>
        }
        <td>
          <button className="pull-right btn btn-warning" onClick={() => this.setState({edit: !this.state.edit})}>Edit</button>&nbsp;
          <button className="pull-right btn btn-danger" style={{marginRight:"2%"}} onClick={this.deleteTodo}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default connect()(TodoRow);