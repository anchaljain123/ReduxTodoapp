const todoService = require('./todo.service');

exports.saveTodo = (req, res, next) => {
  const todoData = req.body;
  todoService.saveTodo(todoData)
    .then(data => res.send(data))
    .catch(err => res.send({msg: err}))
};
exports.getTodos = (req, res, next) => {
  todoService.getTodos(req.query.userId)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};
exports.fetchTodos = (req,res,next) =>{
  todoService.fetchTodos()
    .then(data => res.send(data))
    .catch(err => res.send(err))
};
exports.editTodo = (req, res, next) => {
  todoService.editTodo(req.body, res);
};
exports.deleteTodo = (req, res, next) => {
  todoService.deleteTodo(req.body)
    .then(data => res.send(data))
    .catch(err => res.send({msg: err}))
};

exports.searchTodos = (req,res,next) =>{
  console.log(req.query.data,'-----------',req.query.user);
    todoService.searchTodos(req.query.data,req.query.user)
    .then(data=>res.send(data))
    .catch(err=>res.send({msg:err}))
};
