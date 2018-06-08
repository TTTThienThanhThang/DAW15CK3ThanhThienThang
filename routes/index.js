var express = require('express');
var router = express.Router();
var conn = require('../public/connect/connect');
/* GET home page. */
router.get('/', function (req, res, next) {

});
router.get('/allitem', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        var sql = "select * from sanpham";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) console.log("Loi ket noi");
            res.send({
                'kq': result
            })
        })
    })

})
module.exports = router;