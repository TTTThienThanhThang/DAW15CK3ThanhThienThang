var express = require('express');
var router = express.Router();
var conn = require("../public/connect/connect");
router.get('/', (req, res) => {

})
router.get('/taikhoan', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = "SELECT * from loaitaikhoan ltk join taikhoan tk on ltk.MaLoaiTaiKhoan = tk.MaLoaiTaiKhoan";
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) console.log("error");
                else {
                    res.send({
                        'tk': result
                    })
                }
            })
        }
    })
})
router.get('/sanpham', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = "SELECT * from sanpham sp join loaisanpham lsp on sp.MaLoaiSanPham = lsp.MaLoaiSanPham";
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) console.log("error");
                else {
                    res.send({
                        'sp': result
                    })
                }
            })
        }
    })
})
router.get('/phiendaugia', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = "SELECT * from phiendaugia pdg join tinhtrangphiendaugia tt on pdg.MaTinhTrangPhienDauGia = tt.MaTinhTrangPhienDauGia";
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) console.log("error");
                else {
                    res.send({
                        'pdg': result
                    })
                }
            })
        }
    })
})
router.get('/phieudaugia', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = "SELECT * from phieudaugia pdg join tinhtrangphieudaugia tt on pdg.MaTinhTrangPhieuDauGia = tt.MaTinhTrangPhieuDauGia";
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) console.log("error");
                else {
                    res.send({
                        'phieudg': result
                    })
                }
            })
        }
    })
})
router.get('/thamso', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = "SELECT * from thamso";
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) console.log("error");
                else {
                    res.send({
                        'ts': result
                    })
                }
            })
        }
    })
})
router.post('/suathamso', (req, res) => {
    var mathamso = req.body.mts;
    var giatri = req.body.gt;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `UPDATE thamso SET GiaTri=${giatri} WHERE MaThamSo = ${mathamso}`;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'khong the update'
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
router.post('/suathoigian', (req, res) => {
    var maphien = req.body.maphien;
    var thoigiansua = req.body.thoigiansua;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `UPDATE phiendaugia SET ThoiGianDau=${thoigiansua} WHERE MaPhienDauGia = ${maphien}`;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'khong the update'
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
router.get('/laythongtinloaitaikhoan', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `SELECT * FROM loaitaikhoan WHERE MaLoaiTaiKhoan != 3`;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'khong the lấy dữ liệu'
                    })
                } else {
                    res.send({
                        'kq': result
                    })
                }
            })
        }
    })
})
router.post('/thaydoiloai', (req, res) => {
    var mataikhoan = req.body.mataikhoan;
    var loai = req.body.loai;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `UPDATE taikhoan SET MaLoaiTaiKhoan=${loai} WHERE MaTaiKoan = ${mataikhoan}`;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'khong the update'
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
router.get('/layloaisanpham', (req, res) => {
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `SELECT * FROM loaisanpham`;
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'khong the lấy dữ liệu'
                    })
                } else {
                    res.send({
                        'kq': result
                    })
                }
            })
        }
    })
})
router.post('/themsanpham', (req, res) => {
    var tensp = req.body.tensanpham;
    var thoigiandau = req.body.thoigiandau;
    var giasanpham = req.body.giasanpham;
    var loaisanpham = req.body.loaisanpham;
    var hinhdaidien = req.body.hinhdaidien;
    var mota = req.body.mota;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `insert into sanpham(TenSanPham,MaLoaiSanPham,DacTa,HinhDaiDien) values('${tensp}',${loaisanpham},'${mota}','${hinhdaidien}')`;
            connection.query(sql, (err, result) => {
                if (err) console.log("k ket noi duoc bang san pham");
                else {
                    var now = new Date();
                    var thang = now.getMonth() * 1 + 1
                    var giohientai = now.getDate() + "/" + thang + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                    var insertid = result.insertId;
                    var sql2 = `insert into phiendaugia(MaSanPham,ThoiGianBatDau,ThoiGianDau,GiaThapNhat,GiaHienTai,MaTinhTrangPhienDauGia) values (${insertid},'${giohientai}',${thoigiandau},'${giasanpham}',${giasanpham},3)`;
                    connection.query(sql2, (err, result2) => {
                        if (err) {
                            res.send({
                                'kq': "Thêm thất bại"
                            })
                        } else {
                            res.send({
                                'kq': "Thêm thành công"
                            })
                        }
                    })
                }

            })
        }
    })
})
module.exports = router;