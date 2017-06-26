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
      <div className="jumbotron text-center row">
        <h1>Signup Form </h1>
        {
          err ? <p>{err.msg}</p> : ''
        }
        {
          status?<p>Successfully Signed Up</p>:''
        }
        <div className="col-sm-4 col-sm-push-4">
          <input placeholder="Enter UserName :" className="form-control" type="text" value={this.state.username} onChange={(event) => this.saveHandler(event, 'username')} /><br/>
          <input placeholder="Enter Password : " className="form-control" type="password" value={this.state.password} onChange={(event) => this.saveHandler(event, 'password')} /><br/>
          <input type="submit" value="signup" className="btn btn-danger" onClick={this.saveUser}/>
        </div>
      </div>

    )
  }
}

const SignupContainer = connect(state => ({
  userReducer: state.userReducer,
    err: state.userReducer.err
}))(Signup);

export default SignupContainer;