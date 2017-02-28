var express = require('express');
var auth=require('../middleware/auth');
var router = express.Router();

//发表文章
router.get('/post',auth.checkLogin,function(req, res, next) {
    res.render('index', { title: '发表文章' });
});

module.exports = router;
