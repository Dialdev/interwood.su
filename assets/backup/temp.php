#
# Материалы для профессиональной обработки древесины Database Dump
# MODX Version:1.4.6
# 
# Host: 
# Generation Time: 24-05-2019 16:18:51
# Server version: 5.5.62-0+deb8u1
# PHP Version: 7.0.32
# Database: `interwood`
# Description: 
#

# --------------------------------------------------------

#
# Table structure for table `modx_active_user_locks`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_active_user_locks`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_active_user_locks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sid` varchar(32) NOT NULL DEFAULT '',
  `internalKey` int(9) NOT NULL DEFAULT '0',
  `elementType` int(1) NOT NULL DEFAULT '0',
  `elementId` int(10) NOT NULL DEFAULT '0',
  `lasthit` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_element_id` (`elementType`,`elementId`,`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=879 DEFAULT CHARSET=utf8 COMMENT='Contains data about locked elements.';

#
# Dumping data for table `modx_active_user_locks`
#


# --------------------------------------------------------

#
# Table structure for table `modx_active_user_sessions`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_active_user_sessions`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_active_user_sessions` (
  `sid` varchar(32) NOT NULL DEFAULT '',
  `internalKey` int(9) NOT NULL DEFAULT '0',
  `lasthit` int(20) NOT NULL DEFAULT '0',
  `ip` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data about valid user sessions.';

#
# Dumping data for table `modx_active_user_sessions`
#

INSERT INTO `modx_active_user_sessions` VALUES ('t7urvfelqg7smabk8hnteo38u6','3','1558703931','5.164.24.160');


# --------------------------------------------------------

