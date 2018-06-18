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
router.get('/giadauhientai/:msp', (req, res) => {
    var msp = req.params.msp;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        var sql = "select * from phiendaugia where MaSanPham = " + msp;
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            else {
                res.send({
                    'kq': result[0]
                })
            }
        })
    })
})
router.get("/laythamso", (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        var sql = "select * from thamso";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            else {
                res.send({
                    'kq': result
                })
            }
        })
    })
})

router.post('/themvaophieudaugia', (req, res) => {
    var phiendaugia = req.body.phiendaugia;
    var mataikhoan = req.body.mataikhoan;
    var giadat = req.body.giadat;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        var sql = `SELECT * from phieudaugia where MaTaiKhoan = ${mataikhoan} and MaPhienDauGia = ${phiendaugia}`;
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            else {
                if (result.length != 0) {
                    var maphieudaugia = result[0].MaPhieuDauGia;
                    var sql2 = `update phieudaugia set GiaDau = ${giadat} where MaPhieuDauGia = ${maphieudaugia}`;
                    connection.query(sql2, (err, result2) => {
                        if (err) throw err;
                        else {
                            res.send({
                                'maphieudaugia': maphieudaugia
                            })
                        }
                    })
                } else {
                    var sql2 = `insert into phieudaugia(MaPhienDauGia,MaTaiKhoan,GiaDau,MaTinhTrangPhieuDauGia) values(${phiendaugia},${mataikhoan},${giadat},1)`;
                    connection.query(sql2, (err, result2) => {
                        if (err) throw err;
                        else {
                            var insertid = result2.insertId;
                            res.send({
                                'maphieudaugia': insertid
                            })
                        }
                    })
                }
            }
        })
    })
})
router.post('/themvaophiendaugia', (req, res) => {
    var phiendaugia = req.body.maphiendaugia;
    var thoigiandau = req.body.thamsocong;
    var giadat = req.body.giadat;
    var maphieudauthang = req.body.maphieudauthang;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        var sql = `update phiendaugia set ThoiGianDau = ${thoigiandau}, GiaHienTai=${giadat}, MaPhieuDauThang = ${maphieudauthang},MaTinhTrangPhienDauGia=2 where MaPhienDauGia= ${phiendaugia}`;
        connection.query(sql, (err, result3) => {
            if (err) {
                res.send({
                    'kq': 'Dau gia that bai'
                })
            } else {
                res.send({
                    'kq': 'Dau gia thanh cong'
                })
            }
        })
    })
})
router.get('/updatephiendau/:pdg', (req, res) => { //thuc hien update vao phien dau gia, va phieu dau gia tuong ung voi user
    var phiendaugia = req.params.pdg;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = "update phiendaugia set MaTinhTrangPhienDauGia = 1 where MaPhienDauGia = " + phiendaugia;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'Update that bai'
                    })
                }
            })
            var sql2 = "update phieudaugia set MaTinhTrangPhieuDauGia = 2 where MaPhienDauGia = " + phiendaugia;
            connection.query(sql2, (err, result2) => {
                if (err) {
                    res.send({
                        'kq': 'Update that bai'
                    })
                } else {
                    res.send({
                        'kq': 'update thanh cong'
                    })
                }
            })
        }
    })
})
module.exports = router;