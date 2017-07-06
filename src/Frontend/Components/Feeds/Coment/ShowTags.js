import React, {Component} from 'react'

class ShowTags extends Component {

  render() {
    return (
      <div >
        {this.props.Tags.map(item=>
          <h5 style={{width:'25%',display:'inline',padding:'3px',margin:'4px'}} key={item+9}  className="well well-sm">
            {item}</h5>
        )}
      </div>
    )
  }
}
export default ShowTags;