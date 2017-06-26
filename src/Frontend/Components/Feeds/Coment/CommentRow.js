import React,{Component} from 'react'
import {
  asyncdeleteComment
}from '../../../action'

export default class CommentRow extends Component{
  deleteComment =() => {
    console.log(this.props.item._id)
    var ob = {
      id:this.props.item._id
    };
    this.props.dispatch(asyncdeleteComment(ob))
  };
  render(){
    return(
      <div>
        {this.props.item.postedBy.username}-{this.props.item.comment}
        {
          this.props.user._id === this.props.item.postedBy._id?
            <button onClick={this.deleteComment}>Delete</button>
            :''
        }
        </div>
    )
  }
}