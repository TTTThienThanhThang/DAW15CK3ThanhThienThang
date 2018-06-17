/*
 Navicat Premium Data Transfer

 Source Server         : QLHS
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : qldg

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 17/06/2018 22:20:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hinh
-- ----------------------------
DROP TABLE IF EXISTS `hinh`;
CREATE TABLE `hinh`  (
  `MaHinh` int(11) NOT NULL AUTO_INCREMENT,
  `DuongDan` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `MaSanPham` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MaHinh`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hinh
-- ----------------------------
INSERT INTO `hinh` VALUES (1, 'images/sanpham/1', 1);
INSERT INTO `hinh` VALUES (2, 'images/sanpham/2', 2);
INSERT INTO `hinh` VALUES (3, 'images/sanpham/3', 3);
INSERT INTO `hinh` VALUES (4, 'images/sanpham/4', 4);

-- ----------------------------
-- Table structure for loaisanpham
-- ----------------------------
DROP TABLE IF EXISTS `loaisanpham`;
CREATE TABLE `loaisanpham`  (
  `MaLoaiSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiSanPham` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`MaLoaiSanPham`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loaisanpham
-- ----------------------------
INSERT INTO `loaisanpham` VALUES (1, 'Giày');
INSERT INTO `loaisanpham` VALUES (2, 'Ba lô');
INSERT INTO `loaisanpham` VALUES (3, 'Đồng hồ');
INSERT INTO `loaisanpham` VALUES (4, 'Ví');

-- ----------------------------
-- Table structure for loaitaikhoan
-- ----------------------------
DROP TABLE IF EXISTS `loaitaikhoan`;
CREATE TABLE `loaitaikhoan`  (
  `MaLoaiTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiTaiKhoan` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`MaLoaiTaiKhoan`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loaitaikhoan
-- ----------------------------
INSERT INTO `loaitaikhoan` VALUES (1, 'Thường');
INSERT INTO `loaitaikhoan` VALUES (2, 'Vip');
INSERT INTO `loaitaikhoan` VALUES (3, 'Admin');

-- ----------------------------
-- Table structure for phiendaugia
-- ----------------------------
DROP TABLE IF EXISTS `phiendaugia`;
CREATE TABLE `phiendaugia`  (
  `MaPhienDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `MaSanPham` int(11) NULL DEFAULT NULL,
  `ThoiGianBatDau` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `ThoiGianDau` int(50) NULL DEFAULT NULL,
  `GiaThapNhat` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `GiaHienTai` bigint(255) NULL DEFAULT NULL,
  `MaPhieuDauThang` int(11) NULL DEFAULT NULL,
  `MaTinhTrangPhienDauGia` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MaPhienDauGia`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of phiendaugia
-- ----------------------------
INSERT INTO `phiendaugia` VALUES (1, 1, '17/06/2018 13:32:00', 500, '1', 3400000, 3, 1);
INSERT INTO `phiendaugia` VALUES (2, 2, '17/06/2018 13:20:30', 200, '1', 2700000, 5, 1);
INSERT INTO `phiendaugia` VALUES (3, 3, '17/06/2018 14:25:30', 3660, '1', 630, 19, 2);
INSERT INTO `phiendaugia` VALUES (4, 4, '17/06/2018 21:59:30', 3810, '1', 90, 18, 2);

-- ----------------------------
-- Table structure for phieudaugia
-- ----------------------------
DROP TABLE IF EXISTS `phieudaugia`;
CREATE TABLE `phieudaugia`  (
  `MaPhieuDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `MaPhienDauGia` int(11) NULL DEFAULT NULL,
  `MaTaiKhoan` int(11) NULL DEFAULT NULL,
  `GiaDau` bigint(255) NULL DEFAULT NULL,
  `MaTinhTrangPhieuDauGia` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MaPhieuDauGia`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of phieudaugia
-- ----------------------------
INSERT INTO `phieudaugia` VALUES (1, 1, 1, 2, 2);
INSERT INTO `phieudaugia` VALUES (2, 1, 2, 2700000, 2);
INSERT INTO `phieudaugia` VALUES (3, 1, 3, 3400000, 2);
INSERT INTO `phieudaugia` VALUES (4, 2, 1, 2, 2);
INSERT INTO `phieudaugia` VALUES (5, 2, 2, 2700000, 2);
INSERT INTO `phieudaugia` VALUES (6, 3, 1, 560, 1);
INSERT INTO `phieudaugia` VALUES (18, 4, 8, 90, 1);
INSERT INTO `phieudaugia` VALUES (19, 3, 8, 630, 1);

-- ----------------------------
-- Table structure for sanpham
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham`  (
  `MaSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenSanPham` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `MaLoaiSanPham` int(11) NULL DEFAULT NULL,
  `DacTa` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `HinhDaiDien` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`MaSanPham`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES (1, 'Giày thể thao NEAT: Xanh', 1, 'Hãy bước đi đầy tự tin, phong cách với Giày thể thao NEAT, một sản phẩm được may từ chất liệu cao cấp, bền nhẹ, dễ dàng phối đồ và mang lại cảm giác thoải mái, dễ chịu khi vận động. Đấu giá ngay!\r\n\r\nĐặc điểm sản phẩm:\r\n\r\n- Được làm từ vải chất lượng cao, bền nhẹ\r\n- Dễ dàng phối với hầu hết các loại trang phục\r\n- Cho bạn thoải mái vận động mà vẫn mang lại cảm giác dễ chịu cho đôi chân\r\n- Kích cỡ: 39-44', 'images/sanpham/giayneat.jpg');
INSERT INTO `sanpham` VALUES (2, 'Ba lô leo núi NEAT: Nâu / Xám', 2, 'Hãy thay đổi phong cách sống, với dòng sản phẩm ba-lô leo núi NEAT! Chỉ một chiếc túi là đủ cho mọi đồ dùng cá nhân của bạn trong một chuyến đi! Hãy khám phá thế giới theo phong cách mới cùng món phụ kiện này. Đấu giá ngay!\r\n\r\nBa lô leo núi NEAT: Nâu / Xám\r\nĐặc điểm kỹ thuật sản phẩm :\r\n\r\n- Làm bằng vải canvas\r\n- Kích thước 26 x 13 x 47 cm\r\n- Màu sắc: Nâu/Xám', 'images/sanpham/baloneat.jpg');
INSERT INTO `sanpham` VALUES (3, 'Đồng hồ đeo tay kỹ thuật số: Đen', 3, 'Hoàn thiện phong cách của bạn với đồng hồ đeo tay kỹ thuật số, thể thao này. Được thiết kế với độ bền và tính ứng dụng cao.\r\n\r\nĐồng hồ đeo tay kỹ thuật số màu đen này có mặt số hình cầu trắng và được thiết kế đơn giản mà cuốn hút, sang trọng\r\n- Chiều rộng: 4,5 cm.\r\n\r\n- Chiều dài: 24 cm.\r\n\r\n-Chống nước', 'images/sanpham/dongho.jpg');
INSERT INTO `sanpham` VALUES (4, 'Ví nam: Đen', 4, 'Ví thiết kế thông minh giữ tiền và thẻ của bạn, an toàn và có tổ chức.\r\n\r\n\r\n\r\nThông số kỹ thuật:\r\n\r\n- Nhãn hiệu: STROM\r\n- Chất liệu: PU\r\n- Khe để lưu trữ thẻ và hóa đơn\r\n- Kích thước: 11,5 x 9,5 cm', 'images/sanpham/vinam.jpg');

-- ----------------------------
-- Table structure for taikhoan
-- ----------------------------
DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE `taikhoan`  (
  `MaTaiKoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenDangNhap` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `MatKhau` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `TenHienThi` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `DienThoai` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `DiaChi` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `MaLoaiTaiKhoan` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MaTaiKoan`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of taikhoan
-- ----------------------------
INSERT INTO `taikhoan` VALUES (1, 'pocnghiepthang', '123', 'pocnghiepthang', 'pocnghiepthang@gmail.com', '094 149 60 96', '144/10A2 Điện Biên Phủ, Phường 25, Bình Thạnh, Hồ Chí Minh', 1);
INSERT INTO `taikhoan` VALUES (2, 'phantanthanh', '123', 'phantanthanh', 'phantanthanh@gmail.com', '028 3915 6156', '2 Hải Triều, Bến Nghé, Quận 1, Hồ Chí Minh ', 2);
INSERT INTO `taikhoan` VALUES (3, 'doanphuongminhthien', '123', 'doanphuongminhthien', 'doanphuongminhthien@gmail.com', '028 3835 3193', '227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh', 2);
INSERT INTO `taikhoan` VALUES (4, 'admin', 'admin', 'admin', '', NULL, NULL, 3);
INSERT INTO `taikhoan` VALUES (9, 'thienminh63997', '1', 'Thiên Đoàn Minh', NULL, NULL, '', 1);
INSERT INTO `taikhoan` VALUES (8, 'thienminh6397', '1', 'Doan Minh', 'cobonla7537@gmail.com', '01645516783', '123 THD', 1);

-- ----------------------------
-- Table structure for thamso
-- ----------------------------
DROP TABLE IF EXISTS `thamso`;
CREATE TABLE `thamso`  (
  `MaThamSo` int(11) NOT NULL AUTO_INCREMENT,
  `TenThamSo` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `GiaTri` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`MaThamSo`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thamso
-- ----------------------------
INSERT INTO `thamso` VALUES (1, 'BuocDau', 10);
INSERT INTO `thamso` VALUES (2, 'ThoiGianCong', 10);

-- ----------------------------
-- Table structure for tinhtrangphiendaugia
-- ----------------------------
DROP TABLE IF EXISTS `tinhtrangphiendaugia`;
CREATE TABLE `tinhtrangphiendaugia`  (
  `MaTinhTrangPhienDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `TenTinhTrangPhienDauGia` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`MaTinhTrangPhienDauGia`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tinhtrangphiendaugia
-- ----------------------------
INSERT INTO `tinhtrangphiendaugia` VALUES (1, 'Đã Đấu Giá');
INSERT INTO `tinhtrangphiendaugia` VALUES (2, 'Đang Đấu Giá');
INSERT INTO `tinhtrangphiendaugia` VALUES (3, 'Chưa Đấu Giá');

-- ----------------------------
-- Table structure for tinhtrangphieudaugia
-- ----------------------------
DROP TABLE IF EXISTS `tinhtrangphieudaugia`;
CREATE TABLE `tinhtrangphieudaugia`  (
  `MaTinhTrangPhieuDauGia` int(11) NOT NULL AUTO_INCREMENT,
  `TenTrinhTrangPhieuDauGia` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`MaTinhTrangPhieuDauGia`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tinhtrangphieudaugia
-- ----------------------------
INSERT INTO `tinhtrangphieudaugia` VALUES (1, 'Đang Đấu Giá');
INSERT INTO `tinhtrangphieudaugia` VALUES (2, 'Đã Đấu Giá Xong');

SET FOREIGN_KEY_CHECKS = 1;
