import React from 'react'
import TagInput from './TagsInput'
import ShowTags from './ShowTags'
import {
  emailRegex
} from '../../../constant'
export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      tags: []
    }
  }

  addTags = (tagVal) => {

    let tempArry = tagVal.slice();
    tempArry.filter((item,idx) => {
      if(!emailRegex.test(item)){
        tagVal.splice(idx,1);
      }
    });

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
        <div className="row">
          <div className="col-md-6" >
            {
              this.state.tags.length ? <ShowTags Tags={this.state.tags}/> : ''
            }
            <div className="col-md-6">
              <TagInput addTags={this.addTags}/>
              <span>(press Enter)</span>
            </div>
          </div>
        </div>
        <textarea className="form-control" value={this.state.comment} placeholder="write comment"
               onChange={(event) => this.setState({comment: event.target.value})} ref="addcmnt"/>
        <div className="input-group-btn">
          <input type="submit" className="btn btn-success" style={{marginTop: '40px'}} onClick={this.addComment}
                 value="Add Comment"/>
        </div>
      </div>
    )
  }
}