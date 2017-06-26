import React,{Component} from 'react'
import CommentForm from './CommentForm'
import {
  asyncsaveComment
}from '../../../action'

export default class Comment extends Component{

  saveComment = (commentState) => {
    let commentOb = {
      comment:commentState.comment,
      postedBy:this.props.user._id,
      todoId:this.props.todo._id
    };

    this.props.dispatch(asyncsaveComment(commentOb));
  };

  render(){
    return(
      <td>
        <CommentForm saveComment={this.saveComment}/>
      </td>
    )
  }
}
