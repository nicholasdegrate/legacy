const express = require('express');
const router = express.Router();

// Load property Model
const Property = require('../models/property');
const Article = require('../models/article');

//home page route
router.get('/', (req,res) => {
    Property.find({}, (err, properties) => {
        if (!err) {
            res.render('home', {properties});
        } else {
            console.log(err);
        }
    });
});

// about routes
router.get('/about', (req, res) => {
    const abouts = [
        {
            img : 'img/shawn.jpg',
            title: 'Who We Are',
            para : ' Hello, we are Monica and Shawn, and we are on a mission to reach out and help as many distressed homeowners as possible. Over the years, we have become experts on educating and assisting homeowners through their foreclosure process. With all the constant changes from day to day occurring in the banking industry, you, the Homeowner, need someone you can trust to offer you open and honest advice to aid you in making the right decision at such a life-altering moment. The best part about our mission is our advice is 100% free to you as the homeowner. If you have any questions about your current situation and would like to speak with a local expert for friendly advice, please give us a call right away!',
        },
        {
            img : 'img/house.jpg',
            title: 'Our Philosophy',
            para : ' We understand there are times that life just happens, whether we are prepared for it or not. And unfortunately during those times you experience a major financial blow that you just cannot recover from and begin "robbing from Peter to pay Paul".   We want to help you prevent harming your lifestyle, credit, peace of mind, and most importantly your legacy. We will help you rebuild.',
        },
        {
            img : 'img/think.jpg',
            title: 'Our Specialty',
            para : 'We have over 20 years in home mortgage experience ranging from loan origination, foreclosure, bankruptcy, and modification options. However, our best expert advice comes in the form of providing options that will allow you as a -home owner to sell your home and put some much needed cash in your pockets to start a new chapter in your life without -harming your credit. We\'re just a phone call away.',
        },
    ];
    res.render('about', {abouts : abouts});
});

//contact route
router.get('/contact', (req,res) => {
    res.render('contact');
});

module.exports = router;