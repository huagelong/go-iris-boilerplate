$(function () {
    // DOM 折叠面板
    $('#domPanelBar').kendoPanelBar();
    // 图标折叠面板
    $('#iconPanelBar').kendoPanelBar({
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
    // 图片折叠面板
    $('#imagePanelBar').kendoPanelBar({
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
    // 单折叠面板
    $('#singlePanelBar').kendoPanelBar({
        expandMode: 'single'
    });
    // 自定义折叠面板
    $.fn.ajaxPost({
        ajaxUrl: 'json/tree.json',
        succeed: function (res) {
            $('#customPanelBar').kendoPanelBar({
                dataSource: res.data,
                template: '#= item.text #',
                loadOnDemand: false
            });
        }
    });
    // Ajax 折叠面板
    $('#ajaxPanelBar').kendoPanelBar({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: navUrl,
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
                data: 'data',
                model: {
                    children: 'items'
                }
            }
        }
    });
    // 折叠面板格式
    $('#dataTypePanelBar').kendoPanelBar({
        dataSource: [
            {
                text: '普通导航'
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
                text: '添加图标样式',
                spriteCssClass: 'fas fa-yin-yang'
            },
            {
                text: '添加图片',
                imageUrl: 'img/IKKI.png'
            },
            {
                text: '<i class="fas fa-smile mr-1"></i><strong>添加格式</strong>',
                encoded: false
            },
            {
                text: '添加子导航',
                items: [
                    {
                        text: '子导航',
                        items: [
                            {
                                text: '孙导航'
                            },
                            {
                                text: '孙导航'
                            },
                            {
                                text: '孙导航'
                            }
                        ]
                    },
                    {
                        text: '子导航'
                    },
                    {
                        text: '子导航'
                    }
                ]
            },
            {
                text: '添加内容',
                content: 'ikki-content'
            },
            {
                text: '添加内容链接',
                contentUrl: 'resource/page.html'
            }
        ]
    });
});

// 置空
function viewDetails(id) {}