function KiemTraDangNhap() {
    var user = flogin.ipUSERNAME.value;
    var pass = flogin.ipPassword.value;
    if (user == "" || pass == "") {
        alert("Chua nhap username hoac password");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/login",
        data: {
            user: user,
            pass: pass
        },
        success: (data) => {
            var kqua = data.kq;
            if (kqua == 0) {
                alert("Dang nhap that bai");
            } else {
                // localStorage.setItem("PhienDangNhap", JSON.stringify(kqua[0]));
                // const temp = JSON.parse(localStorage.PhienDangNhap)
                sessionStorage.DangNhap = JSON.stringify(kqua[0]);
                const temp = JSON.parse(sessionStorage.DangNhap);
                console.log(sessionStorage.DangNhap);
                window.location.href = '../../';
            }
        }
    })
}