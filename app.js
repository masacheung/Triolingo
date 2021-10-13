const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const passport = require('passport');
const users = require('./routes/api/users');
const cards = require('./routes/api/cards');
const decks = require('./routes/api/decks');
const User = require('./models/User');
const Card = require('./models/Card');
const Deck = require('./models/Deck');
const messages = require('./routes/api/messages');
const Message = require('./models/Message');

const path= require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

mongoose
    .connect(db, { useNewUrlParser: true})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/cards", cards);
app.use("/api/decks", decks);
app.use("/api/messages", messages);


app.listen(port, () => {console.log(`Listening on port ${port}`)})