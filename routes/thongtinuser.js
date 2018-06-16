var express = require('express');
var router = express.Router();
var conn = require("../public/connect/connect");
router.get('/', (req, res) => {

})
router.post('/', (req, res) => {
    var ht = req.body.HoTen;
    var em = req.body.Email;
    var sdt = req.body.SDTh;
    var dc = req.body.DCh;
    var mtk = req.body.MaTaiKhoan;
    conn.getConnection((err, connection) => {
        if (err) console.log("error");
        var sql = `update taikhoan set TenHienThi = '${ht}', Email='${em}', DienThoai='${sdt}',DiaChi='${dc}' where MaTaiKoan=${mtk}`;
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