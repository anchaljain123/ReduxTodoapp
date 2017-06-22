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
    const feeds = todos.map(item =>
      <div key={item._id}>
        <FeedRow todo={item} user={this.props.user} dispatch={this.props.dispatch}/>
      </div>
    );
    return (
      <div>
        {feeds}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

export default connect(state => state, mapDispatchToProps)(Feeds)