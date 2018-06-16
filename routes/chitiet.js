var express = require('express');
var router = express.Router();
var conn = require("../public/connect/connect");
router.get('/', (req, res) => {

})
router.get('/:msp', (req, res) => {
    var msp = req.params.msp;
    conn.getConnection((err, connection) => {
        if (err) throw err;
        var sql = `select * from sanpham sp join loaisanpham lsp on sp.MaLoaiSanPham=lsp.MaLoaiSanPham join hinh h on h.MaSanPham = sp.MaSanPham where sp.MaSanPham = ${msp}`;
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) console.log("loi");
            else {
                res.send({
                    'kq': result[0]
                });
            }
        })
    })
})
module.exports = router;