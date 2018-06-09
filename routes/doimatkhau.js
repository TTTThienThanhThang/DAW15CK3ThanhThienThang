var express = require('express');
var router = express.Router();
const conn = require("../public/connect/connect");
router.get('/', (req, res) => {

})
router.post('/', (req, res) => {
    var mataikhoan = req.body.mataikhoan;
    var mk = req.body.mkm;
    conn.getConnection((err, connection) => {
        if (err) console.log("error");
        var sql = `update taikhoan set MatKhau='${mk}' where MaTaiKoan=${mataikhoan}`;
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) {
                res.send({
                    'kq': 0
                })
            } else {
                res.send({
                    'kq': 1
                })
            }
        })

    })
})
module.exports = router;