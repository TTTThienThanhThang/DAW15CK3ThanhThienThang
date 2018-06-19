function TrangCuaBoss() {
    $("body").empty();
    $("body").load("../../admin.html");
}

function TrangChu() {
    window.location.href = "../../";
}

function TaiKhoan() {
    sessionStorage.removeItem("Loai");
    sessionStorage.removeItem("SuaThamSo");
    sessionStorage.removeItem("SuaThoiGian");
    $('form').hide();
    $('.dulieuthemxoasua').empty();
    $('.dulieuhienthi').empty();
    $.ajax({
        type: "GET",
        url: "/admin/taikhoan",
        success: (data) => {
            var kq = data.tk;
            $('.dulieuhienthi').append(`<table class="table table-bordered"></table>`);
            $('.table').append(`<thead style="background:#5BC0DE"></thead>`);
            $('thead').append(`<tr class="head"><tr>`);
            $('.head').append(`<th>Mã TK</th>`)
            $('.head').append(`<th>Tên tài khoản</th>`)
            $('.head').append(`<th>Tên hiển thị</th>`)
            $('.head').append(`<th>Email</th>`)
            $('.head').append(`<th>Số điện thoại</th>`)
            $('.head').append(`<th>Địa chỉ</th>`)
            $('.head').append(`<th>Loại tài khoản</th>`)
            $('.head').append(`<th>Thay đổi loại tài khoản</th>`)
            $('.table').append(`<tbody></tbody>`);
            for (var i = 0; i < kq.length; i++) {
                $('tbody').append(`<tr class="body${i}"><tr>`);
                $(`.body${i}`).append(`<th>${kq[i].MaTaiKoan}</th>`)
                $(`.body${i}`).append(`<td>${kq[i].TenDangNhap}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].TenHienThi}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].Email}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].DienThoai}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].DiaChi}</td>`)
                $(`.body${i}`).append(`<td class="tenloai${kq[i].MaTaiKoan}">${kq[i].TenLoaiTaiKhoan}</td>`)
                if (kq[i].MaLoaiTaiKhoan == 3) {
                    $(`.body${i}`).append(`<td>---</td>`)
                }
                if (kq[i].MaLoaiTaiKhoan != 3) {
                    $(`.body${i}`).append(`<td style="color:blue" class="pointer" onclick="ThayDoiLoaiTaiKhoan(${kq[i].MaTaiKoan},${kq[i].MaLoaiTaiKhoan});">Chọn</td>`)
                }
            }
        }
    })
}

function ThayDoiLoaiTaiKhoan(mtk, maloai) {
    $('.dulieuthemxoasua').empty();
    $.ajax({
        type: 'GET',
        url: '/admin/laythongtinloaitaikhoan',
        success: (data) => {
            $('.dulieuthemxoasua').append(`<div class="col-sm-2 ipthaydoiloaitaikhoan"><div>`)
            $('.ipthaydoiloaitaikhoan').append(`<select class="form-control slltk" name="slLoaiTaiKhoan" id="slLoaiTaiKhoan"></select>`);
            var kq = data.kq;
            for (var i = 0; i < kq.length; i++) {
                if (kq[i].MaLoaiTaiKhoan == maloai)
                    $('.slltk').append(`<option value="${kq[i].MaLoaiTaiKhoan}" selected="selected">${kq[i].TenLoaiTaiKhoan}</option>`)
                else {
                    $('.slltk').append(`<option value="${kq[i].MaLoaiTaiKhoan}">${kq[i].TenLoaiTaiKhoan}</option>`)
                }
            }
            $('.dulieuthemxoasua').append(`<button type="button" name="btnThayDoiLoaiTaiKhoan" class="btn btn-success" id="btnThayDoiLoaiTaiKhoan" onclick="ThucHienThayDoiLoaiTaiKhoan(${mtk},${maloai})">Sửa</button>`);
        }
    })
}

