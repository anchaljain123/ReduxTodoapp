const express = require('express');
const router = express.Router();
const todoController =  require('./todo.controller');


router.post('/saveTodo',todoController.saveTodo);
router.get('/getTodos',todoController.getTodos);
router.get('/fetchTodos',todoController.fetchTodos);
router.put('/updateTodo',todoController.editTodo);
router.put('/changeStatus',todoController.changeStatus);
router.delete('/deleteTodo',todoController.deleteTodo);
router.get('/searchTodos',todoController.searchTodos);

module.exports = router;