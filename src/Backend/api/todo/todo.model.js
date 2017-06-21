const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  status:{
    type:String,
    default:'Pending'
  }
},{
  versionKey:false,
  timestamp:true,
});

module.exports = mongoose.model('Todo',todoSchema);
