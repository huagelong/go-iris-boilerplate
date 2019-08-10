$(function () {
    // DOM 选项卡
    $('#domTabStrip').kendoTabStrip({
        animation: false
    });
    // 图标选项卡
    $('#iconTabStrip').kendoTabStrip({
        animation: false,
        dataSource: [
            {
                text: '中国商标',
                spriteCssClass: 'fas fa-copyright',
                content:
                    '<i class="fab fa-qq"></i>QQ<br>' +
                    '<i class="fab fa-weixin"></i>微信<br>' +
                    '<i class="fab fa-alipay"></i>支付宝<br>' +
                    '<i class="fab fa-renren"></i>人人网<br>' +
                    '<i class="fab fa-weibo"></i>微博<br>' +
                    '<i class="fab fa-tencent-weibo"></i>腾讯微博<br>' +
                    '<i class="fab fa-zhihu"></i>知乎'
            },
            {
                text: '前端技能',
                spriteCssClass: 'fab fa-github',
                content:
                    '<i class="fab fa-html5"></i>HTML 5<br>' +
                    '<i class="fab fa-css3-alt"></i>CSS 3<br>' +
                    '<i class="fab fa-js-square"></i>JavaScript<br>' +
                    '<i class="fab fa-angular"></i>Angular<br>' +
                    '<i class="fab fa-react"></i>React<br>' +
                    '<i class="fab fa-vuejs"></i>Vue'
            },
            {
                text: '浏览器',
                spriteCssClass: 'fas fa-globe',
                content:
                    '<i class="fab fa-edge"></i>Edge<br>' +
                    '<i class="fab fa-internet-explorer"></i>Internet Explorer<br>' +
                    '<i class="fab fa-firefox"></i>Firefox<br>' +
                    '<i class="fab fa-chrome"></i>Chrome<br>' +
                    '<i class="fab fa-opera"></i>Opera<br>' +
                    '<i class="fab fa-safari"></i>Safari'
            }
        ],
        dataTextField: 'text',
        dataSpriteCssClass: 'spriteCssClass',
        dataContentField: 'content',
        value: '中国商标'
    });
    // 图片选项卡
    $('#imageTabStrip').kendoTabStrip({
        animation: false,
        dataSource: [
            {
                text: '防守方',
                imageUrl: 'img/IKKI.png',
                content:
                    '<img src="img/temp/Aries.png" alt="">穆<br>' +
                    '<img src="img/temp/Taurus.png" alt="">阿鲁迪巴<br>' +
                    '<img src="img/temp/Leo.png" alt="">艾欧里亚<br>' +
                    '<img src="img/temp/Virgo.png" alt="">沙加<br>' +
                    '<img src="img/temp/Libra.png" alt="">童虎<br>' +
                    '<img src="img/temp/Scorpion.png" alt="">米罗<br>' +
                    '<img src="img/temp/Sagittarius.png" alt="">艾俄洛斯'
            },
            {
                text: '进攻方',
                imageUrl: 'img/avatar.png',
                content:
                    '<img src="img/temp/Gemini.png" alt="">撒加<br>' +
                    '<img src="img/temp/Cancer.png" alt="">迪斯马斯克<br>' +
                    '<img src="img/temp/Capricorn.png" alt="">修罗<br>' +
                    '<img src="img/temp/Aquarius.png" alt="">卡妙<br>' +
                    '<img src="img/temp/Picses.png" alt="">阿布罗狄'
            }
        ],
        dataTextField: 'text',
        dataImageUrlField: 'imageUrl',
        dataContentField: 'content',
        value: '防守方'
    });
    // 下方选项卡
    $('#bottomTabStrip').kendoTabStrip({
        animation: false,
        tabPosition: 'bottom'
    });
    // 左侧选项卡
    $('#leftTabStrip').kendoTabStrip({
        animation: false,
        tabPosition: 'left'
    });
    // 右侧选项卡
    $('#rightTabStrip').kendoTabStrip({
        animation: false,
        tabPosition: 'right'
    });
    // 滚动选项卡
    $('#scrollTabStrip').kendoTabStrip({
        animation: false,
        dataSource: [
            {
                text: '穆',
                imageUrl: 'img/temp/Aries.png',
                content: '白羊座黄金圣斗士'
            },
            {
                text: '阿鲁迪巴',
                imageUrl: 'img/temp/Taurus.png',
                content: '金牛座黄金圣斗士'
            },
            {
                text: '撒加',
                imageUrl: 'img/temp/Gemini.png',
                content: '双子座黄金圣斗士'
            },
            {
                text: '迪斯马斯克',
                imageUrl: 'img/temp/Cancer.png',
                content: '巨蟹座黄金圣斗士'
            },
            {
                text: '艾欧里亚',
                imageUrl: 'img/temp/Leo.png',
                content: '狮子座黄金圣斗士'
            },
            {
                text: '沙加',
                imageUrl: 'img/temp/Virgo.png',
                content: '处女座黄金圣斗士'
            },
            {
                text: '童虎',
                imageUrl: 'img/temp/Libra.png',
                content: '天秤座黄金圣斗士'
            },
            {
                text: '米罗',
                imageUrl: 'img/temp/Scorpion.png',
                content: '天蝎座黄金圣斗士'
            },
            {
                text: '艾俄洛斯',
                imageUrl: 'img/temp/Sagittarius.png',
                content: '射手座黄金圣斗士'
            },
            {
                text: '修罗',
                imageUrl: 'img/temp/Capricorn.png',
                content: '山羊座黄金圣斗士'
            },
            {
                text: '卡妙',
                imageUrl: 'img/temp/Aquarius.png',
                content: '水瓶座黄金圣斗士'
            },
            {
                text: '阿布罗狄',
                imageUrl: 'img/temp/Picses.png',
                content: '双鱼座黄金圣斗士'
            }
        ],
        dataTextField: 'text',
        dataImageUrlField: 'imageUrl',
        dataContentField: 'content',
        value: '穆',
        scrollable: {
            distance: 100
        }
    });
    // Ajax 选项卡
    $('#ajaxTabStrip').kendoTabStrip({
        animation: false,
        contentUrls: [
            'resource/page.html',
            'resource/grid.xlsx',
            'resource/grid.pdf'
        ]
    });
    // 自定义选项卡
    $('#customTabStrip').kendoTabStrip({
        animation: false
    });
    tipMsg($('.fa-question-circle'), '提示说明', 'top');
    // 选项卡新增
    $('#newTabStrip').kendoTabStrip({
        animation: false
    });
    // 选项卡关闭
    var closeTabStrip = $('#closeTabStrip').kendoTabStrip({
        animation: false
    }).data('kendoTabStrip');
    closeTabStrip.tabGroup.on('click', '.fa-times-circle', function (e) {
        closeTabStrip.remove($(e.target).closest('.k-item'));
        closeTabStrip.select(0);
    });
    // 选项卡拖放排序
    var sortTabStrip = $('#sortTabStrip').kendoTabStrip({
        animation: false
    }).data('kendoTabStrip');
    $('#sortTabStrip ul.k-tabstrip-items').kendoSortable({
        container: '#sortTabStrip ul.k-tabstrip-items',
        filter: 'li.k-item',
        axis: 'x',
        cursor: 'move',
        hint: function (e) {
            return $('<div class="k-widget k-header k-tabstrip"><ul class="k-tabstrip-items k-reset"><li class="k-item k-state-active k-tab-on-top">' + e.html() + '</li></ul></div>');
        },
        start: function (e) {
            sortTabStrip.select(e.item);
        },
        change: function (e) {
            var reference = sortTabStrip.tabGroup.children().eq(e.newIndex);
            if (e.oldIndex < e.newIndex) {
                sortTabStrip.insertAfter(e.item, reference);
            } else {
                sortTabStrip.insertBefore(e.item, reference);
            }
        },
        placeholder: function (e) {
            return e.clone().css({
                'opacity': .3,
                'border': '1px dashed #666'
            });
        },
        end: function (e) {
            sortTabStrip.activateTab(e.item);
        }
    });
});

// 选项卡新增
function addTabStrip() {
    var newTabStrip = $('#newTabStrip').data('kendoTabStrip');
    newTabStrip.insertBefore(
        [{
            text: '<i class="fas fa-file"></i>页面 ' + (newTabStrip.items().length - 1),
            content: '页面 ' + (newTabStrip.items().length - 1) + ' 内容',
            encoded: false
        }],
        newTabStrip.tabGroup.children().eq(-1)
    ).select(newTabStrip.items().length - 2);
}