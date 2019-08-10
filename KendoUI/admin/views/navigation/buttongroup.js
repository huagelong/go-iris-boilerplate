$(function () {
    // DOM 按钮组
    $('#domButtonGroup').kendoButtonGroup();
    // 图标按钮组
    $('#iconButtonGroup').kendoButtonGroup({
        items: [
            {
                text: 'Angular',
                iconClass: 'fab fa-angular mr-1'
            },
            {
                text: 'React',
                iconClass: 'fab fa-react mr-1'
            },
            {
                text: 'Vue',
                iconClass: 'fab fa-vuejs mr-1'
            }
        ]
    });
    // 图片按钮组
    $('#imageButtonGroup').kendoButtonGroup({
        items: [
            {
                text: '艾欧里亚',
                imageUrl: 'img/temp/Leo.png'
            },
            {
                text: '沙加',
                imageUrl: 'img/temp/Virgo.png'
            },
            {
                text: '艾俄洛斯',
                imageUrl: 'img/temp/Sagittarius.png'
            }
        ]
    });
    // 单选按钮组
    $('#singleButtonGroup').kendoButtonGroup({
        items: [
            {
                text: 'HTML 5',
                iconClass: 'fab fa-html5 mr-1'
            },
            {
                text: 'CSS 3',
                iconClass: 'fab fa-css3-alt mr-1'
            },
            {
                text: 'JavaScript',
                iconClass: 'fab fa-js-square mr-1'
            }
        ],
        index: 0
    });
    // 多选按钮组
    $('#multipleButtonGroup').kendoButtonGroup({
        selection: 'multiple',
        items: [
            {
                text: 'HTML 5',
                iconClass: 'fab fa-html5 mr-1',
                selected: true
            },
            {
                text: 'CSS 3',
                iconClass: 'fab fa-css3-alt mr-1',
                selected: true
            },
            {
                text: 'JavaScript',
                iconClass: 'fab fa-js-square mr-1',
                selected: true
            }
        ]
    });
    // 禁用按钮组
    $('#disabledButtonGroup').kendoButtonGroup({
        items: [
            {
                text: 'HTML 5',
                iconClass: 'fab fa-html5 mr-1'
            },
            {
                text: 'CSS 3',
                iconClass: 'fab fa-css3-alt mr-1'
            },
            {
                text: 'JavaScript',
                iconClass: 'fab fa-js-square mr-1'
            }
        ],
        enable: false
    });
    // 按钮组格式
    $('#dataTypeButtonGroup').kendoButtonGroup({
        items: [
            {
                text: '普通按钮'
            },
            {
                text: '禁用按钮',
                enabled: false
            },
            {
                text: '添加样式',
                iconClass: 'fas fa-yin-yang mr-1'
            },
            {
                text: '添加属性',
                attributes: {
                    class: 'theme-s-bg'
                }
            },
            {
                text: '添加图标',
                icon: 'star'
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
                text: '添加徽章',
                badge: '8'
            }
        ],
        select: function(e) {
            alertMsgNoBtn('你选择了<strong class="theme-m">' + this.current().text() + '</strong>~', 'info');
        }
    });
});