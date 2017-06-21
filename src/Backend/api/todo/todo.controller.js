const todoService = require('./todo.service');

exports.saveTodo = (req,res,next) =>{
  console.log(req.body);
  const todoData = req.body;
    todoService.saveTodo(todoData)
    .then(data => res.send(data))
    .catch(err => res.send({msg:err}))
};

exports.getTodos = (req,res,next) => {
  todoService.getTodos()
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
};

exports.editTodo = (req,res,next) => {
  todoService.editTodo(req.body,res);
};

exports.deleteTodo = (req,res,next) =>{
  console.log(req.body,'req.body>>>')
  todoService.deleteTodo(req.body)
    .then(data => res.send(data))
    .catch(err => res.send({msg:err}))
};