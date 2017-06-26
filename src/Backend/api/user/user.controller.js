const userService = require('./user.service');

exports.saveUser = (req,res,next)=>{
    userService.saveUser(req.body,res);

};

exports.getUser = (req,res,next) => {
    userService.getUser(req.user,res)
};