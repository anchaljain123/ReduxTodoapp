import React, {Component} from 'react'
import TodoRow from './TodoRow'
import from 'dra'

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

          <TodoRow todo={item} key={item._id}/>
      );
    const inprocessItems = todos && inprocessArray.map(item =>

          <TodoRow todo={item} key={item._id}/>

      );
    const doneItems = todos && doneArray.map(item =>

          <TodoRow todo={item} key={item._id}/>

      );
    return (
      <div>
          <button onClick={this.applyFilter}>
            <select name="Filter" onChange={(e) => this.setState({filter: e.target.value})} value={this.state.filter}>
              <option value="filter">Filter</option>
              <option value="Asc">SortAsc</option>
              <option value="Desc">SortDesc</option>
              <option value="DateAsc">SortByDateAsc</option>
              <option value="DateDesc">SortByDateDesc</option>
            </select>
          </button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <h1>Todo Items</h1>
                </div>
                <div class="panel-body">
                  {pendingItems}
                  <br/>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <h1>Inprocess Items</h1>
                </div>
                <div class="panel-body">
                  {inprocessItems}
                  <br/>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading">
                  <h1>Done Items</h1>
                </div>
                <div class="panel-body">
                  {doneItems}
                  <br/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(TodoList)



