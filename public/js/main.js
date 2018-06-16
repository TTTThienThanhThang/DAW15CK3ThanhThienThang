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
    const DangNhap = JSON.parse(sessionStorage.DangNhap);
    $('#DangNhap').load('../thongtinuser.html');
    setTimeout(function () {
        $('#ipTDN').val(DangNhap.TenDangNhap);
        $('#ipHoTen').val(DangNhap.TenHienThi);
        $('#ipEmail').val(DangNhap.Email);
        $('#ipSDT').val(DangNhap.DienThoai);
        $('#ipDiaChi').val(DangNhap.DiaChi);
        $('#ipLoaiTaiKhoan').val(DangNhap.TenLoaiTaiKhoan);
    }, 1000);

}

function HienThiDoiMatKhau() {
    $('#DangNhap').load('../doimatkhau.html');
}

function HienThiDangKi() {
    $('#DangNhap').load('../dangki.html');
}

function Thoat() {
    if (sessionStorage.DangNhap != null) {
        sessionStorage.removeItem("DangNhap");
        window.location.href = '../';
    }
}

function Home() {
    window.location.href = '../';
}