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

      <div className="row">

        <br/>
        <div className="col-sm-12"><p style={{wordWrap: "break-word"}}>{todo.name}</p></div>

        <div className="col-sm-12">
          <button className=" btn btn-warning" style={{marginRight:"3%"}} data-toggle="modal" data-target={"#"+todo._id}>Edit</button>
          <button className=" btn btn-danger" onClick={this.deleteTodo}>Delete</button>
        </div>
        <div className="modal fade" id={todo._id} role="dialog">
          <EditTodo todoData={this.props.todo} editTodo={this.editTodo} />
        </div>
      </div>
    )
  }
}

          export default connect()(TodoRow);