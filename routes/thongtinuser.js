var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('thongtinuser', {
        title: 'Thông tin user',
        icon: 'images/favicon.ico'
    });
})
module.exports = router;