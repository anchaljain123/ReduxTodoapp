import React from 'react'
import TagInput from './TagsInput'
import 'react-tagsinput/react-tagsinput.css'
import '../../../assets/css/reacttagCss.css'
export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      tags: ''
    }
  }

  addTags = (tagVal) => {
    this.setState({
      tags: tagVal
    }, () => {
      this.refs.addcmnt.focus();
    })
  };

  addComment = () => {
    this.props.saveComment(this.state);
    this.setState({
      comment: '',
      tags: ''
    })
  };

  render() {
    return (
      <div className="input-group">
        <TagInput addTags={this.addTags}/> <span style={{display:'inline-block'}}>(press Enter)</span>
        <input type="text" className="form-control" value={this.state.comment} placeholder="write comment"
               onChange={(event) => this.setState({comment: event.target.value})} ref="addcmnt"/>
        <div className="input-group-btn">
          <input type="submit" className="btn btn-success" onClick={this.addComment} value="Add Comment"/>
        </div>
      </div>
    )
  }
}