import React from 'react'
import Comment from './Coment'
export default class FeedRow extends React.Component{
  render(){
    console.log(this.props.todo,'item---');
    return(
      <div>
        {this.props.todo.name}
        <Comment user={this.props.user} todo={this.props.todo} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}