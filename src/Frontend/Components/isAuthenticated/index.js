import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {asyncgetUser} from '../../action'

export default (NewComponent) => {
  class AuthHOC extends React.Component {
    componentWillMount () {
      this.props.getUser(); //currentloggin user
    }
    render() {
      console.log(this.props,'>>isauth');
      const {props} =this;
      if (this.props.userReducers.loading) {
        return <div>Please Wait...</div>
      }
      if (this.props.userReducers.user  && this.props.userReducers.status === 'success') {
        return <NewComponent {...props} />
      } else {
        return <Redirect to="/" />
      }
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return {
      getUser: () => dispatch(asyncgetUser()),
    }
  };

 return connect(state=>state,mapDispatchToProps)(AuthHOC);

}