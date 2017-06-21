import React, {Component} from 'react'
import TodoRow from './TodoRow'
import {connect} from 'react-redux'

class TodoList extends Component {
  render() {
    const {todos} = this.props.todoReducer;
    const items = todos.map(item =>
      <div key={item._id}>
        <TodoRow todo={item}/>
      </div>
    );
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default connect(state => state)(TodoList)



