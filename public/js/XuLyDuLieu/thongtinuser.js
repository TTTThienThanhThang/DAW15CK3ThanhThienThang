function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function ThayDoiThongTin() {
    const DangNhap = JSON.parse(sessionStorage.DangNhap);
    var hoten = fUser.ipHoTen.value;
    var email = fUser.ipEmail.value;
    if (validateEmail(email) == false) {
        alert("ban vua nhap khong phai email");
        return;
    }
    var sdt = fUser.ipSDT.value;
    var dc = fUser.ipDiaChi.value;
    var mail = DangNhap.Email; //mail session
    var dt = DangNhap.DienThoai; //dt session
    var dchi = DangNhap.DiaChi; //dia chi session
    if (mail == null) {
        mail = "";
    }
    if (dt == null) {
        dt = "";
    }
    if (dchi == null) {
        dchi == "";
    }
    if (hoten == DangNhap.TenHienThi && email == mail && sdt == dt && dc == dchi) {
        alert("khong co gi thay doi");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/thongtinuser",
        data: {
            'HoTen': hoten,
            'Email': email,
            'SDTh': sdt,
            'DCh': dc,
            'MaTaiKhoan': DangNhap.MaTaiKoan
        },
        success: (data) => {
            if (data.kq == 0) {
                alert("Cap nhat thong tin that bai");
            } else {
                alert("Cap nhat thong tin thanh cong");
                DangNhap.TenHienThi = hoten;
                DangNhap.Email = email;
                DangNhap.DienThoai = sdt;
                DangNhap.DiaChi = dc;
                sessionStorage.DangNhap = JSON.stringify(DangNhap);
                window.location.href = '../../'; //về trang chủ
            }
        }
    })
}