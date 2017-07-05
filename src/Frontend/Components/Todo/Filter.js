import React from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'
export default class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
      result: []
    };
  }

  applyFilter = () => {
    console.log('hi', this.state.filter);
    let filterResultset = [], {todos} = this.props.todoList;

    if (this.state.filter === 'Asc') {
      let res1 = todos;
      filterResultset = _.sortBy(todos, n =>  n.name);
    } else if (this.state.filter === 'Desc') {
      filterResultset = _.sortBy(todos, n =>  n.name);
      filterResultset = filterResultset.reverse();
    } else if (this.state.filter === 'DateAsc') {
      filterResultset = todos.sort((a, b) => {
        a = new Date(a.updatedAt);
        b = new Date(b.updatedAt);
        return a - b;
      });
    } else {
      filterResultset = todos.sort(function (a, b) {
        a = new Date(a.updatedAt);
        b = new Date(b.updatedAt);
        return b - a;
      });
    }
    console.log(filterResultset, '>>>filter');
    this.props.filteredTodos(filterResultset)
  };

  render() {
    return (
      <button onClick={this.applyFilter}>
        <select name="Filter" onChange={(e) => this.setState({filter: e.target.value})} value={this.state.filter}>
          <option value="filter">Filter</option>
          <option value="Asc">SortAsc</option>
          <option value="Desc">SortDesc</option>
          <option value="DateAsc">SortByDateAsc</option>
          <option value="DateDesc">SortByDateDesc</option>
        </select>
      </button>
    )
  }
}

//export default connect(state=>state)(Filter);