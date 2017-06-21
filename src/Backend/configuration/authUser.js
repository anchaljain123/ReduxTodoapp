const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../api/user/user.model');
const localAuthentication = () => {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      User.findOne({username: username, password: password}, (err, user) => {
        if (err) return done(err);
        if (!user) {
          return done(null, err);
        }
        return done(null, user);
      })
    }
  ));

  passport.serializeUser(function (user, done) {
    done(null, user['_id']);
  });

  passport.deserializeUser(function (id, done) {
    console.log('------deserialize -----------',id);
    User.find({'_id':id}, function (err, user) {
      if(err){
        done(err,null);
      }
      done(null, user);
    });
  });
};

module.exports = localAuthentication;