function HienThiDangNhap() {
    $('#DangNhap').load('../login.html');
}

function HienThiDauGiaCuaTui() {
    $('#DangNhap').empty();
    $('.trangdaugiacuatui').empty();
    $('.anchodgct').empty();
    $('.trangdaugiacuatui').load('../daugiacuatui.html');
    const DangNhap = JSON.parse(sessionStorage.DangNhap); //luc dang nhap se tao session nay
    var mataikhoan = DangNhap.MaTaiKoan; //lay matai khoan
    $.ajax({ //gui request toi server
        type: "GET",
        url: "/daugiacuatui/" + mataikhoan, //duong dan, coi trong app->routes
        success: (data) => {
            var result = data.kq;
            for (let i = 0; i < result.length; i++) { //chay vong for voi ket qua tra ve
                var tc = 1; //dung de chay stt
                var ddg = 1; //dung de chay stt
                var matinhtrangphiendaugia = result[i].MaTinhTrangPhienDauGia; //kiem tra tinh trang phien dau gia: 1 dau gia ket thuc,2 dang dau gia, 3 chua dau gia
                var tensanpham = result[i].TenSanPham; //lay ten san pham
                var gia = result[i].GiaDau; //lay gia dau hien tai
                var msp = result[i].MaSanPham; //lay ma san pham
                if (matinhtrangphiendaugia == 1) { //neu tinh trang phien dau gia  == 1 tuc dau gia xong
                    var maphieudaugia = result[i].MaPhieuDauGia; //lay ma phieu dau gia
                    var maphieudauthang = result[i].MaPhieuDauThang; //lay ma phieu dau thang
                    if (maphieudaugia == maphieudauthang) { //neu maphieudaugia == maphieudauthang tuc user dang dang nhap co phan dau gia thanh cong
                        //tien hanh them vao phan dau gia thanh cong
                        $('.spdadaugiathanhcong').append(`<tr class='tc${i} pointer'></tr>`);
                        $('.tc' + i).append(`<th scope="row">${tc}</th>`);
                        $('.tc' + i).append(`<td onclick="ChiTiet(${msp})">${tensanpham}</td>`);
                        $('.tc' + i).append(`<td>${gia}</td>`);
                        tc++;
                    }
                } else { //nguoc lai thi chua dau gia xong, thuc hien hien thi cac phien dang dau gia cua user hien hanh
                    $('.spdangdaugia').append(`<tr onclick="ChiTiet(${msp})" class='ddg${i} pointer'></tr>`);
                    $('.ddg' + i).append(`<th scope="row">${ddg}</th>`);
                    $('.ddg' + i).append(`<td>${tensanpham}</td>`);
                    $('.ddg' + i).append(`<td>${gia}</td>`);
                    var giahientai = result[i].GiaHienTai;
                    $('.ddg' + i).append(`<td>${giahientai}</td>`);
                    $('.ddg' + i).append(`<td class="tgcl0"></td>`);
                    var thoigianbatdau = result[i].ThoiGianBatDau;
                    var thoigiandau = parseInt(result[i].ThoiGianDau);
                    ChayGiay(thoigianbatdau, thoigiandau, 0, result[i].MaPhienDauGia); //chay real time(thoi gian hien tai so voi thoi gian dau)//nam trong file index.js
                    ddg++;
                }
            }
        }
    })
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