function ThucHienThayDoiLoaiTaiKhoan(mtk, maloai) {
    var slvalue = $('#slLoaiTaiKhoan').val();
    if (sessionStorage.Loai != null) {
        maloai = sessionStorage.Loai;
    }
    if (slvalue == maloai) {
        alert("K có gì thay đổi");
    } else {
        $.ajax({
            type: "post",
            url: "/admin/thaydoiloai",
            data: {
                'mataikhoan': mtk,
                'loai': slvalue
            },
            success: (data) => {
                var tenloai = $('#slLoaiTaiKhoan :selected').text();
                sessionStorage.Loai = slvalue;
                $(`.tenloai${mtk}`).text(tenloai);
                alert(data.kq);
            }
        })
    }
}

function SanPham() {
    sessionStorage.removeItem("Loai");
    sessionStorage.removeItem("SuaThamSo");
    sessionStorage.removeItem("SuaThoiGian");
    $('.dulieuthemxoasua').empty();
    $('.dulieuhienthi').empty();
    $('form').show();
    $("input[name='ipThoiGianDau']").TouchSpin({
        min: 1,
        max: 86000,
        step: 1
    });
    $("input[name='ipGiaSanPham']").TouchSpin({
        min: 1,
        max: 10000000,
        step: 1
    });
    $.ajax({
        type: "GET",
        url: "/admin/sanpham",
        success: (data) => {
            var kq = data.sp;
            $('.dulieuhienthi').append(`<table class="table table-bordered"></table>`);
            $('.table').append(`<thead style="background:#D9534F"></thead>`);
            $('thead').append(`<tr class="head"><tr>`);
            $('.head').append(`<th>Mã sản phẩm</th>`)
            $('.head').append(`<th>Tên sản phẩm</th>`)
            $('.head').append(`<th>Mô tả</th>`)
            $('.head').append(`<th>Hình đại diện</th>`)
            $('.head').append(`<th>Loại</th>`)
            $('.table').append(`<tbody></tbody>`);
            for (var i = 0; i < kq.length; i++) {
                $('tbody').append(`<tr class="body${i}"><tr>`);
                $(`.body${i}`).append(`<th>${kq[i].MaSanPham}</th>`)
                $(`.body${i}`).append(`<td>${kq[i].TenSanPham}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].DacTa}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].HinhDaiDien}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].TenLoaiSanPham}</td>`)

            }
        }
    })
    $.ajax({
        type: "GET",
        url: "/admin/layloaisanpham",
        success: (data) => {
            var kq = data.kq;
            for (var i = 0; i < kq.length; i++) {
                $('#slLoaiSP').append(`<option value="${kq[i].MaLoaiSanPham}">${kq[i].TenLoaiSanPham}</option>`)
            }
        }
    })

}

function ThemSanPham() {
    var tensanpham = $('#ipTenSanPham').val();
    if (tensanpham == "" || tensanpham.length < 3) {
        alert("Tên sản phẩm không được để trống hoặc quá ngắn");
        return;
    }
    var mota = $('#Mota').val();
    if (mota == "" || mota.length < 10) {
        alert("Mô tả quá ngắn hoặc thiếu mô tả");
        return;
    }
    var hinh = $('#txtHinhDaiDien').val();
    if (hinh == "") {
        alert("Chưa có hình đại diện");
        return;
    }
    var thoigiandau = $('#ipThoiGianDau').val();
    var giasp = $('#ipGiaSanPham').val();
    var loaisp = $('#slLoaiSP').val();
    $.ajax({
        type: "POST",
        url: "/admin/themsanpham",
        data: {
            'tensanpham': tensanpham,
            'thoigiandau': thoigiandau,
            'giasanpham': giasp,
            'loaisanpham': loaisp,
            'hinhdaidien': hinh,
            'mota': mota
        },
        success: (data) => {
            alert(data.kq)
        }
    })

}

