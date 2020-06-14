const express = require('express');
const router = express.Router();
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

// welcome page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// auth dashboard
router.get('/dashboard', ensureAuthenticated, (req,res) => {
    res.render('dashboard', {
        user: req.user
    });
});

router.get('/dashboard/ps', ensureAuthenticated, (req,res) => {
    res.render('dbproperties' , {
        user: req.user
    });
});


module.exports = router;