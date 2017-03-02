var express = require('express');
var markdown=require('markdown').markdown;
var models=require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //user 字符串对象
    //先查找，然后把user字符串转成user对象
    var keywords=req.query.keywords;
    var queryObj={};
    if(keywords){
        var reg=new RegExp(keywords,'i');
        queryObj={$or:[{title:reg},{content:reg}]}
    }
    models.Article.find(queryObj).populate('user').exec(function (err,articles) {
        articles.forEach(function (article) {
            article.content=markdown.toHTML(article.content)
        });
        res.render('index', { articles: articles});
    })
});

module.exports = router;
