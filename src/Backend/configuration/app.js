require('../configuration/connection');
import Routes from '../configuration/routes'
import passport from 'passport'
import session from 'express-session'
import passportAuth from '../configuration/authUser'

exports.appStarted = (app) => {
  app.use(session({secret: '6786476467'}), passport.initialize(), passport.session());
  passportAuth();
  app.use([Routes.userRoute,Routes.todoRoute,Routes.commentRoute]);


  //error-handling Middleware
  app.use((err, req, res, next) => {
    if (err) {
      res.status(400).send({msg: err.message});
    }
  })

};