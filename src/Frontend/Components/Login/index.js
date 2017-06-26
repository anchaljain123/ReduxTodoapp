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
        <div className="jumbotron text-center row">
          <h1>Login</h1>
          {
            err ? <p>Invalid Username or Password</p> : ''
          }
          <div className="col-sm-4 col-sm-push-4">
            <form>
                <input placeholder="Enter UserName :" type="text" className="form-control" value={this.state.username} onChange={(event) => this.saveHandler(event, 'username')}/><br/>
                <input placeholder="Enter Password : " type="password"  className="form-control" value={this.state.password} onChange={(event) => this.saveHandler(event, 'password')}/><br/>
                <div className="row">
                  <div className="col-sm-5 col-sm-push-1">
                    <input type="submit" className="btn btn-danger" value="Login" onClick={ this.loginUser }/>
                  </div>
                  <div className="col-sm-5">
                    <a href="/signup" className="btn btn-danger">NewUser</a>
                  </div>
                </div>
            </form>
          </div>
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