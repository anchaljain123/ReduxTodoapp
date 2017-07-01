import React, {Component} from 'react'
import TodoRow from './TodoRow';
import dragula from 'dragula';
import '../../assets/css/dragula.css'
import {connect} from 'react-redux';
import { findDOMNode } from 'react-dom';
import { asyncapplyFilter , asyncchangeTodoStatus } from '../../action';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
    this.drake = null;
  }
  _onDrop(el, target, source, sibling) {

    for(let i=0;i<target.children.length;i++){
      let child  = target.children[i];
      if(child.id !== null) {
        if (target.children[i].id === el.id) {
          console.log('idx of el ', i-1,child);
          let ob = {
            idx:i,
            todoId:el.id ,
            changedStatus:target.id
          };
          console.log(ob,'>>>ob');
          this.props.dispatch(asyncchangeTodoStatus(ob));
          return;
        }
      }
    }

  }
  componentWillUpdate() {
    if(this.drake) {
      return;
    }
    if (Object.keys(this.refs).length) {
      const els = [];
      Object.keys(this.refs).forEach((comp) => {
        const el = findDOMNode(this.refs[comp]);
        els.push(el);
      });
      this.drake = dragula(els);
      this.drake.on('drag',(el,source)=>{
        console.log(el.id,'--drag')
      });
      this.drake.on("drop", function(el, target, source, sibling) {
        console.log('el',el.id, 'target',target.id);
        this._onDrop(el, target, source, sibling);
        this.drake.cancel(true)
      }.bind(this));

      this.drake.on("cancel", function(el) {
       console.log(el,'--cancel el')
      }.bind(this))

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
    const pendingItems = todos && pendingArray.map((item, idx) =>
      <TodoRow todo={item} key={item._id}/>
      );
    const inprocessItems = todos && inprocessArray.map((item, idx) =>
          <TodoRow todo={item} key={item._id}/>
      );
    const doneItems = todos && doneArray.map((item, idx) =>
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
                <div className="panel-body pending" id="Pending" ref="pending">
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
                <div className="panel-body " id="Inprocess" ref="process">
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
                <div className="panel-body " id="Done" ref="done">
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



