const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Card = require('../../models/Card');
const Deck = require('../../models/Deck');
const User = require('../../models/User');
const validateDeckInput = require('../../validation/decks');


// route for all the decks
router.get('/', (req, res) => {
    Deck.find()
        .sort({ title: 1 })
        .then(decks => res.json(decks))
        .catch(err => res.status(404).json({ nodecksfound: "No decks found"}));
})

// route for list of decks created by a specific user
router.get('/users/:user_id', (req, res) => {
    Deck.find({user: req.params.user_id})
        .then(decks => res.json(decks))
        .catch(err => 
            res.status(404).json({ nodecksfound: 'No decks found from this user'}))
})

// route for single deck
router.get('/:id', (req, res) => {
    Deck.findById(req.params.id)
        .then(deck => res.json(deck))
        .catch(err =>
            res.status(404).json({ nodecksfound: 'No deck found with this ID' })
        );
});

// route for a user to post a deck
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDeckInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newDeck = new Deck({
      user: req.user.id,
      title: req.body.title,
    });

    newDeck.save().then(deck => res.json(deck));
  }
);

  // deleting a deck
router.delete('/:id', 
  passport.authenticate('jwt', { session: true }),  
  (req, res) => {
    Deck.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: "Deck is deleted!"
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        })
      }
    )
});

module.exports = router;