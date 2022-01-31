const mongoose = require('mongoose')


const Schema = mongoose.Schema

const ArticleListSchema = new Schema({
    title:String,
    required:true
})


const ArticleList = mongoose.model('ArticleList', ArticleListSchema);

module.exports = ArticleList;