import React from 'react'
import {connect} from  'react-redux'
import Logout from '../Logout'
import {Route, Redirect, Switch} from 'react-router-dom'
import Todo from '../Todo'
import Feeds from '../Feeds'
import Navbar from '../Navbar'
import {ToastContainer, ToastMessage} from 'react-toastr'
import {
  asyncgetUser,
  asyncgetTodos
} from '../../action'

class DashBoard extends React.Component {

  addAlert = () => {
     this.refs.container.success(" Welcome User");
     setTimeout(()=>{
       this.refs.container.clear()
     },2000)
  };

  componentWillMount() {
    this.props.getUser();
  }
  componentDidMount(){
  //   const {user} = this.props.userReducer;
  //   console.log(this.props,'.user>>>>>>>>..')
   this.addAlert()
  }
  render() {
    const {user} = this.props.userState;
    const {todos} = this.props;
    let ToastMessageFactory = React.createFactory(ToastMessage.animation);
    return (
      <div>
        <ToastContainer ref="container"
                        toastMessageFactory={ToastMessageFactory}
                        className="toast-top-right"/>

        <div className="jumbotron text-center row">
          <h4>HELLO {user.username}</h4>
          <Logout/>
        </div>
        <div className="container-fluid">

          <Navbar/>
          <div>
            <Switch>
              <Route exact path="/dashboard/todos"
                     render={props => <Todo {...props} user={user} dispatch={this.props.dispatch} todos={todos}/>}
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
