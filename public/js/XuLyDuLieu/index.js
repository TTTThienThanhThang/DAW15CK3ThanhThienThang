$(document).ready(function () {
    $(window).on("load", function () {
        if (sessionStorage.DangNhap == null) {
            $('.dmk').hide();
            $('.ttcn').hide();
            $('.dgct').hide();
            $('.thoat').hide();
            $('#trangcuaboss').hide();
            $('.navcus').hide();
        } else {
            const temp = JSON.parse(sessionStorage.DangNhap);
            if (temp.MaLoaiTaiKhoan != 3) {
                $("#trangcuaboss").hide();
                $('#TenHienThi').text(temp.TenHienThi);
            }
            if (temp.MaLoaiTaiKhoan == 3) {
                $('#trangcuaboss').show();
                $('.dmk').hide();
                $('.ttcn').hide();
                $('.dgct').hide();
            }
            $('.dn').hide();
        }
        $("#allitem").empty();
        $.ajax({
            type: "GET",
            url: "/allitem",
            success: (data) => {
                var result = data.kq;
                let msp = result[0].MaSanPham;
                $("#allitem").append("<section class='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid s1' onclick='ChiTiet(" + msp + " )' ></section>");
                $(".s1").append("<figure class='effect-oscar f1'></figure>")
                $(".f1").append("<img src=" + result[0].HinhDaiDien + " class='img-responsive' width='100%'/>");
                $(".f1").append("<figcaption class='fi1'></figcaption>");
                $(".fi1").append("<h3>" + result[0].TenSanPham + "</h3>")
                $(".fi1").append("<h3>Thời gian còn lại:<span class='thoigianconlai tgcl0'></span></h3>")
                var res = result[0].DacTa.split(",");
                var dacta = res[0];
                $(".fi1").append("<p>" + dacta + "</p>")
                $(".fi1").append("<p>Giá hiện tại:<span class='giatien gt0'>4K</span></p>")
                $.ajax({
                    type: "GET",
                    url: "/giadauhientai/" + msp,
                    success: (data) => {
                        var kq = data.kq;
                        if (kq.MaTinhTrangPhienDauGia == 1) {
                            $('.tgcl0').text("0");
                        } else {
                            var thoigianbatdau = kq.ThoiGianBatDau;
                            var thoigiandau = parseInt(kq.ThoiGianDau);
                            ChayGiay(thoigianbatdau, thoigiandau, 0, kq.MaPhienDauGia);
                        }
                        $(".gt0").text(kq.GiaHienTai + "k")
                    }
                })
                $(".fi1").append("<p>Click để đấu giá</p>");
                $("#allitem").append("<div class='clearfix'></div>")
                for (let i = 1; i < result.length; i++) {
                    let temp = i + 1;
                    let msp = result[i].MaSanPham;
                    $("#allitem").append("<section class='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid s" + temp + "' onclick='ChiTiet(" + msp + ")' ></section>");
                    $(".s" + temp).append("<figure class='effect-oscar f" + temp + "'></figure>")
                    $(".f" + temp).append("<img src=" + result[i].HinhDaiDien + " class='img-responsive' width='100%'/>");
                    $(".f" + temp).append("<figcaption class='fi" + temp + "'></figcaption>");
                    $(".fi" + temp).append("<h3>" + result[i].TenSanPham + "</h3>")
                    $(".fi" + temp).append("<h3>Thời gian còn lại:<span class='thoigianconlai tgcl" + i + "'></span></h3>")
                    var res = result[i].DacTa.split(",");
                    var dacta = res[0];
                    $(".fi" + temp).append(`<p>${dacta}</p>`)
                    $(".fi" + temp).append("<p>Giá hiện tại:<span class='giatien gt" + i + " '>4K</span></p>")
                    $.ajax({
                        type: "GET",
                        url: "/giadauhientai/" + msp,
                        success: (data) => {
                            var kq = data.kq;
                            if (kq.MaTinhTrangPhienDauGia == 1) {
                                $('.tgcl' + i).text("0");
                            } else {
                                var thoigianbatdau = kq.ThoiGianBatDau;
                                var thoigiandau = parseInt(kq.ThoiGianDau);
                                ChayGiay(thoigianbatdau, thoigiandau, i, kq.MaPhienDauGia);
                            }
                            $(".gt" + i).text(kq.GiaHienTai + "k");
                        }
                    })
                    $(".fi" + temp).append("<p>Click để đấu giá</p>");
                }
            }
        })
    })
})
var XuatGiay = (i, n) => {
    $(".tgcl" + i).text(n);
}

function ChayGiay(thoigianbatdau, thoigiandau, i, phiendaugia) {
    var a = thoigianbatdau.split(" "); //lay thoi gian bat dau
    var a1 = a[1].split(":"); //cat chuoi
    var tgbd = a1[0] * 60 * 60 + a1[1] * 60 + a1[2] * 1; //chuyen doi ve giay
    var day = new Date(); //lay thoi gian hien tai
    var tght = day.getHours() * 60 * 60 + day.getMinutes() * 60 + day.getSeconds(); //chuyen ve giay 
    var count = thoigiandau - (tght - tgbd); //thoi gian dau con lai = thoi gian dau trong csdl - thoi gian troi qua
    var countdown = setInterval(function () {
        if (count <= 0) { //neu het thoi gian dau gia
            $.ajax({ //gui request len server de server dieu chinh tinh trang phien dau gia
                type: "GET",
                url: "/updatephiendau/" + phiendaugia,
                success: (data) => {
                    console.log(data.kq);
                }
            })
            clearInterval(countdown)
        }
        XuatGiay(i, count);
        count--;
    }, 1000);
    countdown;
}

