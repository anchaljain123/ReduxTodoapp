const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  status:{
    type:String,
    default:'Pending'
  },
  userID:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true,
  }
},{
  versionKey:false,
  timestamp:true,
});

module.exports = mongoose.model('Todo',todoSchema);
