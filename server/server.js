const express = require('express');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./keys');

const app = express();

app.use(bodyParser.json());

//Setup Auth0
app.use(session({
  secret: 'asdlfk;jalskdfj;askdjfj',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: keys.domain,
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  //Go to db to find and create user
  let db = app.get('db');

  db.get_user([profile.email]).then( user => {
    console.log(user);
    if(user.length){
      return done(null, profile); // Go to serialize user when done is invoked
    } else {
      console.log(profile.name.givenName)
    }
  }).catch(err => console.log('check failed', err));

  return done(null, profile); // Go to serialize user when done is invoked
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/me'}));

passport.serializeUser(function(profileToSession, done) {
  done(null, profileToSession); // Puts second argument on session (profile)
});

passport.deserializeUser(function(profileFromSession, done) {
  //obj is value from session
  done(null, profileFromSession);
});

app.get('/me', function(req, res){
  res.send(req.user)
})

app.get('/favorites', function(req, res){
  if(!req.user){
    res.send([])
  }

  var id = req.user.id;
  db.getFavorites([id], function(data){

  })
})

//Setup database through massive
massive('postgres://qxcjfjmp:RSfd5jALpVgRaeefqISBrCKgVMl5aHr0@stampy.db.elephantsql.com:5432/qxcjfjmp').then( db => {
  app.set('db', db);
  db.create_tables()
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`)
});