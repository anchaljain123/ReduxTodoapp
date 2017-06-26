import React from 'react'
import Comment from './Coment'
export default class FeedRow extends React.Component{
  render(){
    console.log(this.props.todo,'item---');
    return(
      <tbody>
        <td>{this.props.todo.name}</td>
        <Comment user={this.props.user} todo={this.props.todo} dispatch={this.props.dispatch}/>
      </tbody>
    )
  }
}