import React,{Component} from 'react'

export default class TodoForm extends Component{

  constructor(){
    super();
    this.state = {
      name: '',
      status:'Pending'
    }
  }

  changeHandler = (event,key) => {
   this.setState( {
     [key]:event.target.value
   } )
  };

  saveTodo = () => {
    this.props.savetodo(this.state);
    this.setState ({
      name:''
    })
  };

  render(){
    return(
      <div>
        <input type="text" value={this.state.name} onChange={(e)=>this.changeHandler(e,'name')}/>
        <button type="submit" onClick={this.saveTodo}>AddTodo</button>
      </div>
    )
  }
}
