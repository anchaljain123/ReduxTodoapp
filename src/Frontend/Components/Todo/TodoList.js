import React, {Component} from 'react'
import TodoRow from './TodoRow'
import {connect} from 'react-redux'

class TodoList extends Component {
  render() {
    const {todos} = this.props.todoReducer;
    const items = todos.map(item =>
      <tr key={item._id}>
        <TodoRow todo={item}/>
      </tr>
    );
    return (
      <div>
        <div>
        <span>Title</span>
        <span>Status</span>
        </div>
        <div>
        {items}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(TodoList)



