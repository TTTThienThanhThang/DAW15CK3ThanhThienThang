var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('daugiacuatui', {
        title: 'Đấu giá của tui',
        icon: 'images/favicon.ico'
    })
})
module.exports = router;