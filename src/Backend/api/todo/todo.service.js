const Todo = require('./todo.model');

exports.saveTodo = (todoDetails) => {
  return new Promise((resolve, reject) => {
    const newTodo = new Todo(todoDetails);
    newTodo.save(todoDetails, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

exports.getTodos = (userDetail) => {
  return new Promise((resolve, reject) => {
    Todo.find({userID:userDetail})
      .populate('userID')
      .sort()
      .exec((err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
  })
};

exports.fetchTodos = () => {
  return new Promise((resolve, reject) => {
    Todo.find()
      .populate('userID')
      .exec((err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
  })
};

exports.editTodo = (todoData, res) => {
  let obj = {
    'name': todoData.name,
    'status': todoData.status
  };
  Todo.findOneAndUpdate({_id: todoData.id}, {$set: obj}, {new: true}, function (err, data) {
    if (err) {
      res.send({msg: err});
    } else {
      res.send(data);
    }
  })
};

exports.deleteTodo = (todoId) => {
  return new Promise((resolve, reject) => {
    Todo.findByIdAndRemove(todoId.id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

exports.searchTodos = (val,user) =>{
  return new Promise((resolve, reject) => {
    const newRegex = new RegExp(val);
    Todo.find({name:{$regex:newRegex},userID:user})
      .populate('userID')
      .exec((err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      });
  })

};

exports.changeStatus = (todoDetails) => {
  return new Promise( (resolve,reject) => {
    Todo.findOneAndUpdate({_id: todoDetails.todoId}, {$set: {status: todoDetails.changedStatus}}, {new: true},
       (err, data) =>{
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
    })
  })
};