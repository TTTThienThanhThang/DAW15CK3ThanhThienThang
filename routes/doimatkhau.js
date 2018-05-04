var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('doimatkhau', {
        title: 'Change password',
        icon: 'images/favicon.ico'
    });
})
module.exports = router;