/*
Navicat MySQL Data Transfer

Source Server         : QLHS
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : daugia

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-04-26 22:42:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cthd
-- ----------------------------
DROP TABLE IF EXISTS `cthd`;
CREATE TABLE `cthd` (
  `MaHD` int(255) NOT NULL,
  `IDSP` int(255) NOT NULL,
  `GiaDau` int(255) DEFAULT NULL,
  PRIMARY KEY (`MaHD`,`IDSP`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cthd
-- ----------------------------

-- ----------------------------
-- Table structure for hd
-- ----------------------------
DROP TABLE IF EXISTS `hd`;
CREATE TABLE `hd` (
  `MaHD` int(255) NOT NULL AUTO_INCREMENT,
  `NgayLap` date DEFAULT NULL,
  `TongGiaTri` int(255) DEFAULT NULL,
  `DaThanhToan` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaHD`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of hd
-- ----------------------------

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sanpham
-- ----------------------------

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
