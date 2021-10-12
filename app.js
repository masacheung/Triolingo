const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require('./routes/api/users');
const cards = require('./routes/api/cards');
const User = require('./models/User');
const Card = require('./models/Card');
const passport = require('passport');

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

app.get("/", (req, res) => {
    // const user = new User({
    //     username: "demouser",
    //     password: "demo123"
    // })
    res.send("Hello World")
})


app.use("/api/users", users);
app.use("/api/cards", cards);

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)})