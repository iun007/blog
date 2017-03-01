var express = require('express');
var models=require('../models');
var multer=require('multer');
var auth=require('../middleware/auth');
//指定存储的目录和文件名
var storage = multer.diskStorage({
    //目标路径
    destination: function (req, file, cb) {
        cb(null, '../public/uploads')
    },
    //文件名
    filename: function (req, file, cb) {
        cb(null,Date.now()+'.'+(file.mimetype.slice(file.mimetype.indexOf('/')+1)))
    }
});
var upload = multer({ storage: storage });

var router = express.Router();

//发表文章
router.get('/add',auth.checkLogin,function(req, res, next) {
    res.render('article/add', { title: '发表文章' });
});

router.post('/add',auth.checkLogin,upload.single('poster'),function(req, res, next) {
    console.log(req.file);
   var article=req.body;
    if(req.file){
        article.poster='/uploads/'+req.file.filename;
    }

    //把当前登陆的用户的Id赋值给user
    article.user=req.session.user._id;
    models.Article.create(article,function (err,doc) {
        if(err){
            req.flash('error','文章发表失败');
            res.redirect('/users/login')
        }else {
            console.log(doc);
            req.flash('success','文章发表成功');
            res.redirect('/')
        }

    })
});

module.exports = router;
