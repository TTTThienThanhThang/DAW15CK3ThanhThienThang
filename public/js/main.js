function HienThiDangNhap() {
    $('#DangNhap').load('../login.html');
}

function HienThiDauGiaCuaTui() {
    $('#DangNhap').empty();
    $('.trangdaugiacuatui').empty();
    $('.anchodgct').empty();
    $('.trangdaugiacuatui').load('../daugiacuatui.html');
}

function HienThiThongTinCaNhan() {
    $('#DangNhap').load('../thongtinuser.html');
}

function HienThiDoiMatKhau() {
    $('#DangNhap').load('../doimatkhau.html');
}

function HienThiDangKi() {
    $('.dn').hide();
    $('#DangNhap').load('../dangki.html');
}