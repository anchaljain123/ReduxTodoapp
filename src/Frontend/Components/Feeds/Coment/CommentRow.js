import React,{Component} from 'react'
import moment from 'moment'
import {
  asyncdeleteComment
}from '../../../action'

export default class CommentRow extends Component{
  deleteComment =() => {
    let ob = {
      id:this.props.item._id
    };
    this.props.dispatch(asyncdeleteComment(ob))
  };
  render(){
    let b = this.props.item.updatedAt;
      const dateObj = new Date(b);
      const m = moment(dateObj);
      m.format('MM-DD-YYYY');
   let diffDate = moment(m).fromNow() ;
    return(
      <div>
        <strong style={{display:'inline-block'}}>
          {this.props.item.postedBy.username}
        </strong> : <span style={{display:'inline-block',color:'blue'}}>
        {this.props.item.tagEmail} -
      </span>
        <p style={{display:'inline-block',color:'black'}}>
          {this.props.item.comment}  ({diffDate})
      </p>

        {
          this.props.user._id === this.props.item.postedBy._id?
            <button onClick={this.deleteComment}>Delete</button>
            :''
        }
        </div>
    )
  }
}