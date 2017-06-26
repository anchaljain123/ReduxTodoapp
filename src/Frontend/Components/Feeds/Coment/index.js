import React, {Component} from 'react'
import CommentForm from './CommentForm'
import ShowComments from './ShowComments'
import {
  asyncsaveComment, asyncgetComments
}from '../../../action'

export default class Comment extends Component {
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


  render(){
    return(
      <td>
        <CommentForm saveComment={this.saveComment}/>
  <ShowComments dispatch={this.props.dispatch} todo={this.props.todo}/>
      </td>

    )
  }
}


