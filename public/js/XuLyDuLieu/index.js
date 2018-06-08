$(document).ready(function () {
    $(window).on("load", function () {
        $('.dmk').hide();
        $('.ttcn').hide();
        $('.dgct').hide();
        $('.thoat').hide();
        $('#trangcuaboss').hide();
        $('.navcus').hide();
        $("#allitem").empty();
        $.ajax({
            type: "GET",
            url: "/allitem",
            success: (data) => {
                var result = data.kq;
                $("#allitem").append("<section class='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid s1' ></section>");
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
                    $("#allitem").append("<section class='col-xs-12 col-sm-6 col-md-6 col-lg-6 grid s" + temp + "' ></section>");
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