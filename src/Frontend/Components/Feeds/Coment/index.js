import React, {Component} from 'react'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import ShowComments from './ShowComments'
import {
  asyncsaveComment, asyncgetComments
}from '../../../action'

class Comment extends Component {
  componentWillMount() {
    this.props.dispatch(asyncgetComments())
  }
    saveComment = (commentState) => {
    let commentOb = {
      comment: commentState.comment,
      postedBy: this.props.user._id,
      todoId: this.props.todo._id
    };
    this.props.dispatch(asyncsaveComment(commentOb));
  };
  render() {
    let {comments} = this.props.commentReducer;
    return (
      <td>
        <CommentForm saveComment={this.saveComment}/>
        <ShowComments todo={this.props.todo} comments={comments}/>
      </td>

    )
  }
}

export default connect(state=>state)(Comment)

