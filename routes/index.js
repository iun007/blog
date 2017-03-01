var express = require('express');
var models=require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //user 字符串对象
    //先查找，然后把user字符串转成user对象
    models.Article.find({}).populate('user').exec(function (err,articles) {
        res.render('index', { articles: articles});
    })
});

module.exports = router;