#
# Table structure for table `modx_active_users`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_active_users`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_active_users` (
  `sid` varchar(32) NOT NULL DEFAULT '',
  `internalKey` int(9) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '',
  `lasthit` int(20) NOT NULL DEFAULT '0',
  `action` varchar(10) NOT NULL DEFAULT '',
  `id` int(10) DEFAULT NULL,
  PRIMARY KEY (`sid`,`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data about last user action.';

#
# Dumping data for table `modx_active_users`
#

INSERT INTO `modx_active_users` VALUES ('q1stvvsndt5b1pagguiv8mtb73','3','dial','1554279421','67','2719');

INSERT INTO `modx_active_users` VALUES ('t7urvfelqg7smabk8hnteo38u6','3','dial','1558703931','93',NULL);

INSERT INTO `modx_active_users` VALUES ('b4248uce1cknsbjliomn9onb42','1','admin','1557296353','2',NULL);

INSERT INTO `modx_active_users` VALUES ('55rug3dbkkb7nmnkl1ocd6su47','2','seo','1550035192','67','2580');


# --------------------------------------------------------

#
# Table structure for table `modx_categories`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_categories`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL DEFAULT '',
  `rank` int(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='Categories to be used snippets,tv,chunks, etc';

#
# Dumping data for table `modx_categories`
#

INSERT INTO `modx_categories` VALUES ('11','Templates','0');

INSERT INTO `modx_categories` VALUES ('2','Js','0');

INSERT INTO `modx_categories` VALUES ('4','Manager and Admin','0');

INSERT INTO `modx_categories` VALUES ('5','Search','0');

INSERT INTO `modx_categories` VALUES ('6','Content','0');

INSERT INTO `modx_categories` VALUES ('7','Navigation','0');

INSERT INTO `modx_categories` VALUES ('8','Forms','0');

INSERT INTO `modx_categories` VALUES ('16','Users','0');

INSERT INTO `modx_categories` VALUES ('12','Include','0');

INSERT INTO `modx_categories` VALUES ('13','Обратный звонок','0');

INSERT INTO `modx_categories` VALUES ('14','SEO','0');

INSERT INTO `modx_categories` VALUES ('15','Ditto','0');

INSERT INTO `modx_categories` VALUES ('17','Получить помощь специалиста','0');

INSERT INTO `modx_categories` VALUES ('18','Gallery','0');

INSERT INTO `modx_categories` VALUES ('19','Login','0');

INSERT INTO `modx_categories` VALUES ('20','Заявка на регистрацию','0');

INSERT INTO `modx_categories` VALUES ('21','Отзывы','0');

INSERT INTO `modx_categories` VALUES ('22','add','0');

INSERT INTO `modx_categories` VALUES ('23','слайдер на странице товара ','0');


# --------------------------------------------------------

#
# Table structure for table `modx_document_groups`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_document_groups`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_document_groups` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `document_group` int(10) NOT NULL DEFAULT '0',
  `document` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_dg_id` (`document_group`,`document`),
  KEY `document` (`document`),
  KEY `document_group` (`document_group`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data used for access permissions.';

#
# Dumping data for table `modx_document_groups`
#


# --------------------------------------------------------

#
# Table structure for table `modx_documentgroup_names`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_documentgroup_names`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_documentgroup_names` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(245) NOT NULL DEFAULT '',
  `private_memgroup` tinyint(4) DEFAULT '0' COMMENT 'determine whether the document group is private to manager users',
  `private_webgroup` tinyint(4) DEFAULT '0' COMMENT 'determines whether the document is private to web users',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data used for access permissions.';

#
# Dumping data for table `modx_documentgroup_names`
#
#
# Материалы для профессиональной обработки древесины Database Dump
# MODX Version:1.4.6
# 
# Host: 
# Generation Time: 24-05-2019 16:19:31
# Server version: 5.5.62-0+deb8u1
# PHP Version: 7.0.32
# Database: `interwood`
# Description: 
#

# --------------------------------------------------------

#
# Table structure for table `modx_active_user_locks`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_active_user_locks`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_active_user_locks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sid` varchar(32) NOT NULL DEFAULT '',
  `internalKey` int(9) NOT NULL DEFAULT '0',
  `elementType` int(1) NOT NULL DEFAULT '0',
  `elementId` int(10) NOT NULL DEFAULT '0',
  `lasthit` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_element_id` (`elementType`,`elementId`,`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=879 DEFAULT CHARSET=utf8 COMMENT='Contains data about locked elements.';

#
# Dumping data for table `modx_active_user_locks`
#


# --------------------------------------------------------

#
# Table structure for table `modx_active_user_sessions`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_active_user_sessions`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_active_user_sessions` (
  `sid` varchar(32) NOT NULL DEFAULT '',
  `internalKey` int(9) NOT NULL DEFAULT '0',
  `lasthit` int(20) NOT NULL DEFAULT '0',
  `ip` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data about valid user sessions.';

#
# Dumping data for table `modx_active_user_sessions`
#

INSERT INTO `modx_active_user_sessions` VALUES ('t7urvfelqg7smabk8hnteo38u6','3','1558703971','5.164.24.160');


# --------------------------------------------------------

#
# Table structure for table `modx_active_users`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_active_users`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_active_users` (
  `sid` varchar(32) NOT NULL DEFAULT '',
  `internalKey` int(9) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '',
  `lasthit` int(20) NOT NULL DEFAULT '0',
  `action` varchar(10) NOT NULL DEFAULT '',
  `id` int(10) DEFAULT NULL,
  PRIMARY KEY (`sid`,`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data about last user action.';

#
# Dumping data for table `modx_active_users`
#

INSERT INTO `modx_active_users` VALUES ('q1stvvsndt5b1pagguiv8mtb73','3','dial','1554279421','67','2719');

INSERT INTO `modx_active_users` VALUES ('t7urvfelqg7smabk8hnteo38u6','3','dial','1558703971','93',NULL);

INSERT INTO `modx_active_users` VALUES ('b4248uce1cknsbjliomn9onb42','1','admin','1557296353','2',NULL);

INSERT INTO `modx_active_users` VALUES ('55rug3dbkkb7nmnkl1ocd6su47','2','seo','1550035192','67','2580');


# --------------------------------------------------------

#
# Table structure for table `modx_categories`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_categories`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL DEFAULT '',
  `rank` int(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='Categories to be used snippets,tv,chunks, etc';

#
# Dumping data for table `modx_categories`
#

INSERT INTO `modx_categories` VALUES ('11','Templates','0');

INSERT INTO `modx_categories` VALUES ('2','Js','0');

INSERT INTO `modx_categories` VALUES ('4','Manager and Admin','0');

INSERT INTO `modx_categories` VALUES ('5','Search','0');

INSERT INTO `modx_categories` VALUES ('6','Content','0');

INSERT INTO `modx_categories` VALUES ('7','Navigation','0');

INSERT INTO `modx_categories` VALUES ('8','Forms','0');

INSERT INTO `modx_categories` VALUES ('16','Users','0');

INSERT INTO `modx_categories` VALUES ('12','Include','0');

INSERT INTO `modx_categories` VALUES ('13','Обратный звонок','0');

INSERT INTO `modx_categories` VALUES ('14','SEO','0');

INSERT INTO `modx_categories` VALUES ('15','Ditto','0');

INSERT INTO `modx_categories` VALUES ('17','Получить помощь специалиста','0');

INSERT INTO `modx_categories` VALUES ('18','Gallery','0');

INSERT INTO `modx_categories` VALUES ('19','Login','0');

INSERT INTO `modx_categories` VALUES ('20','Заявка на регистрацию','0');

INSERT INTO `modx_categories` VALUES ('21','Отзывы','0');

INSERT INTO `modx_categories` VALUES ('22','add','0');

INSERT INTO `modx_categories` VALUES ('23','слайдер на странице товара ','0');


# --------------------------------------------------------

#
# Table structure for table `modx_document_groups`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_document_groups`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_document_groups` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `document_group` int(10) NOT NULL DEFAULT '0',
  `document` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_dg_id` (`document_group`,`document`),
  KEY `document` (`document`),
  KEY `document_group` (`document_group`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data used for access permissions.';

#
# Dumping data for table `modx_document_groups`
#


# --------------------------------------------------------

#
# Table structure for table `modx_documentgroup_names`
#

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `modx_documentgroup_names`;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

CREATE TABLE `modx_documentgroup_names` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(245) NOT NULL DEFAULT '',
  `private_memgroup` tinyint(4) DEFAULT '0' COMMENT 'determine whether the document group is private to manager users',
  `private_webgroup` tinyint(4) DEFAULT '0' COMMENT 'determines whether the document is private to web users',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Contains data used for access permissions.';

#
# Dumping data for table `modx_documentgroup_names`
#
