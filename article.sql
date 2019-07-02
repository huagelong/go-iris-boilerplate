CREATE DATABASE article;
CREATE TABLE `article` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(100) DEFAULT '' COMMENT '文章标题',
`desc` varchar(255) DEFAULT '' COMMENT '简述',
`content` text COMMENT '内容',
`created_at` int(11) unsigned DEFAULT '0' COMMENT '新建时间',
`modified_at` int(11) unsigned DEFAULT '0' COMMENT '修改时间',
`is_delete` int(11) unsigned DEFAULT '0',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章管理';
