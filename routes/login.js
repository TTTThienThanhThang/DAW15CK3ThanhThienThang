var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {
        title: 'Đăng nhập',
        icon: 'images/favicon.ico'
    })
})

module.exports = router;