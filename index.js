// require modules
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
const path = require('path');

const app = express();

//passport config
require('./config/passport')(passport);

// DB config
const db = require('./config/keys').mongoURI;

// defining port
const PORT = process.env.PORT || 3000;

// STATIC info
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));

// connecting to database
mongoose.connect(
    db, {useNewUrlParser: true, useUnifiedTopology: true})
    // CONFORMING THE CONNECTIONS
    .then(() => {
    console.log('mongodb connected...');
    // THROW ERR
    }).catch(err => console.log(err)
);
mongoose.set('useCreateIndex', true);


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended : true }));

// Express session
app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());


// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
  //home
app.use('/', require('./routes/web'));
  //login system routes
app.use('/welcome', require('./routes/app'));
app.use('/users/', require('./routes/users'));
  //blog
app.use('/blog', require('./routes/blog'));
  //properties
app.use('/properties', require('./routes/properties'));

// listening to server
app.listen(PORT, (err) => (err) ? console.log(err) : console.log(`listening on ${PORT}`));