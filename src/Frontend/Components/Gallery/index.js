import React, {Component} from 'react'
import ImageUpload from '../ImageUpload'
import UploadImage from '../UploadImage'
import {connect} from 'react-redux'
import {
  getImages
} from '../../action'

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      gallery: []
    }
  }
  componentWillMount() {
    this.loadGallery()
  }

  loadGallery = () => {
    this.props.dispatch(getImages())
      .then(data => this.setState({gallery: data}))
  };

  render() {
    return (
      <div>
        <UploadImage dispatch={this.props.dispatch} loadGallery={this.loadGallery}/>
        {
          this.state && this.state.gallery.map(item =>
            <img key={item._id} src={__dirname + item.path} style={{width: '25%'}}/>)
        }
        {/*<ImageUpload saveImg={this.saveImg}/>*/}
      </div>
    )
  }
}

export default connect(state => state)(Gallery)