require('../configuration/connection');
const Routes = require('../configuration/routes');
const passport = require('passport');
const session = require('express-session');
const passportAuth = require('../configuration/authUser')

exports.appStarted = (app) => {
  app.use(session({secret: '6786476467'}), passport.initialize(), passport.session());
  passportAuth();
  app.use([Routes.userRoute,Routes.todoRoute,Routes.commentRoute,Routes.galleryRoute]);


  //error-handling Middleware
  app.use((err, req, res, next) => {
    if (err) {
      res.status(400).send({msg: err.message});
    }
  })

};