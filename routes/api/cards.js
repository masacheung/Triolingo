const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Card = require('../../models/Card');
const User = require('../../models/User');
const validateCardInput = require('../../validation/cards');

// route for all the cards
router.get('/', (req, res) => {
    Card.find()
        .sort({ title: 1 })
        .then(cards => res.json(cards))
        .catch(err => res.status(404).json({ nocardsfound: "No cards found"}));
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
      user: req.user.id,
      title: req.body.title,
      definition: req.body.definition,
      synonyms: req.body.synonyms,
      audio: req.body.audio,
      notes: req.body.notes,
      category: req.body.category
    });

    newCard.save().then(card => res.json(card));
  }
);

// route for a user to update a card
router.patch('/:id',
  passport.authenticate('jwt', { session: false}),
  (req, res) => {

    Card.findById(req.body._id).then(card => {
      if(!card) {
        errors.card = 'No card is found with this ID';
        return res.status(404).json(errors);
      } else {
        card.title = req.body.title;
        card.notes = req.body.notes;
        card.definition = req.body.definition;
        card.synonyms = req.body.synonyms;
        card.save().then((card) => res.json(card));
        return res.status(200).json(card)
      }
    })
  }
)

    // deleting a card
router.delete('/:id', 
  // passport.authenticate('jwt', { session: true }),
  (req, res) => {
  Card.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: "Card is deleted!"
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