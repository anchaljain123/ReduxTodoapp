import React from 'react'

export default class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment:''
    }
  }

  addComment = () => {
    this.props.saveComment(this.state)
  };

  render(){
    return(
      <div>
        <input type="text" value={this.state.comment} placeholder="write comment" onChange={(event)=>this.setState({comment:event.target.value})}/>
        <input type="submit" onClick={this.addComment} value="add Comment"/>
      </div>
    )
  }
}