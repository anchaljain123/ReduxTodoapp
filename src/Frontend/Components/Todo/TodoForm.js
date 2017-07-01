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
  a = () =>{
    console.log('hi')
  };

  b = (e) =>{
    console.log(e.target.value)
  }

  render(){
    return(
      <div className="jumbotron text-center">
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.name} onChange={(e)=>this.changeHandler(e,'name')}/>
          <div className="input-group-btn">
            <button className="btn btn-danger" type="submit" onClick={this.saveTodo}>AddTodo</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" onClick={this.b}
                  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange={this.a}>
            <a className="dropdown-item" value="a1" href="#" >Action</a>
            <a className="dropdown-item" value="a2" href="#">Another action</a>
            <a className="dropdown-item" value="a3" href="#">Something else here</a>
          </div>
        </div>
      </div>
    )
  }
}
