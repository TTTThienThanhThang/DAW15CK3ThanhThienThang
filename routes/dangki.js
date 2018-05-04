var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('dangki', {
    title: 'Đăng kí',
    icon: 'images/favicon.ico'
  })
})
module.exports = router;