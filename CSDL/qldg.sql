-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 19, 2018 at 03:54 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qldg`
--

-- --------------------------------------------------------

--
-- Table structure for table `hinh`
--

DROP TABLE IF EXISTS `hinh`;
CREATE TABLE IF NOT EXISTS `hinh` (
  `MaHinh` int(11) NOT NULL AUTO_INCREMENT,
  `DuongDan` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaSanPham` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaHinh`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `hinh`
--

INSERT INTO `hinh` (`MaHinh`, `DuongDan`, `MaSanPham`) VALUES(1, 'images/sanpham/1', 1);
INSERT INTO `hinh` (`MaHinh`, `DuongDan`, `MaSanPham`) VALUES(2, 'images/sanpham/2', 2);
INSERT INTO `hinh` (`MaHinh`, `DuongDan`, `MaSanPham`) VALUES(3, 'images/sanpham/3', 3);
INSERT INTO `hinh` (`MaHinh`, `DuongDan`, `MaSanPham`) VALUES(4, 'images/sanpham/4', 4);

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

DROP TABLE IF EXISTS `loaisanpham`;
CREATE TABLE IF NOT EXISTS `loaisanpham` (
  `MaLoaiSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiSanPham` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaLoaiSanPham`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`MaLoaiSanPham`, `TenLoaiSanPham`) VALUES(1, 'Giày');
INSERT INTO `loaisanpham` (`MaLoaiSanPham`, `TenLoaiSanPham`) VALUES(2, 'Ba lô');
INSERT INTO `loaisanpham` (`MaLoaiSanPham`, `TenLoaiSanPham`) VALUES(3, 'Đồng hồ');
INSERT INTO `loaisanpham` (`MaLoaiSanPham`, `TenLoaiSanPham`) VALUES(4, 'Ví');

-- --------------------------------------------------------

--
-- Table structure for table `loaitaikhoan`
--

