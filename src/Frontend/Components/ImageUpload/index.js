import React, {Component} from 'react'

class ImageUpload extends Component {

  constructor() {
    super();
    this.state = {
      imageFile: '',
      imageUploader: ''
    }
  }
    onImageUploaderChange = (event) => {
      event.preventDefault();
      let file = event.target.files[0];
      let reader = new FileReader();
      if(file) {
        reader.readAsDataURL(file);
      }
      reader.onprogress = (data) => {
        let percentage = (data.loaded / file.size) * 100;
        this.setState({
          imageFile: file,
          imageUploader: percentage
        },()=>{
          this.props.saveImg(this.state.imageFile)
        });
      };
    };

    render()
    {
      return (
        <div>
          <form encType="multipart/form-data" id="myform">
              Upload an image:
            <input type="file" accept="image/*" id="fileButton" onChange={this.onImageUploaderChange}/>
              <progress value={this.state.imageUploader} max="100" id="uploader">
                {this.state.imageUploader}%
              </progress>
              <br/>
              <br/>
          </form>
        </div>
    )
    }
    }

    export default  ImageUpload