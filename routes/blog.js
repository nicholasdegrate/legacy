const express = require('express');
const router = express.Router();

// Load Blog Model
const Article = require('../models/article');


router.get('/', (req, res) => {
    // found all articles in the db
    Article.find({}, (err, article) => {
        if (!err) {
            res.render('blog', {article});
        } else {
            console.log(err);
        }
    });
});

router.get('/article/:id', (req,res) => {
    Article.findOne({_id: req.params.id}, (err, article) => {
        if (err) {
            article = {title: 'not Found', text: ''};
        } else {
            res.render('article', {article});
        }
    });
});


// requesting data for dashboard to load in blog
router.post('/', (req, res) => {
    const {blogTitle, blogAuthor, blogText} = req.body;
    let errors = [];

    // check the value of each blog input
    if (!blogTitle || !blogAuthor || !blogText) {
        errors.push({msg: 'Please enter all fields'});
    }

    if (errors.length > 0) {
        res.send('please enter all fields');
    } else {
        // check if the user currently has the same blog
        Article.findOne({blogText : blogText}).then(currentArticle => {
            if (currentArticle) {
                errors.push({msg: 'This blog already exists'});
                res.render('/welcome/dashboard', {
                    errors,
                    blogTitle,
                    blogAuthor,
                    blogText
                });
            } else {
                // stored the data in blog db
                const storedArticle = new Article({
                    title : req.body.blogTitle,
                    author: req.body.blogAuthor,
                    text  : req.body.blogText
                });
                storedArticle.save().then(currentArticle => {
                    req.flash('success_msg', 'you have success create this blog');
                    res.redirect('/blog');
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