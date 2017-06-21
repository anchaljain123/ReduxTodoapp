const express = require('express');
const router = express.Router();
const passport = require('passport');
const validate = require('../../configuration/Validator');
const userController = require('./user.controller');

router.post('/saveUser', validate.validatePassword, userController.saveUser);
router.get('/getUser',userController.getUser);

router.post('/login',
  passport.authenticate('local',
  {failureRedirect: '/login', successRedirect: "/profile"}
  ));

router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.send({user:req.user})
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;