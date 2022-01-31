const mongoose = require('mongoose')


const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    category:{
        
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    references:{
        type: Array,
        required: false,
        unique: false,
        trim: true,
    },
    text:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    author:{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;