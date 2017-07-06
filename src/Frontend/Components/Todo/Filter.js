import React from 'react';
import _ from 'lodash'
export default class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
  }

  applyFilter = () => {
    let filterResultset = [], {todos} = this.props.todoList;
    switch (this.state.filter) {
      case 'Asc':
        filterResultset = _.sortBy(todos, n => n.name);
        break;
      case 'Desc': {
        filterResultset = _.sortBy(todos, n => n.name);
        filterResultset = filterResultset.reverse();
      }
        break;
      case 'DateAsc' : {
        filterResultset = todos.sort((a, b) => {
          a = new Date(a.updatedAt);
          b = new Date(b.updatedAt);
          return a - b;
        });
      }
        break;
      case 'DateDesc': {
        filterResultset = todos.sort(function (a, b) {
          a = new Date(a.updatedAt);
          b = new Date(b.updatedAt);
          return b - a;
        });
      }
        break;
      default:
        console.log('enter valid option')
    }
    this.props.filteredTodos(filterResultset)
  };

  render() {
    return (
      <div style={{display:'inline'}}>
        <button onClick={this.applyFilter} style={{float: 'right', padding: '0', border: '0px', background: 'white'}}>
          <select name="Filter" style={{background: 'white', height: '35px'}}
                  onChange={(e) => this.setState({filter: e.target.value})} value={this.state.filter}>
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
