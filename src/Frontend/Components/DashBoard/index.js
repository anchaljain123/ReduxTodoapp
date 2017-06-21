import React from 'react'
import {connect} from  'react-redux'
import Logout from '../Logout'
import Todo from '../Todo'
import {
  asyncgetUser,
  asyncgetTodos
} from '../../action'

class DashBoard extends React.Component{
  componentWillMount(){
    this.props.getUser();
    this.props.getTodos();
  }
  componentWillReceiveProps({todos}){
  }
  shouldComponentUpdate() {
    return true;
  }

  render(){
    const { user } = this.props.userState;
    const { todos } = this.props;
    return (
      <div>
        <h4> hello {user.username}</h4>
        <Logout/>
        <Todo todos={todos} dispatch={this.props.dispatch}/>
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

const mapDispatchToProps = (dispatch) =>{
  return {
    getUser : () => dispatch(asyncgetUser()),
    getTodos : () => dispatch(asyncgetTodos()),
    dispatch: dispatch
  }
};
const  DashBoardContainer = connect(mapStateToProps,mapDispatchToProps)(DashBoard);
export default DashBoardContainer;