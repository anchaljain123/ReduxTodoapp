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
    console.log(tagVal, '..state[]');
    this.setState({
      tags: tagVal
    }, () => {
      console.log(this.state.tags);
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
               onChange={(event) => this.setState({comment: event.target.value})}
        />
        <div className="input-group-btn">
          <input type="submit" className="btn btn-success" onClick={this.addComment} value="add Comment"/>
        </div>
      </div>
    )
  }
}