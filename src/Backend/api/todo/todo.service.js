const Todo = require('./todo.model');

exports.saveTodo = (todoDetails) => {
return new Promise((resolve,reject)=>{
    const newTodo = new Todo(todoDetails);
    newTodo.save(todoDetails,(err,data)=>{
      if(err){
        reject(err);
      } else{
        resolve(data);
      }
    })
  })
};

exports.getTodos = () => {
  return new Promise((resolve,reject) => {
   Todo.find({},(err,data)=>{
     if(err){
       reject(err)
     }else{
       resolve(data)
     }
   })
  })
};

exports.editTodo = (todoData,res) =>{
  let obj = {
    'name': todoData.name,
    'status': todoData.status
  };
  Todo.findOneAndUpdate({_id:todoData.id}, {$set: obj}, {new:true}, function (err, data) {
      if (err) {
        res.send({msg: err});
      } else {
        res.send(data);
      }
    })
  };

exports.deleteTodo = (todoId) => {
  return new Promise((resolve,reject)=>{
    Todo.findByIdAndRemove(todoId.id,(err,data)=>{
      if(err){
        reject(err);
      }else {
        resolve(data);
      }
    })
  })
};