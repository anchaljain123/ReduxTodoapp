import React from 'react'
import {
  emailRegex
} from '../../../constant'
export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: " ",
      arry: []
    }
  }

  handleChange = (event) => {
    this.setState({
      tag: event.target.value
    })
  };

  handleKeyPress = (event) => {
    let emailArray = [];
    if (event.key === 'Enter') {
      let nstring = "",flag = 0;
      nstring = this.state.tag;
      nstring = nstring.split(" ");
      nstring.filter((item, i) => {
        if (item === '') {
          nstring.splice(i, 1)
        }
      });
      nstring.forEach(item => {
        if (emailRegex.test(item)) {
          emailArray.push(item);
        }
      });
      this.setState({
        tag:nstring,
        arry:emailArray
      },()=>{
        this.props.addTags(this.state.arry);
        this.setState({
          tag: '',
          arry : []
        })
      });
    }
  };
  render() {
    return (
      <div className="input-group" style={{display:'inline-block'}}>
        <input
          type="text"
          className="form-control"
          value={this.state.tag}
          placeholder="Add Tags"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
      </div>
    )
  }
}