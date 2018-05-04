var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('chitiet', {
        title: 'Chi tiết',
        icon: 'images/favicon.ico'
    });
})
module.exports = router;