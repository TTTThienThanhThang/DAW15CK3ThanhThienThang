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

function VeHome() {
    $('#root').empty();
    $('#root').load('../index.html');
}

function HienThiDoiMatKhau() {
    $('#DangNhap').load('../doimatkhau.html');
}

$(document).ready(function () {
    // $('.dmk').hide();
    // $('.ttcn').hide();
    // $('.dgct').hide();
    // $('.thoat').hide();
    // $('.boss').hide();
    // $('.navcus').hide();
})

function HienThiDangKi() {
    $('.dn').hide();
    $('#DangNhap').load('../dangki.html');
}