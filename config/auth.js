module.exports =  {
    // ensuring the auth is correct
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please log in to change content.');
        res.redirect('/users/login');
    },
    forwardAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
          return next();
        }
        res.redirect('/');
    }
};
