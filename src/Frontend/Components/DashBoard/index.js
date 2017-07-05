import React from 'react'
import { addLocaleData, FormattedMessage } from 'react-intl'
import {connect} from  'react-redux'
import Logout from '../Logout'
import {Route, Redirect, Switch} from 'react-router-dom'
import Todo from '../Todo'
import Feeds from '../Feeds'
import Navbar from '../Navbar'
import PropTypes from 'prop-types'
import isAuth from '../isAuthenticated'
import {
  asyncgetUser,
  asyncgetTodos
} from '../../action'

class DashBoard extends React.Component {
  componentWillMount() {
    console.log('component mounted dashboard');
    this.props.getUser();
  }

  render() {
    const {user} = this.props.userState;
    const {todos} = this.props;
    const Bannerstyle = {
      marginTop: "75px",
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h3> HELLO {user.username}</h3>
          </div>
          <div className="col-sm-6">
            <p className=" pull-right"> <Logout/></p>
          </div>
        </div>
        <div className="container-fluid">

          <Navbar/>
          <br/>
          <div>
            <Switch>
              <Route exact path="/dashboard/todos"
                     render={props => <Todo {...props} user={user} dispatch={this.props.dispatch} todos={todos} />}
              />
              <Route path="/dashboard/feeds" render={props =>
                <Feeds {...props} user={user} dispatch={this.props.dispatch}/>}
              />
              <Redirect from='/dashboard' to="/dashboard/todos"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
/*
 DashBoard.contextTypes = {
 router: PropTypes.object, // 'ask' for router
 };
 */

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
