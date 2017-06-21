const User = require('./user.model');

exports.saveUser = (userData, res) => {
  const newUser = new User(userData);
  newUser.save(userData, (err, data) => {
    if (err) {
      res.send({error: err});
    } else {
      res.send({msg: 'You have successfully Signup'});
    }
  })
};

exports.getUser = (userId,res) => {
  User.findById(userId,(err,data)=>{
    if(err){
      res.send({error:err});
    }else{
      res.send(data)
    }
  })
};