function PhienDauGia() {
    sessionStorage.removeItem("Loai");
    sessionStorage.removeItem("SuaThamSo");
    sessionStorage.removeItem("SuaThoiGian");
    $('form').hide();
    $('.dulieuthemxoasua').empty();
    $('.dulieuhienthi').empty();
    $.ajax({
        type: "GET",
        url: "/admin/phiendaugia",
        success: (data) => {
            var kq = data.pdg;
            $('.dulieuhienthi').append(`<table class="table table-bordered"></table>`);
            $('.table').append(`<thead style="background:#5CB85C"></thead>`);
            $('thead').append(`<tr class="head"><tr>`);
            $('.head').append(`<th>Mã phiên đấu</th>`)
            $('.head').append(`<th>Mã sản phẩm</th>`)
            $('.head').append(`<th>Thời gian bắt đầu</th>`)
            $('.head').append(`<th>Thời gian đấu</th>`)
            $('.head').append(`<th>Giá thấp nhất</th>`)
            $('.head').append(`<th>Giá hiện tại</th>`)
            $('.head').append(`<th>Mã phiêu đấu thắng</th>`)
            $('.head').append(`<th>Tình trạng</th>`)
            $('.head').append(`<th>Sửa thời gian đấu</th>`)
            $('.table').append(`<tbody></tbody>`);
            for (var i = 0; i < kq.length; i++) {
                $('tbody').append(`<tr class="body${i}"><tr>`);
                $(`.body${i}`).append(`<th>${kq[i].MaPhienDauGia}</th>`)
                $(`.body${i}`).append(`<td>${kq[i].MaSanPham}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].ThoiGianBatDau}</td>`)
                $(`.body${i}`).append(`<td class="giatri${kq[i].MaPhienDauGia}">${kq[i].ThoiGianDau}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].GiaThapNhat}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].GiaHienTai}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].MaPhieuDauThang}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].TenTinhTrangPhienDauGia}</td>`)
                if (kq[i].MaTinhTrangPhienDauGia == 1) {
                    $(`.body${i}`).append(`<td>---</td>`)
                }
                if (kq[i].MaTinhTrangPhienDauGia != 1) {
                    $(`.body${i}`).append(`<td style="color:blue" class="pointer" onclick="SuaThoiGianDau(${kq[i].MaPhienDauGia},${kq[i].ThoiGianDau})">Chọn</td>`)
                }
            }
        }
    })
}

function SuaThoiGianDau(maphien, giatri) {
    $('.dulieuthemxoasua').empty();
    $('.dulieuthemxoasua').append(`<div class="col-sm-2 ipsuathoigian"><div>`)
    $('.ipsuathoigian').append(`<input type="text" name="suathoigian" id="suathoigian" value="${giatri}">`);
    $('.dulieuthemxoasua').append(`<button type="button" name="btnSuaThoiGian" class="btn btn-success" id="btnSuaThoiGian" onclick="ThucHienSuaThoiGian(${maphien},${giatri})">Sửa</button>`);
    $("input[name='suathoigian']").TouchSpin({
        min: 1,
        max: 86000,
        step: 1
    });

}

function ThucHienSuaThoiGian(maphien, giatri) {
    var tg = $('#suathoigian').val();
    if (sessionStorage.SuaThoiGian != null) {
        giatri = sessionStorage.SuaThoiGian;
    }
    if (tg == giatri) {
        alert("K có gì thay đổi");
    } else {
        $.ajax({
            type: "post",
            url: "/admin/suathoigian",
            data: {
                'maphien': maphien,
                'thoigiansua': tg
            },
            success: (data) => {
                $(`.giatri${maphien}`).text(tg);
                sessionStorage.SuaThoiGian = tg;
                alert(data.kq);
            }
        })
    }
}

