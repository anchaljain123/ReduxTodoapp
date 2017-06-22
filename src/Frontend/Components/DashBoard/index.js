import React from 'react'
import {connect} from  'react-redux'
import Logout from '../Logout'
import {Route,Redirect,Switch} from 'react-router-dom'
import Todo from '../Todo'
import Feeds from '../Feeds'
import Navbar from '../Navbar'
import isAuth from '../isAuthenticated'
import {
  asyncgetUser,
  asyncgetTodos
} from '../../action'

class DashBoard extends React.Component {
  componentWillMount() {
    this.props.getUser()
  }
  render() {
    const {user} = this.props.userState;
    const {todos} = this.props;
    return (
      <div>
        <h4> HELLO {user.username}</h4>
        <Logout/>
        <Navbar/>
        <div>
        <Switch>
          <Route exact path="/dashboard/todos"
                 render={props =><Todo {...props}  user={user} dispatch={this.props.dispatch} todos={todos}/>}
          />
          <Route  path="/dashboard/feeds" render={props =>
            <Feeds {...props} user={user} dispatch={this.props.dispatch}/>}
          />
         {/* <Redirect from='/dashboard' to="/dashboard/todos"/>*/}
        </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userReducer,
    todos: state.todoReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(asyncgetUser()),
    getTodos: (val) => dispatch(asyncgetTodos(val)),
    dispatch: dispatch
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
