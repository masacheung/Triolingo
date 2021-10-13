const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Message = require('../../models/Message');
const validateMessageInput = require('../../validation/messages');

router.get('/', (req, res) => {
    Message.find().sort({createdAt: -1}).limit(20)
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json({nomessagesfound: 'No messages found'}));
})

// passport.authenticate('jwt', {session: false})

router.post('/', (req, res) => {
    const { errors, isValid } = validateMessageInput(req.body);
    
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newMessage = new Message({
        user: req.body.username,
        content: req.body.content
    });

    newMessage.save()
        .then((message) => res.json(message))
        .catch((err) => res.status(400).json({Invalid: 'Invalid message'}));
})

module.exports = router;