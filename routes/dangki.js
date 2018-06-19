var express = require('express');
var router = express.Router();
var conn = require("../public/connect/connect");
router.get('/', (req, res) => {

})
router.post('/', (req, res) => {
    var user = req.body.user;
    var pass = req.body.pass;
    var hoten = req.body.hoten;
    var diachi = req.body.diachi;
    conn.getConnection((err, connection) => {
        if (err)
            throw err;
        else {
            var sql = `select TenDangNhap from taikhoan where TenDangNhap = '${user}'`;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) throw err;
                else {
                    if (result.length != 0) {
                        res.send({
                            'kq': 0
                        })
                    } else {
                        var sql = `INSERT INTO taikhoan(TenDangNhap,MatKhau,TenHienThi,DiaChi,MaLoaiTaiKhoan) VALUES('${user}','${pass}','${hoten}','${diachi}',1)`;
                        connection.query(sql, (err, result) => {
                            if (err) {
                                res.send({
                                    'kq': 0
                                });
                            } else {
                                res.send({
                                    'kq': 1
                                })
                            }
                        })
                    }
                }
            })
        }

    })
})
module.exports = router;