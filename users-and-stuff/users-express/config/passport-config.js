const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const UserModel = require('../models/user-model');

// save the users ID in the bowl (called when user logs in)
passport.serializeUser((userFromDb, next) => {
  next(null, userFromDb._id);
});

// retirieve the users info from the db with the id
// we got from the bowl
passport.deserializeUser((idFromBowl, next) => {
  UserModel.findById(
    idFromBowl,
    (err, userFromDb) => {
      if (err) {
        next(err);
        return;
      }
      next(null, userFromDb);
    }
  );
});


// email and password login Strategy
passport.use(new LocalStrategy(
  {
    usernameField:'email', // sent through AJAX from Angular
    passwordField:'password' // sent through AJAX from Angular
  },
  (email, password, next) => {
    UserModel.findOne(
      {email: email},
      (err, userFromDb) => {
        if (err) {
          next(err);
          return;
        }

        if (userFromDb === null) {
          next(null, false, {message:'Incorrect email'});
          return;
        }

        if (bcrypt.compareSync(password, userFromDb.password) === false) {
          next(null, false, {message:'Incorrect password'});
          return;
        }
        next(null, userFromDb);
      }
    );
  }
));
