const express = require('express');
const router = express.Router();

const Article = require('../models/Articles');
/*
router.get('/', (req, res) => {
    Article.find()
    .sort({date: -1})
    .then(articles => res.json(articles))
});
*/
/*
router.get('/', (req, res) => {
    console.log("got here instead")
    Article.find()//exclude cat/ref/text/auth so just title
    .sort({date: 1})
    .then(articles => res.json(articles))
});
*/

router.get('/:category', (req, res) => {//just returns titles
    console.log(req.params.category)
    Article.find({category: req.params.category}, {category:0,references:0, text:0, author:0})
    .then(articles => res.json(articles))
})

module.exports =  router;