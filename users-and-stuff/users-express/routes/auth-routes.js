const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const UserModel = require('../models/user-model');

const router = express.Router();

// POST signup
router.post('/api/signup', (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({message:'Need both email and password'});
    return;
  }

    UserModel.findOne(
      {email:req.body.email},
      (err, userFromDb) => {
        if(err) {
          console.log('🛑🛑🛑🛑🛑🛑🛑🛑');
          // 500 for server errors (nothing user can do)
          res.status(500).json({message:'Email check went to 💩'});
          return;
        }
        if (userFromDb) {
          console.log('🛑🛑🛑🛑   🛑🛑   🛑🛑');
          // 400 for server errors (user can fix)
          res.status(400).json({message:'Email already exists'});
          return;
        }

        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new UserModel({
          fullName: req.body.fullName,
          email:req.body.email,
          password: encryptedPassword,
        });

        newUser.save((err) => {
          if (err) {
            res.status(500).json({message:'User save went to 💩'});
            return;
          }

          // automatically logs them in after the sign up
          // (req.login() is defined by passport)
          req.login(newUser, (err) => {
            if (err) {
              res.status(500).json({message:'Login went to 💩'});
            }
          });

          newUser.password = undefined;
          // send the users info to the front end except for password
          res.status(200).json(newUser);
        });
      }
    );
  });


// POST login
// this is different because passport.authenticate() redirects
// (APIs usually shouldnt redirect)
router.post('/api/login', (req, res, next) => {
  const authenticateFunction =
    passport.authenticate('local', (err, theUser, extraInfo) => {
      // error prevented us from deciding if login was a succuss/failure
      if(err) {
        res.status(500).json({message:'Unknown login error'});
        return;
      }

      // login failed
      if (!theUser) {
        // extraInfo contains feedback messages from LocalStrategy
        res.status(401).json(extraInfo);
        return;
      }

      // login success
      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({message:'Session save error'});
          return;
        }
        theUser.password = undefined;

        // everything worked!
        res.status(200).json(theUser);
      });
    });
    authenticateFunction(req, res, next);
});


// POST logout
router.post('/api/logout', (req, res, next) => {
  // req.logout defined by passport
  req.logout();
  res.status(200).json({message:'Log out success! 🐫'});
});

// GET checklogin
router.get('/api/checklogin', (req, res, next) => {
    if (!req.user) {
      res.status(401).json({message:'nobody logged in 🥒'});
    }
    req.user.password = undefined;
    res.status(200).json(req.user);
});

module.exports = router;
