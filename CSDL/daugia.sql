/*
Navicat MySQL Data Transfer

Source Server         : QLHS
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : daugia

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-04-30 10:58:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cthd
-- ----------------------------
DROP TABLE IF EXISTS `cthd`;
CREATE TABLE `cthd` (
  `MaHD` int(255) NOT NULL,
  `IDSP` int(255) NOT NULL,
  `Soluong` int(255) DEFAULT NULL,
  `GiaDau` int(255) DEFAULT NULL,
  PRIMARY KEY (`MaHD`,`IDSP`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cthd
-- ----------------------------
INSERT INTO `cthd` VALUES ('1', '1', '2', '60000');
INSERT INTO `cthd` VALUES ('1', '2', '1', '70000');
INSERT INTO `cthd` VALUES ('2', '1', '1', '120000');
INSERT INTO `cthd` VALUES ('2', '2', '1', '70000');

-- ----------------------------
-- Table structure for hd
-- ----------------------------
DROP TABLE IF EXISTS `hd`;
CREATE TABLE `hd` (
  `MaHD` int(255) NOT NULL AUTO_INCREMENT,
  `NgayLap` date DEFAULT NULL,
  `TongSoLuong` int(255) DEFAULT NULL,
  `TongGiaTri` int(255) DEFAULT NULL,
  `DaThanhToan` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaHD`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of hd
-- ----------------------------
INSERT INTO `hd` VALUES ('1', '2018-04-30', '3', '130000', '0');
INSERT INTO `hd` VALUES ('2', '2018-04-29', '2', '190000', '1');

-- ----------------------------
-- Table structure for sanpham
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham` (
  `ID` int(255) NOT NULL AUTO_INCREMENT,
  `TenSP` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ChiTietSP` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GiaBanDau` int(255) DEFAULT NULL,
  `GiaChuan` int(255) DEFAULT NULL,
  `SoLuongTon` int(255) DEFAULT NULL,
  `SoLuongDaBan` int(255) DEFAULT NULL,
  `HinhAnh` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `PK_SP` (`ID`) USING HASH
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES ('1', 'Balo', 'San pham chat luong cao', '1000', '60000', '10', '3', null);
INSERT INTO `sanpham` VALUES ('2', 'Giay', 'San pham ngoai nhap', '1000', '70000', '10', '2', null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `loai` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `PK_U` (`ID`) USING HASH
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'thien', '123456', '1');
INSERT INTO `user` VALUES ('2', 'thanh', '123456', '0');
INSERT INTO `user` VALUES ('3', 'thang', '123456', '0');
