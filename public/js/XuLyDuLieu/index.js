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
                $(".fi1").append("<h3>Thời gian còn lại:<span class='thoigianconlai'></span></h3>")
                var res = result[0].DacTa.split(",");
                var dacta = res[0];
                $(".fi1").append("<p>" + dacta + "</p>")
                $(".fi1").append("<p>Giá hiện tại:<span class='giatien'>4K</span></p>")
                $(".fi1").append("<p>Click để đấu giá</p>");
                $("#allitem").append("<div class='clearfix'></div>")
                for (var i = 1; i < result.length; i++) {
                    let temp = i + 1;
                    let msp = result[i].MaSanPham;
                    $("#allitem").append("<section class='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid s" + temp + "' onclick='ChiTiet(" + msp + ")' ></section>");
                    $(".s" + temp + "").append("<figure class='effect-oscar f" + temp + "'></figure>")
                    $(".f" + temp + "").append("<img src=" + result[i].HinhDaiDien + " class='img-responsive' width='100%'/>");
                    $(".f" + temp + "").append("<figcaption class='fi" + temp + "'></figcaption>");
                    $(".fi" + temp + "").append("<h3>" + result[i].TenSanPham + "</h3>")
                    $(".fi" + temp + "").append("<h3>Thời gian còn lại:<span class='thoigianconlai'></span></h3>")
                    var res = result[i].DacTa.split(",");
                    var dacta = res[0];
                    $(".fi" + temp + "").append(`<p>${dacta}</p>`)
                    $(".fi" + temp + "").append("<p>Giá hiện tại:<span class='giatien'>4K</span></p>")
                    $(".fi" + temp + "").append("<p>Click để đấu giá</p>");
                }
                var XuatGiay = (n) => {
                    $(".thoigianconlai").text(n);
                }
                var count = 10;
                var countdown = setInterval(function () {
                    if (count === 0)
                        clearInterval(countdown)
                    XuatGiay(count);
                    count--;
                    console.log(count);
                }, 1000);
                countdown;
            }
        })
    })
})

function ChiTiet(msp) {
    $("main").empty();
    $('.anchodgct').empty();
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
            $('.chitiet2').append(`<div class="chutoty">Thời gian kết thúc:<span class="thoigianconlai">00:10:00</span></div>`);
            $('.chitiet2').append(`<div class="chutoty">Giá bạn đặt:<input type="text" name="giadat" id="giatdat" size="100"></div><br>`);
            $('.chitiet2').append(`<button type="button" name="btnDaugia" onclick='DauGia();' class="btn btn-success">Đấu giá<span class="glyphicon glyphicon-ok"></span></button>`);
            $('.r2').append(`<div class="col-xs-12 col-sm-12 col-md-8 ttsp"></div>`)
            $('.ttsp').append(`<section class='section'><h4>Thông tin sản phẩm.</h4></section>`);
            $('.section').append(`<p>${kq.DacTa}</p>`);
            $('.section').append(`<p><strong>Loại</strong><br/>${kq.TenLoaiSanPham}</p>`);
            $('.w2').append(`<img src="${kq.DuongDan}/1.jpg" />`);
            $('.w2').append(`<img src="${kq.DuongDan}/2.jpg" />`);
            $("input[name='giadat']").TouchSpin({
                verticalbuttons: true
            });
        }
    })
}

function DauGia() {

}