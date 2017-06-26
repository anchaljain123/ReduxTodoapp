import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommentRow from './CommentRow'

class ShowComments extends Component {
  render() {
    console.log(this.props, '>>showcmnt');
    let {user} = this.props.userReducer;
    let commentsArray = this.props.commentReducer.comments;
    console.log(commentsArray);
    return (
      <div>
        {
          commentsArray.map((item) => {
            if (item.todoId._id === this.props.todo._id) {
              return <CommentRow item={item}/>
            }
          })
        }
      </div>
    )
  }
}

export default connect(state => state)(ShowComments)