function ChiTiet(msp) {
    $("main").empty();
    $.ajax({
        type: "GET",
        url: "/chitiet/" + msp,
        success: (data) => {
            var kq = data.kq;
            $("main").append("<div class='work-details w2'></div>");
            $(".w2").append("<div class='row r2'></div>");
            $('.r2').append(`<div class="col-xs-12 col-sm-12 col-md-4 c"></div>`);
            $('.c').append("<header role='work-title' class='chitiet2'></header>");
            $('.chitiet2').append(`<h2>${kq.TenSanPham}</h2>`);
            $('.chitiet2').append(`<div class="chutoty">Giá hiện tại:<span class="giatien">4K</span></div>`);
            $('.chitiet2').append(`<div class="chutoty">Thời gian kết thúc:<span class="thoigianconlai tgclc ">00:10:00</span></div>`);
            $('.chitiet2').append(`<div class="chutoty">Giá bạn đặt:<input type="text" class="giadat" name="giadat" id="giatdat" size="100"></div>`);
            $.ajax({
                type: "GET",
                url: "/giadauhientai/" + msp,
                success: (data) => {
                    var kq = data.kq;
                    if (kq.MaTinhTrangPhienDauGia == 1) {
                        $('.tgclc').text("0");
                    }
                    if (kq.MaTinhTrangPhienDauGia != 1) {
                        var thoigianbatdau = kq.ThoiGianBatDau;
                        var thoigiandau = parseInt(kq.ThoiGianDau);
                        ChayGiay(thoigianbatdau, thoigiandau, "c", kq.MaPhienDauGia);
                    }
                    $(".giatien").text(kq.GiaHienTai + "k");
                    $(".giadat").val(kq.GiaHienTai);
                    $.ajax({
                        type: "GET",
                        url: "/laythamso",
                        success: (data) => {
                            var kq = data.kq;
                            sessionStorage.ThamSo = JSON.stringify(kq);
                        }
                    })
                    const thamso = JSON.parse(sessionStorage.ThamSo);
                    $("input[name='giadat']").TouchSpin({
                        min: kq.GiaHienTai,
                        max: 10000000,
                        step: thamso[0].GiaTri,
                        postfix: 'k'
                    });
                }
            })
            $('.chitiet2').append(`<div>*phải là bội số của 10</div>`)
            $('.chitiet2').append(`<button type="button" name="btnDaugia" onclick='DauGia(${msp});' class="btn btn-success">Đấu giá<span class="glyphicon glyphicon-ok"></span></button>`);
            $('.r2').append(`<div class="col-xs-12 col-sm-12 col-md-8 ttsp"></div>`)
            $('.ttsp').append(`<section class='section'><h4>Thông tin sản phẩm.</h4></section>`);
            $('.section').append(`<p>${kq.DacTa}</p>`);
            $('.section').append(`<p><strong>Loại</strong><br/>${kq.TenLoaiSanPham}</p>`);
            $('.w2').append(`<img src="${kq.DuongDan}/1.jpg" />`);
            $('.w2').append(`<img src="${kq.DuongDan}/2.jpg" />`);
        }
    })
}

function DauGia(msp) {
    if (sessionStorage.DangNhap == null) {
        alert("Hãy đăng nhập để thực hiện chức năng này");
        return;
    }
    $.ajax({
        type: "GET",
        url: "/giadauhientai/" + msp,
        success: (data) => {
            var kq = data.kq;
            if (kq.MaTinhTrangPhienDauGia == 1) {
                alert("Phiên đấu giá đã kết thúc")
                return;
            }
            var a = $('.giatien').text().split("k");
            var giadat = $('.giadat').val();
            if (giadat <= parseInt(a[0])) {
                alert("Vui lòng nhập giá lớn hơn giá hiện tại");
                return;
            }
            const dangnhap = JSON.parse(sessionStorage.DangNhap);
            var phiendaugia = kq.MaPhienDauGia;
            var mataikhoan = dangnhap.MaTaiKoan;
            $.ajax({
                type: "POST",
                url: "/themvaophieudaugia",
                data: {
                    'mataikhoan': mataikhoan,
                    'phiendaugia': phiendaugia,
                    'giadat': giadat
                },
                success: (data) => {
                    var maphieudaugia = data.maphieudaugia;
                    const thamso = JSON.parse(sessionStorage.ThamSo);
                    var thamsocong = thamso[1].GiaTri * 1 + kq.ThoiGianDau * 1;
                    $.ajax({
                        type: "POST",
                        url: "/themvaophiendaugia",
                        data: {
                            'maphieudauthang': maphieudaugia,
                            'giadat': giadat,
                            'maphiendaugia': phiendaugia,
                            'thamsocong': thamsocong
                        },
                        success: (data) => {
                            $('.giatien').text(giadat + "k");
                            alert(data.kq);
                        }
                    })
                }
            })
        }
    })
}