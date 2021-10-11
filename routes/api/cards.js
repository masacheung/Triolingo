const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('');
const Card = require('../../models/Card');
const User = require('../../models/User');
const validateCardInput = require('../../validation/cards');


router.get('/test', (req, res) => {
    res.json({msg: "This is the cards test route"})
})

// route for all the cards
router.get('/', (req, res) => {
    Card.find()
        .sort({ title: 1 })
        .then(cards => res.json(cards))
        .catch(err => res.status(404).json({ nocardsfound: "No cards found"}));
})

// route for list of cards created by a specific user
router.get('/users/:user_id', (req, res) => {
    Card.find({user: req.params.user_id})
        .then(cards => res.json(cards))
        .catch(err => 
            res.status(404).json({ nocardsfound: 'No cards found from this user'}))
})

// route for single card
router.get('/:id', (req, res) => {
    Card.findById(req.params.id)
        .then(card => res.json(card))
        .catch(err =>
            res.status(404).json({ nocardfound: 'No card found with this ID' })
        );
});

// route for a user to post a card
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCardInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newCard = new Card({
        title: req.body.title,
        definition: req.body.definition,
        // synonyms: req.body.synonyms,
        // audio: req.body.audio,
        // notes: req.body.notes,
        // user: req.user.id
      });
  
      newCard.save().then(card => res.json(card));
    }
  );