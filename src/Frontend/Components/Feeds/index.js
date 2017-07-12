import React from 'react'
import {connect} from 'react-redux'
import {asyncgetAllTodos}from '../../action'
import FeedRow from './FeedRow'

class Feeds extends React.Component {
  componentWillMount() {
    console.log("***********Feedcomponentwillmount********");
    this.props.dispatch(asyncgetAllTodos())
  }
  render() {
    console.log(this.props.todoReducer.todos, ">>>feeds");
    const {todos} = this.props.todoReducer;
    let newTodos = [];
    todos.filter(item =>{
      if(item.userID._id === this.props.user._id){
        newTodos.push(item)
      }
    });
    const feeds = newTodos.map(item =>
        <FeedRow key={item._id} todo={item} user={this.props.user} dispatch={this.props.dispatch}/>
    );
    return (
        <table className="table">
          <thead>
          <tr>
            <th>Task Name</th>
            <th>Comment</th>
          </tr>
          </thead>
          {feeds}
        </table>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

export default connect(state => state, mapDispatchToProps)(Feeds)