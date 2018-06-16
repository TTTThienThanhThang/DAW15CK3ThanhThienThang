function DangKi() {
    var user = fDangKi.ipTDN.value;
    if (user == "") {
        alert("Vui long nhap ten dang nhap");
        return;
    }
    var pass = fDangKi.ipPW.value;
    var passll = fDangKi.ipPWlaplai.value;
    if (pass != passll) {
        alert("Nhap lai mk khong dung");
        return;
    }
    var hoten = fDangKi.ipHoTen.value;
    if (hoten == "") {
        alert("Chua nhap ho ten");
        return;
    }
    var diachi = fDangKi.ipDiaChi.value;
    $.ajax({
        type: "POST",
        url: "/dangki",
        data: {
            user: user,
            pass: pass,
            hoten: hoten,
            diachi: diachi
        },
        success: (data) => {
            alert(data.kq);
            window.location.href = '../../'; //về trang chủ
        }
    })
}