var express = require('express');
var models=require('../models');
var router = express.Router();
//注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg', { title: '注册' });
});

router.post('/reg', function(req, res, next) {
  var user=req.body;
  if(user.password != user.repassword){
    res.redirect('back')
  }else{
    models.User.create(req.body,function (err,doc) {
      console.log(doc);
      res.redirect('/users/login')
    })
  }

});
//登陆
router.get('/login', function(req, res, next) {
  res.render('user/login', { title: '登陆' });
});

router.post('/login', function(req, res, next) {
  models.User.findOne({username:req.body.username,password:req.body.password},function (err,doc) {
    if(err){
      res.redirect('back')
    }else{
      if(doc){//如果有值表示找到了对应用户，表示登陆成功了
        res.redirect('/')
      }else{//找不到登录失败
        res.redirect('back')
      }

    }
  })
});

//退出
router.get('/logout', function(req, res, next) {
  res.render('index', { title: '退出' });
});

module.exports = router;
