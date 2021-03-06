const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
router.get('/test', (req, res) => {
    res.json({msg: "This is users' test route"})
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({msg: 'Success'})
})

router.post('/signup', (req, res) => {
  const {errors, isValid } = validateSignupInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

    User.findOne({ username: req.body.username })
    .then(user => {
        if(user) {
            return res.status(400).json({username: "A user is already registered with this username"})
        } else {
            const newUser = new User({
                handle: req.body.handle,
                username: req.body.username,
                password: req.body.password
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then((user) => res.json(user))
                        .catch(err => console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }


  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username})
    .then(user => {
      if (!user) {
        return res.status(404).json({username: 'This username does not exist'});
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // res.json({msg: 'Success'});
            const payload = {
              id: user.id,
              username: user.username
            }

            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                  res.json({
                      success: true,
                      token: "Bearer " + token
                  });
              });
          } else {
            return res.status(400).json({password: 'Incorrect password'});
          }
        })
    })
})



module.exports = router;