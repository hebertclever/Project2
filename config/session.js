// configs/session.config.js

// require session
const session = require('express-session');

// ADDED: require mongostore
const MongoStore = require('connect-mongo')(session);

// ADDED: require mongoose
const mongoose = require('mongoose');

module.exports = app => {
  app.use(
    session({
      secret: '11989993067',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 6000000 // === 1 day ?
      },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
      })
    })
  );
}