const express = require('express');
const router = express.Router();
const todoController =  require('./todo.controller');


router.post('/saveTodo',todoController.saveTodo);
router.get('/getTodos',todoController.getTodos);
router.put('/updateTodo',todoController.editTodo);
router.delete('/deleteTodo',todoController.deleteTodo);

module.exports = router;