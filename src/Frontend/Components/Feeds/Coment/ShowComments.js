import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommentRow from './CommentRow'
import {
  asyncsaveComment, asyncgetComments
}from '../../../action'

class ShowComments extends Component {
/*componentWillReceiveProps(newProps){
  console.log(newProps,'>>>compwillrevcprops')
}*/
  render() {
    let {user} = this.props.userReducer;
    //let commentsArray = this.props.commentReducer.comments;
    return (
      <div>
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