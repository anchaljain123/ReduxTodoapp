import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {
  asyncLoginUser
} from '../../action'

class Login extends Component {
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

  loginUser = (e) => {
    e.preventDefault();
    this.props.asyncLoginUser(this.state)
      .then(data => {
         if (data) {
           this.props.history.push('/dashboard');
         }
      })
    /*   new Promise((resolve, reject) => {
     this.props.login(this.state)
     .then( data => {
     const {err} = this.props.userState;
     if(!err){
     resolve('ok')
     }
     else {
     reject('error while loggin')
     }
     })
     })
     .then(data => {
     this.props.history.push('/dashboard');
     this.setState({
     username: "",
     password: "",
     })
     })
     .catch(err => console.log(err))*/
  };

  render() {
    const {err} = this.props.userState;
    return (
      <div>
        <form>
          <h3>Login Form </h3>
          <label> Enter UserName :</label>
          <input type="text" value={this.state.username} onChange={(event) => this.saveHandler(event, 'username')}/>
          <label>Enter Password : </label>
          <input type="password" value={this.state.password} onChange={(event) => this.saveHandler(event, 'password')}/>
          <input type="submit" value="Login" onClick={ this.loginUser }/>
          <a href="/signup">NewUser</a>
          {
            err ? <span>Invalid Username or Password</span> : ''
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userState: state.userReducer};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    asyncLoginUser,
  }, dispatch);


};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;