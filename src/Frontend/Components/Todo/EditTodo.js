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
      <div>
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
        <select value={this.state.status} onChange={(e) => this.setState({status:e.target.value})}>
          <option value="Pending">Pending</option>
          <option value="Inprocess">Inprocess</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={this.saveChanges}>Save</button>
        <button onClick={this.cancelChanges}>Cancel</button>
      </div>
    )
  }
}
