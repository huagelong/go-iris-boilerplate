$(function () {
    // 按钮工具栏
    $('#buttonToolBar').kendoToolBar({
        items: [
            {
                type: 'button',
                text: '按钮',
                click: function (e) {
                    alertMsgNoBtn('你点击了<strong class="theme-m">' + e.target.text() + '</strong>~', 'info');
                }
            },
            {
                type: 'button',
                text: '主按钮',
                primary: true,
                click: function (e) {
                    alertMsgNoBtn('你点击了<strong class="theme-m">' + e.target.text() + '</strong>~', 'info');
                }
            },
            {
                type: 'button',
                text: '带链接按钮',
                url: 'https://github.com/IKKI2000/'
            },
            {
                type: 'button',
                text: '带样式按钮',
                spriteCssClass: 'fas fa-grin-beam',
                click: function (e) {
                    alertMsgNoBtn('你点击了<strong class="theme-m">' + e.target.text() + '</strong>~', 'info');
                }
            },
            {
                type: 'button',
                text: '带属性按钮',
                attributes: { 'class': 'theme-s' },
                click: function (e) {
                    alertMsgNoBtn('你点击了<strong class="theme-m">' + e.target.text() + '</strong>~', 'info');
                }
            },
            {
                type: 'button',
                text: '带图标按钮',
                icon: 'star',
                click: function (e) {
                    alertMsgNoBtn('你点击了<strong class="theme-m">' + e.target.text() + '</strong>~', 'info');
                }
            },
            {
                type: 'button',
                text: '带图片按钮',
                imageUrl: 'img/IKKI.png',
                click: function (e) {
                    alertMsgNoBtn('你点击了<strong class="theme-m">' + e.target.text() + '</strong>~', 'info');
                }
            },
            {
                type: 'button',
                text: '禁用按钮',
                enable: false
            },
            {
                type: 'button',
                text: '隐藏按钮',
                hidden: true
            }
        ]
    });
    // 切换按钮工具栏
    $('#toggleToolBar').kendoToolBar({
        items: [
            {
                type: 'button',
                text: '切换按钮',
                togglable: true,
                toggle: function (e) {
                    alertMsgNoBtn('按钮处于<strong class="theme-m">' + (e.checked ? '选中' : '未选中') + '</strong>状态~', 'info');
                }
            },
            {
                type: 'button',
                text: '主切换按钮',
                primary: true,
                togglable: true,
                toggle: function (e) {
                    alertMsgNoBtn('按钮处于<strong class="theme-m">' + (e.checked ? '选中' : '未选中') + '</strong>状态~', 'info');
                }
            },
            {
                type: 'button',
                text: '带样式切换按钮',
                spriteCssClass: 'fas fa-grin-beam',
                togglable: true,
                toggle: function (e) {
                    alertMsgNoBtn('按钮处于<strong class="theme-m">' + (e.checked ? '选中' : '未选中') + '</strong>状态~', 'info');
                }
            },
            {
                type: 'button',
                text: '带属性切换按钮',
                attributes: { 'class': 'theme-s' },
                togglable: true,
                toggle: function (e) {
                    alertMsgNoBtn('按钮处于<strong class="theme-m">' + (e.checked ? '选中' : '未选中') + '</strong>状态~', 'info');
                }
            },
            {
                type: 'button',
                text: '带图标切换按钮',
                icon: 'star',
                togglable: true,
                toggle: function (e) {
                    alertMsgNoBtn('按钮处于<strong class="theme-m">' + (e.checked ? '选中' : '未选中') + '</strong>状态~', 'info');
                }
            },
            {
                type: 'button',
                text: '带图片切换按钮',
                imageUrl: 'img/IKKI.png',
                togglable: true,
                toggle: function (e) {
                    alertMsgNoBtn('按钮处于<strong class="theme-m">' + (e.checked ? '选中' : '未选中') + '</strong>状态~', 'info');
                }
            }
        ]
    });
    // 单选按钮组工具栏
    $('#groupToolBar').kendoToolBar({
        items: [
            {
                type: 'buttonGroup',
                buttons: [
                    {
                        text: '左对齐',
                        icon: 'align-left',
                        togglable: true,
                        group: 'align'
                    },
                    {
                        text: '居中对齐',
                        icon: 'align-center',
                        togglable: true,
                        selected: true,
                        group: 'align'
                    },
                    {
                        text: '右对齐',
                        icon: 'align-right',
                        togglable: true,
                        group: 'align'
                    }
                ]
            },
            {
                type: 'button',
                text: '左对齐',
                spriteCssClass: 'fas fa-align-left',
                togglable: true,
                group: 'group'
            },
            {
                type: 'button',
                text: '居中对齐',
                spriteCssClass: 'fas fa-align-center',
                togglable: true,
                selected: true,
                group: 'group'
            },
            {
                type: 'button',
                text: '右对齐',
                spriteCssClass: 'fas fa-align-right',
                togglable: true,
                group: 'group'
            }
        ]
    });
    // 多选按钮组工具栏
    $('#buttonGroupToolBar').kendoToolBar({
        items: [
            {
                type: 'buttonGroup',
                buttons: [
                    {
                        text: '粗体',
                        icon: 'bold',
                        togglable: true,
                        selected: true
                    },
                    {
                        text: '斜体',
                        icon: 'italic',
                        togglable: true
                    },
                    {
                        text: '下划线',
                        icon: 'underline',
                        togglable: true
                    }
                ]
            },
            {
                type: 'button',
                text: '粗体',
                spriteCssClass: 'fas fa-bold',
                togglable: true,
                selected: true
            },
            {
                type: 'button',
                text: '斜体',
                spriteCssClass: 'fas fa-italic',
                togglable: true
            },
            {
                type: 'button',
                text: '下划线',
                spriteCssClass: 'fas fa-underline',
                togglable: true
            }
        ]
    });
    // 菜单按钮工具栏
    $('#splitToolBar').kendoToolBar({
        items: [
            {
                type: 'splitButton',
                text: '字号',
                menuButtons: [
                    {
                        text: '8pt'
                    },
                    {
                        text: '10pt'
                    },
                    {
                        text: '12pt'
                    },
                    {
                        text: '14pt'
                    },
                    {
                        text: '18pt'
                    },
                    {
                        text: '24pt'
                    },
                    {
                        text: '36pt'
                    }
                ]
            },
            {
                type: 'splitButton',
                text: '浏览器',
                spriteCssClass: 'fas fa-globe',
                menuButtons: [
                    {
                        text: 'Edge',
                        spriteCssClass: 'fab fa-edge'
                    },
                    {
                        text: 'Internet Explorer',
                        spriteCssClass: 'fab fa-internet-explorer'
                    },
                    {
                        text: 'Firefox',
                        spriteCssClass: 'fab fa-firefox'
                    },
                    {
                        text: 'Chrome',
                        spriteCssClass: 'fab fa-chrome'
                    },
                    {
                        text: 'Opera',
                        spriteCssClass: 'fab fa-opera'
                    },
                    {
                        text: 'Safari',
                        spriteCssClass: 'fab fa-safari'
                    }
                ]
            },
            {
                type: 'splitButton',
                text: '表格操作',
                icon: 'table',
                menuButtons: [
                    {
                        text: '左侧插入列',
                        icon: 'table-column-insert-left'
                    },
                    {
                        text: '右侧插入列',
                        icon: 'table-column-insert-right'
                    },
                    {
                        text: '上面插入行',
                        icon: 'table-row-insert-above'
                    },
                    {
                        text: '下面插入行',
                        icon: 'table-row-insert-below'
                    },
                    {
                        text: '删除列',
                        icon: 'table-column-delete'
                    },
                    {
                        text: '删除行',
                        icon: 'table-row-delete'
                    },
                    {
                        text: '水平单元格合并',
                        icon: 'cells-merge-horizontally'
                    },
                    {
                        text: '垂直单元格合并',
                        icon: 'cells-merge-vertically'
                    },
                    {
                        text: '水平单元格拆分',
                        icon: 'cell-split-horizontally'
                    },
                    {
                        text: '垂直单元格拆分',
                        icon: 'cell-split-vertically'
                    }
                ]
            },
            {
                type: 'splitButton',
                text: '圣斗士',
                imageUrl: 'img/IKKI.png',
                menuButtons: [
                    {
                        text: '穆',
                        imageUrl: 'img/temp/Aries.png'
                    },
                    {
                        text: '阿鲁迪巴',
                        imageUrl: 'img/temp/Taurus.png'
                    },
                    {
                        text: '撒加',
                        imageUrl: 'img/temp/Gemini.png'
                    },
                    {
                        text: '迪斯马斯克',
                        imageUrl: 'img/temp/Cancer.png'
                    },
                    {
                        text: '艾欧里亚',
                        imageUrl: 'img/temp/Leo.png'
                    },
                    {
                        text: '沙加',
                        imageUrl: 'img/temp/Virgo.png'
                    },
                    {
                        text: '童虎',
                        imageUrl: 'img/temp/Libra.png'
                    },
                    {
                        text: '米罗',
                        imageUrl: 'img/temp/Scorpion.png'
                    },
                    {
                        text: '艾俄洛斯',
                        imageUrl: 'img/temp/Sagittarius.png'
                    },
                    {
                        text: '修罗',
                        imageUrl: 'img/temp/Capricorn.png'
                    },
                    {
                        text: '卡妙',
                        imageUrl: 'img/temp/Aquarius.png'
                    },
                    {
                        text: '阿布罗狄',
                        imageUrl: 'img/temp/Picses.png'
                    }
                ]
            }
        ]
    });
    // 折叠工具栏及分隔线
    $('#overflowToolBar').kendoToolBar({
        items: [
            {
                type: 'button',
                text: '永不折叠按钮左',
                overflow: 'never'
            },
            {
                type: 'button',
                text: '自动折叠按钮左'
            },
            {
                type: 'separator',
                overflow: 'never'
            },
            {
                type: 'button',
                text: '永不折叠按钮右',
                overflow: 'never'
            },
            {
                type: 'button',
                text: '自动折叠按钮右'
            },
            {
                type: 'button',
                text: '永远折叠按钮上',
                overflow: 'always'
            },
            {
                type: 'separator',
                overflow: 'always'
            },
            {
                type: 'button',
                text: '永远折叠按钮下',
                overflow: 'always'
            }
        ]
    });
    // 自定义工具栏
    $('#customToolBar').kendoToolBar({
        items: [
            {
                id: 'uid000',
                template: '<img class="rounded-circle" src="img/IKKI.png" alt="IKKI">'
            },
            {
                template: '<span class="d-none d-md-inline-block">IKKI</span>'
            },
            {
                type: 'separator',
                overflow: 'never'
            },
            {
                template: '<label class="d-none d-md-inline-block mr-n2 mb-0" for="search">搜索：</label>'
            },
            {
                template: '<input class="k-textbox w-100" id="search" type="text" placeholder="请输入...">'
            },
            {
                template: '<label class="d-none d-md-inline-block mr-n2 mb-0" for="filter">筛选：</label>'
            },
            {
                template: '<select class="w-100" id="filter"></select>'
            },
            {
                type: 'spacer'
            },
            {
                template: '<a class="k-button k-button-icontext k-state-selected" href="javascript:;"><span class="k-icon k-i-add"></span>新增</a>',
                overflowTemplate: '<a class="k-button k-button-icontext" href="javascript:;"><span class="k-icon k-i-add"></span>新增</a>'
            },
            {
                template: '<a class="k-button k-button-icontext theme-m-box" href="javascript:;"><span class="k-icon k-i-edit"></span>编辑</a>',
                overflowTemplate: '<a class="k-button k-button-icontext" href="javascript:;"><span class="k-icon k-i-edit"></span>编辑</a>'
            },
            {
                template: '<a class="k-button k-button-icontext" href="javascript:;"><span class="k-icon k-i-x"></span>删除</a>',
                overflowTemplate: '<a class="k-button k-button-icontext" href="javascript:;"><span class="k-icon k-i-x"></span>删除</a>'
            },
            {
                type: 'separator'
            },
            {
                template: '<a class="k-button k-button-icontext" href="javascript:;"><span class="fas fa-cut"></span>剪切</a>',
                overflowTemplate: '<a class="k-button k-button-icontext" href="javascript:;"><span class="fas fa-cut"></span>剪切</a>'
            },
            {
                template: '<a class="k-button k-button-icontext" href="javascript:;"><span class="fas fa-copy"></span>复制</a>',
                overflowTemplate: '<a class="k-button k-button-icontext" href="javascript:;"><span class="fas fa-copy"></span>复制</a>'
            },
            {
                template: '<a class="k-button k-button-icontext" href="javascript:;"><span class="fas fa-paste"></span>粘帖</a>',
                overflowTemplate: '<a class="k-button k-button-icontext" href="javascript:;"><span class="fas fa-paste"></span>粘帖</a>'
            }
        ]
    });
    // 筛选
    $('#filter').kendoDropDownList({
        dataSource: {
            data: [
                { text: '白羊座', value: '1' },
                { text: '金牛座', value: '2' },
                { text: '双子座', value: '3' },
                { text: '巨蟹座', value: '4' },
                { text: '狮子座', value: '5' },
                { text: '处女座', value: '6' },
                { text: '天秤座', value: '7' },
                { text: '天蝎座', value: '8' },
                { text: '射手座', value: '9' },
                { text: '山羊座', value: '10' },
                { text: '水瓶座', value: '11' },
                { text: '双鱼座', value: '12' }
            ]
        },
        optionLabel: "-= 请选择 =-",
        dataValueField: 'value',
        dataTextField: 'text'
    });
});