const mongoose = require('mongoose');

// blog section
const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    text:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required: true,
        default: "anonymous"
    },
});

// blog
const Article = new mongoose.model('article', blogSchema);

module.exports = Article;