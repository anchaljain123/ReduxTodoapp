import React, {Component} from 'react'
import {
  getImages
}from'../../action'

class UploadImage extends Component {
  constructor() {
    super();
    this.state = {
      progress: -1,
      hasError: false,
    };
  }

  onImageUploaderChange = (event) => {
    let file = event.target.files[0];
    const req = new XMLHttpRequest();

    let formData = new FormData();
    formData.append('img', file);

    req.addEventListener('progress', (e) => {
      let progress = 0;
      if (e.total !== 0) {
        progress = parseInt((e.loaded / e.total) * 100, 10);
      }
      this.setState({
        progress,
      });

      if(progress === 100){
        console.log(100);
      }

    });

    req.addEventListener('load', (e) => {
      console.log(e, "loaded");
      this.props.loadGallery()
    });

    req.addEventListener('error', (e) => {
      console.log(e);
      this.setState({
        hasErrors: true
      })
    });

    req.addEventListener('onloadend', () => {
      this.setState({
        progress: -1,
        hasError: false,
      })
    });
    req.open('POST', '/saveImg');
    req.send(formData);

  };

  render() {
    return (
      <div>
        <form encType="multipart/form-data" id="myform">
          <span>Upload an image:</span>
          <input type="file" accept="image/*" id="fileButton" onChange={this.onImageUploaderChange}/>
          <progress value={this.state.progress} max="100" id="uploader">
            {this.state.progress}%
          </progress>
          <br/>
        </form>
      </div>
    )
  }
}

export default UploadImage