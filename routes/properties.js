const express = require('express');
const router = express.Router();


// Load property Model
const Property = require('../models/property');

router.get('/', (req, res) => {
    // found all properties in the db
    Property.find({}, (err, properties) => {
        if (err) {
            console.log(err);
        } else {
             res.render('properties', {properties});
        }
    });
});

// requesting data for dashboard to load in properties
router.post('/', (req, res) => {
    const {location, price, bed, bath, square, listingItem, aboutListing} = req.body;
    console.log(req.body);
    let errors = [];

    // check the value of each blog input
    if (!location || !price || !bed || !bath || !square || !listingItem || !aboutListing) {
        errors.push({msg: 'Please enter all fields'});
    }

    if (errors.length > 0) {
        res.send('please enter all fields');
    } else {
        // check if the user currently has the same listing
        Property.findOne({aboutListing : aboutListing}).then(currentProperty => {
            if (currentProperty) {
                errors.push({msg: 'This property already exists'});
            } else {
                // stored the data in properties db
                const storedProperty = new Property({
                    location: req.body.location,
                    price: req.body.price,
                    bed : req.body.bed,
                    bath : req.body.bath,
                    footage: req.body.square,
                    listingItem: req.body.listingItem,
                    aboutListing: req.body.aboutListing
                });
                storedProperty.save().then(currentProperty => {
                    req.flash('success_msg', 'you have success create this a property');
                    res.redirect('/properties');
                }).catch(err => {
                    if (err) {
                        return res.status(400).json({ error: err.message });
                    }
                });
            }
        });
    }
});

module.exports = router;