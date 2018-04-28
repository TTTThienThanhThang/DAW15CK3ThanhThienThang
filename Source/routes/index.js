var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', icon:'images/favicon.ico'});
});
router.get('/login',(req,res)=>{
  res.render('login',{title:'Đăng nhập'})
})
module.exports = router;