DROP TABLE IF EXISTS `loaitaikhoan`;
CREATE TABLE IF NOT EXISTS `loaitaikhoan` (
  `MaLoaiTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiTaiKhoan` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaLoaiTaiKhoan`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `loaitaikhoan`
--

INSERT INTO `loaitaikhoan` (`MaLoaiTaiKhoan`, `TenLoaiTaiKhoan`) VALUES(1, 'Thường');
INSERT INTO `loaitaikhoan` (`MaLoaiTaiKhoan`, `TenLoaiTaiKhoan`) VALUES(2, 'Vip');
INSERT INTO `loaitaikhoan` (`MaLoaiTaiKhoan`, `TenLoaiTaiKhoan`) VALUES(3, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `phiendaugia`
--

DROP TABLE IF EXISTS `phiendaugia`;
CREATE TABLE IF NOT EXISTS `phiendaugia` (
  `MaPhienDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `MaSanPham` int(11) DEFAULT NULL,
  `ThoiGianBatDau` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ThoiGianDau` int(50) DEFAULT NULL,
  `GiaThapNhat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GiaHienTai` bigint(255) DEFAULT NULL,
  `MaPhieuDauThang` int(11) DEFAULT NULL,
  `MaTinhTrangPhienDauGia` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaPhienDauGia`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `phiendaugia`
--

INSERT INTO `phiendaugia` (`MaPhienDauGia`, `MaSanPham`, `ThoiGianBatDau`, `ThoiGianDau`, `GiaThapNhat`, `GiaHienTai`, `MaPhieuDauThang`, `MaTinhTrangPhienDauGia`) VALUES(1, 1, '17/06/2018 13:32:00', 500, '1', 3400000, 3, 1);
INSERT INTO `phiendaugia` (`MaPhienDauGia`, `MaSanPham`, `ThoiGianBatDau`, `ThoiGianDau`, `GiaThapNhat`, `GiaHienTai`, `MaPhieuDauThang`, `MaTinhTrangPhienDauGia`) VALUES(2, 2, '17/06/2018 13:20:30', 200, '1', 2700000, 5, 1);
INSERT INTO `phiendaugia` (`MaPhienDauGia`, `MaSanPham`, `ThoiGianBatDau`, `ThoiGianDau`, `GiaThapNhat`, `GiaHienTai`, `MaPhieuDauThang`, `MaTinhTrangPhienDauGia`) VALUES(3, 3, '17/06/2018 14:25:30', 3730, '1', 650, 21, 1);
INSERT INTO `phiendaugia` (`MaPhienDauGia`, `MaSanPham`, `ThoiGianBatDau`, `ThoiGianDau`, `GiaThapNhat`, `GiaHienTai`, `MaPhieuDauThang`, `MaTinhTrangPhienDauGia`) VALUES(4, 4, '17/06/2018 15:15:30', 86000, '1', 210, 18, 2);
INSERT INTO `phiendaugia` (`MaPhienDauGia`, `MaSanPham`, `ThoiGianBatDau`, `ThoiGianDau`, `GiaThapNhat`, `GiaHienTai`, `MaPhieuDauThang`, `MaTinhTrangPhienDauGia`) VALUES(7, 6, '19/6/2018 22:25:49', 3611, '1', 10, 22, 2);

-- --------------------------------------------------------

--
-- Table structure for table `phieudaugia`
--

DROP TABLE IF EXISTS `phieudaugia`;
CREATE TABLE IF NOT EXISTS `phieudaugia` (
  `MaPhieuDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `MaPhienDauGia` int(11) DEFAULT NULL,
  `MaTaiKhoan` int(11) DEFAULT NULL,
  `GiaDau` bigint(255) DEFAULT NULL,
  `MaTinhTrangPhieuDauGia` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaPhieuDauGia`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=FIXED;

--
-- Dumping data for table `phieudaugia`
--

INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(1, 1, 1, 2, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(2, 1, 2, 2700000, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(3, 1, 3, 3400000, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(4, 2, 1, 2, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(5, 2, 2, 2700000, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(6, 3, 1, 560, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(18, 4, 8, 210, 1);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(19, 3, 8, 640, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(20, 4, 9, 170, 1);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(21, 3, 9, 650, 2);
INSERT INTO `phieudaugia` (`MaPhieuDauGia`, `MaPhienDauGia`, `MaTaiKhoan`, `GiaDau`, `MaTinhTrangPhieuDauGia`) VALUES(22, 7, 8, 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE IF NOT EXISTS `sanpham` (
  `MaSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenSanPham` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaLoaiSanPham` int(11) DEFAULT NULL,
  `DacTa` text COLLATE utf8_unicode_ci,
  `HinhDaiDien` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaSanPham`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`MaSanPham`, `TenSanPham`, `MaLoaiSanPham`, `DacTa`, `HinhDaiDien`) VALUES(1, 'Giày thể thao NEAT: Xanh', 1, 'Hãy bước đi đầy tự tin, phong cách với Giày thể thao NEAT, một sản phẩm được may từ chất liệu cao cấp, bền nhẹ, dễ dàng phối đồ và mang lại cảm giác thoải mái, dễ chịu khi vận động. Đấu giá ngay!\r\n\r\nĐặc điểm sản phẩm:\r\n\r\n- Được làm từ vải chất lượng cao, bền nhẹ\r\n- Dễ dàng phối với hầu hết các loại trang phục\r\n- Cho bạn thoải mái vận động mà vẫn mang lại cảm giác dễ chịu cho đôi chân\r\n- Kích cỡ: 39-44', 'images/sanpham/giayneat.jpg');
INSERT INTO `sanpham` (`MaSanPham`, `TenSanPham`, `MaLoaiSanPham`, `DacTa`, `HinhDaiDien`) VALUES(2, 'Ba lô leo núi NEAT: Nâu / Xám', 2, 'Hãy thay đổi phong cách sống, với dòng sản phẩm ba-lô leo núi NEAT! Chỉ một chiếc túi là đủ cho mọi đồ dùng cá nhân của bạn trong một chuyến đi! Hãy khám phá thế giới theo phong cách mới cùng món phụ kiện này. Đấu giá ngay!\r\n\r\nBa lô leo núi NEAT: Nâu / Xám\r\nĐặc điểm kỹ thuật sản phẩm :\r\n\r\n- Làm bằng vải canvas\r\n- Kích thước 26 x 13 x 47 cm\r\n- Màu sắc: Nâu/Xám', 'images/sanpham/baloneat.jpg');
INSERT INTO `sanpham` (`MaSanPham`, `TenSanPham`, `MaLoaiSanPham`, `DacTa`, `HinhDaiDien`) VALUES(3, 'Đồng hồ đeo tay kỹ thuật số: Đen', 3, 'Hoàn thiện phong cách của bạn với đồng hồ đeo tay kỹ thuật số, thể thao này. Được thiết kế với độ bền và tính ứng dụng cao.\r\n\r\nĐồng hồ đeo tay kỹ thuật số màu đen này có mặt số hình cầu trắng và được thiết kế đơn giản mà cuốn hút, sang trọng\r\n- Chiều rộng: 4,5 cm.\r\n\r\n- Chiều dài: 24 cm.\r\n\r\n-Chống nước', 'images/sanpham/dongho.jpg');
INSERT INTO `sanpham` (`MaSanPham`, `TenSanPham`, `MaLoaiSanPham`, `DacTa`, `HinhDaiDien`) VALUES(4, 'Ví nam: Đen', 4, 'Ví thiết kế thông minh giữ tiền và thẻ của bạn, an toàn và có tổ chức.\r\n\r\n\r\n\r\nThông số kỹ thuật:\r\n\r\n- Nhãn hiệu: STROM\r\n- Chất liệu: PU\r\n- Khe để lưu trữ thẻ và hóa đơn\r\n- Kích thước: 11,5 x 9,5 cm', 'images/sanpham/vinam.jpg');
INSERT INTO `sanpham` (`MaSanPham`, `TenSanPham`, `MaLoaiSanPham`, `DacTa`, `HinhDaiDien`) VALUES(6, 'Sản phẩm tao mới thêm', 1, 'aaaaaaaaaaaaaaaaaaaaaaaâ,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://giayxuatkhauhn.com/wp-content/uploads/2017/07/giay-the-thao-adidas-AlphaBounce-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE IF NOT EXISTS `taikhoan` (
  `MaTaiKoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenDangNhap` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MatKhau` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TenHienThi` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DienThoai` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaLoaiTaiKhoan` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaTaiKoan`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`MaTaiKoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `Email`, `DienThoai`, `DiaChi`, `MaLoaiTaiKhoan`) VALUES(1, 'pocnghiepthang', '123', 'pocnghiepthang', 'pocnghiepthang@gmail.com', '094 149 60 96', '144/10A2 Điện Biên Phủ, Phường 25, Bình Thạnh, Hồ Chí Minh', 2);
INSERT INTO `taikhoan` (`MaTaiKoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `Email`, `DienThoai`, `DiaChi`, `MaLoaiTaiKhoan`) VALUES(2, 'phantanthanh', '123', 'phantanthanh', 'phantanthanh@gmail.com', '028 3915 6156', '2 Hải Triều, Bến Nghé, Quận 1, Hồ Chí Minh ', 2);
INSERT INTO `taikhoan` (`MaTaiKoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `Email`, `DienThoai`, `DiaChi`, `MaLoaiTaiKhoan`) VALUES(3, 'doanphuongminhthien', '123', 'doanphuongminhthien', 'doanphuongminhthien@gmail.com', '028 3835 3193', '227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh', 2);
INSERT INTO `taikhoan` (`MaTaiKoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `Email`, `DienThoai`, `DiaChi`, `MaLoaiTaiKhoan`) VALUES(4, 'admin', 'admin', 'admin', '', NULL, NULL, 3);
INSERT INTO `taikhoan` (`MaTaiKoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `Email`, `DienThoai`, `DiaChi`, `MaLoaiTaiKhoan`) VALUES(9, 'thienminh63997', '1', 'Thiên Đoàn Minh', NULL, NULL, '', 1);
INSERT INTO `taikhoan` (`MaTaiKoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `Email`, `DienThoai`, `DiaChi`, `MaLoaiTaiKhoan`) VALUES(8, 'thienminh6397', '1', 'Doan Minh', 'cobonla7537@gmail.com', '01645516783', '123 THD', 1);

-- --------------------------------------------------------

--
-- Table structure for table `thamso`
--

DROP TABLE IF EXISTS `thamso`;
CREATE TABLE IF NOT EXISTS `thamso` (
  `MaThamSo` int(11) NOT NULL AUTO_INCREMENT,
  `TenThamSo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GiaTri` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`MaThamSo`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `thamso`
--

INSERT INTO `thamso` (`MaThamSo`, `TenThamSo`, `GiaTri`) VALUES(1, 'BuocDau', 11);
INSERT INTO `thamso` (`MaThamSo`, `TenThamSo`, `GiaTri`) VALUES(2, 'ThoiGianCong', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tinhtrangphiendaugia`
--

DROP TABLE IF EXISTS `tinhtrangphiendaugia`;
CREATE TABLE IF NOT EXISTS `tinhtrangphiendaugia` (
  `MaTinhTrangPhienDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `TenTinhTrangPhienDauGia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaTinhTrangPhienDauGia`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tinhtrangphiendaugia`
--

INSERT INTO `tinhtrangphiendaugia` (`MaTinhTrangPhienDauGia`, `TenTinhTrangPhienDauGia`) VALUES(1, 'Đã Đấu Giá');
INSERT INTO `tinhtrangphiendaugia` (`MaTinhTrangPhienDauGia`, `TenTinhTrangPhienDauGia`) VALUES(2, 'Đang Đấu Giá');
INSERT INTO `tinhtrangphiendaugia` (`MaTinhTrangPhienDauGia`, `TenTinhTrangPhienDauGia`) VALUES(3, 'Chưa Đấu Giá');

-- --------------------------------------------------------

--
-- Table structure for table `tinhtrangphieudaugia`
--

DROP TABLE IF EXISTS `tinhtrangphieudaugia`;
CREATE TABLE IF NOT EXISTS `tinhtrangphieudaugia` (
  `MaTinhTrangPhieuDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `TenTrinhTrangPhieuDauGia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaTinhTrangPhieuDauGia`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `tinhtrangphieudaugia`
--

INSERT INTO `tinhtrangphieudaugia` (`MaTinhTrangPhieuDauGia`, `TenTrinhTrangPhieuDauGia`) VALUES(1, 'Đang Đấu Giá');
INSERT INTO `tinhtrangphieudaugia` (`MaTinhTrangPhieuDauGia`, `TenTrinhTrangPhieuDauGia`) VALUES(2, 'Đã Đấu Giá Xong');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
