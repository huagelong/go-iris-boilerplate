$(function () {
    // DOM 菜单
    $('#domMenu').kendoMenu();
    // 图标菜单
    $('#iconMenu').kendoMenu({
        dataSource: [
            {
                text: '中国商标',
                spriteCssClass: 'fas fa-copyright',
                url: 'javascript:;',
                items: [
                    {
                        text: 'QQ',
                        spriteCssClass: 'fab fa-qq',
                        url: 'javascript:;'
                    },
                    {
                        text: '微信',
                        spriteCssClass: 'fab fa-weixin',
                        url: 'javascript:;'
                    },
                    {
                        text: '支付宝',
                        spriteCssClass: 'fab fa-alipay',
                        url: 'javascript:;'
                    },
                    {
                        text: '人人网',
                        spriteCssClass: 'fab fa-renren',
                        url: 'javascript:;'
                    },
                    {
                        text: '微博',
                        spriteCssClass: 'fab fa-weibo',
                        url: 'javascript:;'
                    },
                    {
                        text: '腾讯微博',
                        spriteCssClass: 'fab fa-tencent-weibo',
                        url: 'javascript:;'
                    },
                    {
                        text: '知乎',
                        spriteCssClass: 'fab fa-zhihu',
                        url: 'javascript:;'
                    }
                ]
            },
            {
                text: '前端技能',
                spriteCssClass: 'fab fa-github',
                url: 'javascript:;',
                items: [
                    {
                        text: 'HTML 5',
                        spriteCssClass: 'fab fa-html5',
                        url: 'javascript:;'
                    },
                    {
                        text: 'CSS 3',
                        spriteCssClass: 'fab fa-css3-alt',
                        url: 'javascript:;'
                    },
                    {
                        text: 'JavaScript',
                        spriteCssClass: 'fab fa-js-square',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Angular',
                        spriteCssClass: 'fab fa-angular',
                        url: 'javascript:;'
                    },
                    {
                        text: 'React',
                        spriteCssClass: 'fab fa-react',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Vue',
                        spriteCssClass: 'fab fa-vuejs',
                        url: 'javascript:;'
                    }
                ]
            },
            {
                text: '浏览器',
                spriteCssClass: 'fas fa-globe',
                url: 'javascript:;',
                items: [
                    {
                        text: 'Edge',
                        spriteCssClass: 'fab fa-edge',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Internet Explorer',
                        spriteCssClass: 'fab fa-internet-explorer',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Firefox',
                        spriteCssClass: 'fab fa-firefox',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Chrome',
                        spriteCssClass: 'fab fa-chrome',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Opera',
                        spriteCssClass: 'fab fa-opera',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Safari',
                        spriteCssClass: 'fab fa-safari',
                        url: 'javascript:;'
                    }
                ]
            }
        ]
    });
    // 图片菜单
    $('#imageMenu').kendoMenu({
        dataSource: [
            {
                text: '防守方',
                imageUrl: 'img/IKKI.png',
                url: 'javascript:;',
                items: [
                    {
                        text: '穆',
                        imageUrl: 'img/temp/Aries.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '阿鲁迪巴',
                        imageUrl: 'img/temp/Taurus.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '艾欧里亚',
                        imageUrl: 'img/temp/Leo.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '沙加',
                        imageUrl: 'img/temp/Virgo.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '童虎',
                        imageUrl: 'img/temp/Libra.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '米罗',
                        imageUrl: 'img/temp/Scorpion.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '艾俄洛斯',
                        imageUrl: 'img/temp/Sagittarius.png',
                        url: 'javascript:;'
                    }
                ]
            },
            {
                text: '进攻方',
                imageUrl: 'img/avatar.png',
                url: 'javascript:;',
                items: [
                    {
                        text: '撒加',
                        imageUrl: 'img/temp/Gemini.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '迪斯马斯克',
                        imageUrl: 'img/temp/Cancer.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '修罗',
                        imageUrl: 'img/temp/Capricorn.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '卡妙',
                        imageUrl: 'img/temp/Aquarius.png',
                        url: 'javascript:;'
                    },
                    {
                        text: '阿布罗狄',
                        imageUrl: 'img/temp/Picses.png',
                        url: 'javascript:;'
                    }
                ]
            }
        ]
    });
    // 垂直菜单
    $('#verticalMenu').kendoMenu({
        orientation: 'vertical'
    });
    // 滚动菜单
    $.fn.ajaxPost({
        ajaxUrl: menuUrl,
        succeed: function (res) {
            $('#scrollHorizontalMenu').kendoMenu({
                dataSource: res.data,
                scrollable: true
            });
            $('#scrollVerticalMenu').kendoMenu({
                orientation: 'vertical',
                dataSource: res.data,
                scrollable: true
            });
        }
    });
    // 右键菜单
    $('#contextMenu').kendoContextMenu({
        dataSource: [
            {
                text: '查看',
                spriteCssClass: 'fas fa-eye',
                url: 'javascript:;',
                items: [
                    {
                        text: '超大图标',
                        spriteCssClass: 'fas fa-image',
                        url: 'javascript:;'
                    },
                    {
                        text: '大图标',
                        spriteCssClass: 'fas fa-th-large',
                        url: 'javascript:;'
                    },
                    {
                        text: '小图标',
                        spriteCssClass: 'fas fa-th',
                        url: 'javascript:;'
                    },
                    {
                        text: '列表',
                        spriteCssClass: 'fas fa-list',
                        url: 'javascript:;'
                    },
                    {
                        text: '详细信息',
                        spriteCssClass: 'fas fa-bars',
                        url: 'javascript:;'
                    }
                ]
            },
            {
                text: '排序方式',
                spriteCssClass: 'fas fa-sort-amount-up',
                url: 'javascript:;',
                items: [
                    {
                        text: '递增',
                        spriteCssClass: 'fas fa-sort-alpha-up',
                        url: 'javascript:;'
                    },
                    {
                        text: '递减',
                        spriteCssClass: 'fas fa-sort-alpha-down',
                        url: 'javascript:;'
                    }
                ]
            },
            {
                text: '编辑',
                spriteCssClass: 'fas fa-edit',
                url: 'javascript:;'
            },
            {
                text: '打印',
                spriteCssClass: 'fas fa-print',
                url: 'javascript:;'
            },
            {
                text: '<hr>',
                encoded: false
            },
            {
                text: '剪切',
                spriteCssClass: 'fas fa-cut',
                url: 'javascript:;'
            },
            {
                text: '复制',
                spriteCssClass: 'fas fa-copy',
                url: 'javascript:;'
            },
            {
                text: '粘帖',
                spriteCssClass: 'fas fa-paste',
                url: 'javascript:;'
            },
            {
                text: '<hr>',
                encoded: false
            },
            {
                text: '删除',
                spriteCssClass: 'fas fa-trash-alt',
                url: 'javascript:;'
            },
            {
                text: '重命名',
                spriteCssClass: 'fas fa-i-cursor',
                url: 'javascript:;'
            },
            {
                text: '<hr>',
                encoded: false
            },
            {
                text: '新建',
                spriteCssClass: 'fas fa-magic',
                url: 'javascript:;',
                items: [
                    {
                        text: '文件夹',
                        spriteCssClass: 'fas fa-folder',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Microsoft Word 文档',
                        spriteCssClass: 'fas fa-file-word',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Microsoft Excel 文档',
                        spriteCssClass: 'fas fa-file-excel',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Microsoft PowerPoint 文档',
                        spriteCssClass: 'fas fa-file-powerpoint',
                        url: 'javascript:;'
                    },
                    {
                        text: 'Adobe PDF 文档',
                        spriteCssClass: 'fas fa-file-pdf',
                        url: 'javascript:;'
                    },
                    {
                        text: '文本文档',
                        spriteCssClass: 'fas fa-file-alt',
                        url: 'javascript:;'
                    },
                    {
                        text: '压缩文件',
                        spriteCssClass: 'fas fa-file-archive',
                        url: 'javascript:;'
                    },
                    {
                        text: '图片文件',
                        spriteCssClass: 'fas fa-file-image',
                        url: 'javascript:;'
                    },
                    {
                        text: '音频文件',
                        spriteCssClass: 'fas fa-file-audio',
                        url: 'javascript:;'
                    },
                    {
                        text: '视频文件',
                        spriteCssClass: 'fas fa-file-video',
                        url: 'javascript:;'
                    },
                    {
                        text: '代码文件',
                        spriteCssClass: 'fas fa-file-code',
                        url: 'javascript:;'
                    }
                ]
            },
            {
                text: '<hr>',
                encoded: false
            },
            {
                text: '属性',
                spriteCssClass: 'fas fa-file-alt',
                url: 'javascript:;'
            }
        ],
        target: '#contextMenuBox'
    });
    // Ajax 菜单
    $('#ajaxMenu').kendoMenu({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: menuUrl,
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'data'
            }
        }
    });
    // 菜单格式
    $('#dataTypeMenu').kendoMenu({
        dataSource: [
            {
                text: '普通菜单'
            },
            {
                text: '添加链接',
                url: 'https://github.com/IKKI2000/'
            },
            {
                text: '添加样式',
                cssClass: 'ikki-class k-state-disabled'
            },
            {
                text: '添加属性',
                attr: {
                    ikkiattr: 'ikki-value',
                    'ikki-attr': 'ikki-value'
                }
            },
            {
                text: '添加图标样式',
                spriteCssClass: 'fas fa-yin-yang'
            },
            {
                text: '添加图片及其属性',
                imageUrl: 'img/IKKI.png',
                imageAttr: {
                    width: '16px',
                    height: '16px',
                    alt: 'IKKI'
                }
            },
            {
                text: '<i class="fas fa-smile mr-1"></i><strong>添加格式</strong>',
                encoded: false
            },
            {
                text: '添加子菜单',
                items: [
                    {
                        text: '子菜单',
                        items: [
                            {
                                text: '孙菜单'
                            },
                            {
                                text: '孙菜单'
                            },
                            {
                                text: '孙菜单'
                            }
                        ]
                    },
                    {
                        text: '子菜单'
                    },
                    {
                        text: '子菜单'
                    }
                ]
            },
            {
                text: '添加内容及其属性',
                content: 'ikki-content',
                contentAttr: {
                    style: 'padding: 3rem;',
                    'ikki-attr': 'ikki-value'
                }
            },
            {
                text: '添加回调',
                select: function (e) {
                    alertMsgNoBtn('你触发了回调~', 'info');
                }
            }
        ]
    });
});