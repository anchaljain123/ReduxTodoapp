import React,{Component} from 'react'

export default class CommentRow extends Component{

  render(){
    return(
      <div>{this.props.item.postedBy}-{this.props.item.comment}</div>
    )
  }
}