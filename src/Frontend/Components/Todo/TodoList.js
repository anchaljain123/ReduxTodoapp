import React, {Component} from 'react'
import TodoRow from './TodoRow'
import {connect} from 'react-redux'
import {
  asyncapplyFilter
} from '../../action'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  applyFilter = () => {
    console.log('hi', this.state.filter);
    const {todos} = this.props.todoReducer;
    let result = [];
    if (this.state.filter === 'Asc') {
      result = todos.sort();
    } else if (this.state.filter === 'Desc') {
      result = todos.reverse();
    } else if (this.state.filter === 'DateAsc') {
      result = todos.sort((a, b) => {
        a = new Date(a.updatedAt);
        b = new Date(b.updatedAt);
        return a - b;
      });
    } else {
      result = todos.sort(function (a, b) {
        a = new Date(a.updatedAt);
        b = new Date(b.updatedAt);
        return b - a;
      })
    }
    console.log(result, '>>>filter')
  };

  render() {
    const {todos} = this.props.todoReducer;

    let pendingArray = [], inprocessArray = [], doneArray = [];
    todos.filter(item => {
      if (item.status === 'Pending') {
        pendingArray.push(item);
      } else if (item.status === 'Inprocess') {
        inprocessArray.push(item)
      } else {
        doneArray.push(item)
      }
    });

    const pendingItems = todos && pendingArray.map(item =>
        <tr key={item._id}>
          <TodoRow todo={item}/>
        </tr>
      );
    const inprocessItems = todos && inprocessArray.map(item =>
        <tr key={item._id}>
          <TodoRow todo={item}/>
        </tr>
      );
    const doneItems = todos && doneArray.map(item =>
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
        <td>
          {pendingItems}
        </td>
        <td>
          {inprocessItems}
        </td>
        <td>
          {doneItems}
        </td>
        <button onClick={this.applyFilter}>
          <select name="Filter" onChange={(e) => this.setState({filter: e.target.value})} value={this.state.filter}>
            <option value="filter">Filter</option>
            <option value="Asc">SortAsc</option>
            <option value="Desc">SortDesc</option>
            <option value="DateAsc">SortByDateAsc</option>
            <option value="DateDesc">SortByDateDesc</option>
          </select>
        </button>
      </div>

    )
  }
}

export default connect(state => state)(TodoList)



