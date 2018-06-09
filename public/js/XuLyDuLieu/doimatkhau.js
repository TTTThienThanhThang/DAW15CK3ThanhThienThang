function DoiMatKhau() {
    const temp = JSON.parse(sessionStorage.DangNhap);
    var mkcu = fDMK.ipPW.value;
    if (mkcu == "") {
        alert("vui long nhap mat khau cu");
        return;
    }
    if (mkcu != temp.MatKhau) {
        alert("mat khau cu khong dung");
        return;
    }
    var mkm = fDMK.ipPWMoi.value;
    var mkm2 = fDMK.ipPWMoi2.value;
    if (mkm == "" || mkm2 == "") {
        alert("mat khau moi khong duoc de trong");
        return;
    }
    if (mkm != mkm2) {
        alert("mat khau lap lai khong dung");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/doimatkhau",
        data: {
            'mataikhoan': temp.MaTaiKoan,
            'mkm': mkm
        },
        success: (data) => {
            if (data.kq == 1) {
                alert("Doi mat khau thanh cong");
                temp.MatKhau = mkm;
                sessionStorage.DangNhap = JSON.stringify(temp);
            } else {
                alert("Doi mat khau that bai, vui long thu lai");
            }
        }
    })
}