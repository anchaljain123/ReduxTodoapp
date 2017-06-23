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
  let {_id} = this.props.userDetails;
  let { name } = this.state;
  let ob = {
    name,
    status:'Pending',
    userID:_id
  };

    this.props.savetodo(ob);
    this.setState ({
      name:'',
      status:''
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