function PhieuDauGia() {
    sessionStorage.removeItem("Loai");
    sessionStorage.removeItem("SuaThamSo");
    sessionStorage.removeItem("SuaThoiGian");
    $('form').hide();
    $('.dulieuthemxoasua').empty();
    $('.dulieuhienthi').empty();
    $.ajax({
        type: "GET",
        url: "/admin/phieudaugia",
        success: (data) => {
            var kq = data.phieudg;
            $('.dulieuhienthi').append(`<table class="table table-bordered"></table>`);
            $('.table').append(`<thead style="background: #F0AD4E"></thead>`);
            $('thead').append(`<tr class="head"><tr>`);
            $('.head').append(`<th>Mã phiếu đấu</th>`)
            $('.head').append(`<th>Mã phiên đấu</th>`)
            $('.head').append(`<th>Mã tài khoản</th>`)
            $('.head').append(`<th>Giá đấu</th>`)
            $('.head').append(`<th>Tình trạng</th>`)
            $('.table').append(`<tbody></tbody>`);
            for (var i = 0; i < kq.length; i++) {
                $('tbody').append(`<tr class="body${i}"><tr>`);
                $(`.body${i}`).append(`<th>${kq[i].MaPhieuDauGia}</th>`)
                $(`.body${i}`).append(`<td>${kq[i].MaPhienDauGia}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].MaTaiKhoan}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].GiaDau}</td>`)
                $(`.body${i}`).append(`<td>${kq[i].TenTrinhTrangPhieuDauGia}</td>`)
            }
        }
    })
}

function ThamSo() {
    sessionStorage.removeItem("Loai");
    sessionStorage.removeItem("SuaThamSo");
    sessionStorage.removeItem("SuaThoiGian");
    $('form').hide();
    $('.dulieuthemxoasua').empty();
    $('.dulieuhienthi').empty();
    $.ajax({
        type: "GET",
        url: "/admin/thamso",
        success: (data) => {
            var kq = data.ts;
            $('.dulieuhienthi').append(`<table class="table table-bordered"></table>`);
            $('.table').append(`<thead style="background: #337AB7"></thead>`);
            $('thead').append(`<tr class="head"><tr>`);
            $('.head').append(`<th>Mã tham số</th>`)
            $('.head').append(`<th>Tên tham số</th>`)
            $('.head').append(`<th>Giá trị</th>`)
            $('.head').append(`<th>Sửa tham số</th>`)
            $('.table').append(`<tbody></tbody>`);
            for (var i = 0; i < kq.length; i++) {
                $('tbody').append(`<tr class="body${i}"><tr>`);
                $(`.body${i}`).append(`<th>${kq[i].MaThamSo}</th>`)
                $(`.body${i}`).append(`<td>${kq[i].TenThamSo}</td>`)
                $(`.body${i}`).append(`<td class="giatri${kq[i].MaThamSo}">${kq[i].GiaTri}</td>`)
                $(`.body${i}`).append(`<td style="color:blue" class="pointer" onclick="SuaThamSo(${kq[i].MaThamSo},${kq[i].GiaTri})">Chọn</td>`)
            }
        }
    })
}

function SuaThamSo(mts, gt) {
    $('.dulieuthemxoasua').empty();
    $('.dulieuthemxoasua').append(`<div class="col-sm-2 ipsuathamso"><div>`)
    $('.ipsuathamso').append(`<input type="text" name="suathamso" id="suathamso" value="${gt}">`);
    $('.dulieuthemxoasua').append(`<button type="button" name="btnSuaThamSo" class="btn btn-success" id="btnSuaThamSo" onclick="ThucHienSuaThamSo(${mts},${gt})">Sửa</button>`);
    $("input[name='suathamso']").TouchSpin({
        min: 1,
        max: 100,
        step: 1
    });
}

function ThucHienSuaThamSo(mts, gt) {
    var giatrisua = $('#suathamso').val();
    if (sessionStorage.SuaThamSo != null) {
        gt = sessionStorage.SuaThamSo;
    }
    if (giatrisua == gt) {
        alert("K có gì thay đổi")
    } else {
        $.ajax({
            type: "post",
            url: "/admin/suathamso",
            data: {
                'mts': mts,
                'gt': giatrisua
            },
            success: (data) => {
                $(`.giatri${mts}`).text(giatrisua);
                sessionStorage.SuaThamSo = giatrisua;
                alert(data.kq);
            }
        })
    }
}