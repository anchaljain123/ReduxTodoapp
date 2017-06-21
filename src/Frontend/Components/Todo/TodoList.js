import React, {Component} from 'react'
import TodoRow from './TodoRow'
import {connect} from 'react-redux'

class TodoList extends Component {
  render() {
    console.log('render>>>>>>todolist');
    const {todos} = this.props;
    const items = todos.map(item =>
      <div key={item._id}>
        <TodoRow todo={item} dispatch={this.props.dispatch}/>
      </div>
    );
    return (
      <div>
        {items}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps)(TodoList)



