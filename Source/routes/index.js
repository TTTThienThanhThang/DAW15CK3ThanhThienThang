var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', icon:'images/favicon.ico'});
});
router.get('/login',(req,res)=>{
  res.render('login',{title:'Đăng nhập'})
})
router.get('/dangki',(req,res)=>{
  res.render('dangki',{title:'Đăng kí'})
})
router.get('/daugiacuatui',(req,res)=>{
  res.render('daugiacuatui',{title:'Đấu giá của tui', icon:'images/favicon.ico'})
})
module.exports = router;
