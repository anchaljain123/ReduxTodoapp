import React, {Component} from 'react'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import ShowComments from './ShowComments'
import loader from '../../../assets/img/loader.gif'
import {
  asyncsaveComment, asyncgetComments
}from '../../../action'

class Comment extends Component {

  componentWillMount() {
    this.props.dispatch(asyncgetComments())
  }
    saveComment = (commentState) => {
    let commentOb = {
      tagEmail:commentState.tags,
      comment: commentState.comment,
      postedBy: this.props.user._id,
      todoId: this.props.todo._id,
      taggedBy : this.props.user
    };
    this.props.dispatch(asyncsaveComment(commentOb));
  };
  render() {
    let {comments} = this.props.commentReducer;
    return (
      <td>
        <CommentForm saveComment={this.saveComment}/>
        <ShowComments todo={this.props.todo} comments={comments}/>
        {
          this.props.commentReducer.loading?
             <img src={loader}/>
            :""
        }
      </td>

    )
  }
}

export default connect(state=>state)(Comment)

