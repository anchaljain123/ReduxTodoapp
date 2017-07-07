import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommentRow from './CommentRow'
import {
  asyncsaveComment, asyncgetComments
}from '../../../action'

class ShowComments extends Component {
  render() {
    let {user} = this.props.userReducer;
    return (
      <div className="" style={{borderStyle:'inset',borderColor:'#fcf8e3'}}>
        {
          this.props.comments.map((item) => {
            if (item.todoId === this.props.todo._id) {
              return <CommentRow key={item._id} item={item} user={user} dispatch={this.props.dispatch}/>
            }
          })
        }
      </div>
    )
  }
}

export default connect(state => state)(ShowComments)