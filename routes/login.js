var express = require('express');
var router = express.Router();
var conn = require('../public/connect/connect');


router.get('/', (req, res) => {

})
router.post('/', (req, res) => {
    var user = req.body.user;
    var pass = req.body.pass;
    conn.getConnection((err, connection) => {
        if (err)
            throw err;
        var sql = "SELECT * from taikhoan t join loaitaikhoan l on t.MaLoaiTaiKhoan = l.MaLoaiTaiKhoan where t.TenDangNhap='" + user + "' and t.MatKhau = '" + pass + "'";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            if (result.length == 0) {
                res.send({
                    'kq': 0
                })
            } else {
                res.send({
                    'kq': result
                })
            }
        })
    })
})
module.exports = router;