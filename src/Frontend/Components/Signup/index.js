import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  asyncsaveUser
} from '../../action'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }
  saveHandler = (event, key) => {
    this.setState({
      [key]: event.target.value
    })
  };

  saveUser = () => {
    let {username,password} = this.state;
    const ob = {
      username :username,
      password:password
    };
    this.props.dispatch(asyncsaveUser(ob));
    this.setState({
      username: "",
      password: "",
    })
  };

  render() {
    const {err,status} = this.props.userReducer;
    return (
      <div>
        <h3>Signup Form </h3>
        <label> Enter UserName :</label>
        <input type="text" value={this.state.username} onChange={(event) => this.saveHandler(event, 'username')} />
        <label>Enter Password : </label>
        <input type="password" value={this.state.password} onChange={(event) => this.saveHandler(event, 'password')} />
        <input type="submit" value="signup" onClick={this.saveUser}/>
        {
          err ? <span>{err.msg}</span> : ''
        }
        {
          status?<span>Successfully Signed Up</span>:''
        }
      </div>

    )
  }
}

const SignupContainer = connect(state => ({
  userReducer: state.userReducer,
    err: state.userReducer.err
}))(Signup);

export default SignupContainer;