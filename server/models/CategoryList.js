const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategoryListSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    list: {
        type : Array,
        required : true
    }
})

const CategoryList = mongoose.model('category', CategoryListSchema);

module.exports = CategoryList;


