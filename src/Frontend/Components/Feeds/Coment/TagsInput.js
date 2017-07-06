import React from 'react'

export default class TagsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: " ",
      tagArray:[]
    }
  }

  handleChange = (event) => {
    this.setState({
      tag: event.target.value.trim(),
    })
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      const tempArr = [];
      const tag =   this.state.tag;
      tempArr.push(tag, ...this.state.tagArray);
      this.setState({
        tagArray: tempArr
      },()=>{
        this.props.addTags(this.state.tagArray);
        this.setState({
          tag: ""
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
          ref="taginput"
          value={this.state.tag}
          placeholder="Add Tags"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
      </div>
    )
  }
}