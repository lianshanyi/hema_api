var express = require('express');
var router = express.Router();
const classify=require('../public/classify');
const classOne=require("../public/classOne");
const productList=require("../public/productList");
const recommend=require("../public/recommend");
const cachi=require('../public/cachi')
const indexNav=require('../public/indexNav');
const details=require('../public/details');
const guess=require('../public/guess');
const banner=require('../public/banner')
const dazui =require('../public/dazui')
/* GET home page. */
router.get('/classify', function(req, res, next) {


  res.json(classify)
});
router.get('/one', function(req, res, next) {

    res.json(classOne)
});
router.get('/cart', function(req, res, next) {

    res.json(productList)
});
router.get('/recommend', function(req, res, next) {

    res.json(recommend)
});
router.get('/cachi', function(req, res, next) {

    res.json(cachi);
});
// 推荐商品列表
const recomWaresInfo=require("../public/json/hema-me-recomlist.json")
router.get('/api/recomWaresInfo', function(req, res, next) {
    res.json(recomWaresInfo)
});
// 主要信息------资产--------
const main=require("../public/json/hema-me-main.json")
router.get('/api/main/', function(req, res, next) {
    res.json(main)
});
// 路由信息
const routerInfo=require("../public/json/routerInfo.json")
router.get('/api/routerInfo', function(req, res, next) {

    res.json(routerInfo)
});


//盒马门店
const shoplist=require("../public/json/shoplist.json")
router.get('/api/me/shoplist', function(req, res, next) {

    res.json(shoplist)
});

//盒马-首页-吃货节
const eatDayData=require("../public/json/hema-index-eatday.json")
router.get('/api/index/eatday', function(req, res, next) {

    res.json(eatDayData)
});
const qinxin=require('../public/qin');
router.get('/qin', function(req, res, next) {
    res.json(qinxin)
});

router.get('/indexNav', function(req, res, next) {

    res.json(indexNav)
});
router.get('/details', function(req, res, next) {

    res.json(details)
});
router.get('/guess', function(req, res, next) {

    res.json(guess)
});
router.get('/banner', function(req, res, next) {

    res.json(banner)
});
router.get('/dazui', function(req, res, next) {

    res.json(dazui)
});
module.exports = router;
