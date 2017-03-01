/**
 * Created by Administrator on 2017/2/25.
 */
var mongoose=require('mongoose');
var ObjectId=mongoose.Schema.Types.ObjectId;
var config=require('../config');
mongoose.connect(config.dbUrl);
exports.User=mongoose.model('user',new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
}));

exports.Article=mongoose.model('article',new mongoose.Schema({
    //是一个对象Id类型,引用用户类型
    user:{type:ObjectId,ref:'user'},
    title:String,
    content:String,
    poster:String,//增加一张图片
    createAt:{type:Date,default:Date.now()}
}));
