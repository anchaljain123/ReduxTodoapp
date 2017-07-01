import React from 'react'
import {
  emailRegex
} from '../../../constant'
export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: " ",
      arry: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      tag: event.target.value
    })
  };

  handleKeyPress = (event) => {
    let nstring = "";
    if (event.key === 'Enter') {
      nstring = this.state.tag;
      nstring = nstring.split(" ");
      nstring.filter((item, i) => {
        if (item === '') {
          nstring.splice(i, 1)
        }
      });
      nstring.forEach(item => {
        if (emailRegex.test(item)) {
          this.props.addTags(item)
        }
      })
    }


  };
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.tag}
          placeholder="write tag"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
      </div>
    )
  }
}