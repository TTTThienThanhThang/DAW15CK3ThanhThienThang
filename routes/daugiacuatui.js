var express = require('express');
var router = express.Router();
var conn = require("../public/connect/connect");
router.get('/', (req, res) => {

})
router.get('/:mtk', (req, res) => { //thuc hien truy van toi csdl
    var mataikhoan = req.params.mtk;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        else {
            var sql = `select * from phiendaugia pdg join phieudaugia pd on pdg.MaPhienDauGia = pd.MaPhienDauGia join sanpham sp on sp.MaSanPham = pdg.MaSanPham where pd.MaTaiKhoan = ${mataikhoan}`;
            //ket 3 bang
            connection.query(sql, (err, result) => {
                connection.release();
                if (err) {
                    res.send({
                        'kq': 'err' //tra ket qua neu loi
                    })
                } else {
                    res.send({
                        'kq': result //tra ket qua neu k loi
                    })
                }
            })
        }
    })
})
module.exports = router;