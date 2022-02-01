const express = require('express');
const router = express.Router();

const CategoryList = require('../models/CategoryList');


router.post('/', (req, res) => {
    const newCategoryList = new CategoryList({
        name: req.body.name,
        list: req.body.list
    })
    newCategoryList.save().then(newCategoryList =>res.json(newCategoryList))
});

router.get('/:name', (req, res) => {//just returns titles from category
    //CategoryList.find({name: req.params.name}, {name:0})
    CategoryList.find({name: req.params.name}, {name:0})
    .then(categorys => res.json(categorys))
})

module.exports =  router;