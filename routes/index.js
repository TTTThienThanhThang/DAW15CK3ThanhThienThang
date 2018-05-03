var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', icon:'images/favicon.ico'});
});
router.get('/login',(req,res)=>{
  res.render('login',{title:'Đăng nhập', icon:'images/favicon.ico'})
})
router.get('/dangki',(req,res)=>{
  res.render('dangki',{title:'Đăng kí', icon:'images/favicon.ico'})
})
router.get('/daugiacuatui',(req,res)=>{
  res.render('daugiacuatui',{title:'Đấu giá của tui', icon:'images/favicon.ico'})
})
router.get('/thongtinuser',(req,res)=>{
  res.render('thongtinuser',{title:'Thông tin user', icon:'images/favicon.ico'});
})
router.get('/doimatkhau',(req,res)=>{
  res.render('doimatkhau',{title:'Change password', icon:'images/favicon.ico'});
})
router.get('/chitiet',(req,res)=>{
  res.render('chitiet', { title: 'Chi tiết', icon:'images/favicon.ico'});
})
module.exports = router;
