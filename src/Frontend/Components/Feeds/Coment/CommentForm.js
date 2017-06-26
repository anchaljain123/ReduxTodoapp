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
    <div className="input-group">
        <input type="text" className="form-control" value={this.state.comment} placeholder="write comment" onChange={(event)=>this.setState({comment:event.target.value})}/>
      <div className="input-group-btn">
        <input type="submit" className="btn btn-success" onClick={this.addComment} value="add Comment"/>
      </div>
    </div>
    )
  }
}