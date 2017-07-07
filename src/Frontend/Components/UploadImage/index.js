import React, {Component} from 'react'

export default class UploadImage extends Component {
  constructor(){
    super();
    this.state = {
      progress: -1,
      hasError: false,
    };
  }
  onImageUploaderChange = (event) => {
   // event.preventDefault();
    let file = event.target.files[0];
    console.log(file);

    let formData = new FormData();
    formData.append('img',file);

    const req = new XMLHttpRequest();

    req.addEventListener('progress', (e) => {
      console.log(e,'>>>>e');
      let progress = 0;
      if (e.total !== 0) {
        progress = parseInt((e.loaded / e.total) * 100, 10);
      }
      this.setState({
        progress,
      });
    });

    req.addEventListener('load',(e)=>{
      console.log(e, "loaded");
    });

    req.addEventListener('error',(e)=>{
      console.log(e);
      this.setState({
        hasErrors: true
      })
    });

    req.open('POST','/saveImg');
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