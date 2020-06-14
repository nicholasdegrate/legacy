// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs');

// // load User model
// const User = require('../models/User');

// module.exports = (passport) => {
//     passport.use(
//         new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
//             //Match user
//             User.findOne({email : email})
//             .then(user => {
//                 if (!user) {
//                     return done(null, false, {message: 'That email is not registered.'});
//                 }

//                 // Match password
//                 bcrypt.compare(password, user.password, (err, isMatch) => {
//                     if (err) throw err;
//                     if (isMatch) {
//                         return done(null, user);
//                     } else done(null, false, { message : 'Password invalid' });
//                 });
//             });
//         })
//     );

//     passport.serializeUser((user, done) => {
//         done(null, user.id);
//     });
//     passport.deserializeUser((id, done) => {
//         User.findById(id, (err, user) => {
//             done(err, user);
//         });
//     });
// };

