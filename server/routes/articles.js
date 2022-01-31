const express = require('express');
const router = express.Router();

const Article = require('../models/Articles');

//already in /api/articles
/*
router.get('/', (req, res) => {
    Article.find()
    .sort({date: -1})
    .then(articles => res.json(articles))
});
*/
router.get('/:title', (req, res) => {
    Article.find({title: req.params.title})
    .then(article => res.json(article))
})


router.post('/', (req, res) => {
    const newArticle = new Article({
        category: req.body.category,
        title: req.body.title,
        references: req.body.references,
        text: req.body.text,
        author: req.body.author
    })
    newArticle.save().then(article =>res.json(article))
});

router.delete('/:id',(req, res) =>{
    Article.findById(req.params.id)
    .then(article => article.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({sucess:false}))
})

module.exports =  router;