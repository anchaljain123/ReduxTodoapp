import React, {Component} from 'react'

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
    const {name, status} = props.todoData;
    this.state = {
      name,
      status
    }
  }
  componentWillReceiveProps(props){
    const {name, status} = props.todoData;
    this.setState ({
      name,
      status
    })
  }

  saveChanges = () => {
    let ob = {
      id: this.props.todoData._id,
      name: this.state.name,
      status: this.state.status,
    };
    this.props.editTodo(ob);
    this.setState({
      name: '',
      status: 'Pending'
    })
  };

  cancelChanges = () => {
    const {name, status} = this.props.todoData;
    this.setState({
      name,
      status
    })
  };

  render() {
    return (
      <td>
        <form className="form-inline">
          <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>&nbsp;
          <select className="btn btn-primary" value={this.state.status} onChange={(e) => this.setState({status:e.target.value})}>
            <option value="Pending">Pending</option>
            <option value="Inprocess">Inprocess</option>
            <option value="Done">Done</option>
          </select>&nbsp;
          <button className="btn btn-success" onClick={this.saveChanges}>Save</button>&nbsp;
          <button className="btn" onClick={this.cancelChanges}>Cancel</button>
        </form>
      </td>
    )
  }
}
