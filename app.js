const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const passport = require('passport');
const users = require('./routes/api/users');
const cards = require('./routes/api/cards');
const decks = require('./routes/api/decks');
const User = require('./models/User');
const Card = require('./models/Card');
const Deck = require('./models/Deck');
const app = express();
const cors = require('cors');
let cors_proxy = require('cors-anywhere');
// const { createProxyMiddleware } = require('http-proxy-middleware');


// cors configuration for api calls
// ---------------------------------
// app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// ---------------------------------

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
const host = process.env.HOST || '0.0.0.0';

app.use("/api/users", users);
app.use("/api/cards", cards);
app.use("/api/decks", decks);
app.use("/api/messages", messages);


app.listen(port, () => {console.log(`Listening on port ${port}`)})
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });