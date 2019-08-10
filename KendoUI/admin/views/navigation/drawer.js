$(function () {
    // 左滑拉出抽屉
    $('#leftDrawer').kendoDrawer({
        mode: 'push',
        template:
            '<ul>' +
                '<li class="k-state-selected" data-role="drawer-item"><i class="fas fa-inbox ml-2 mr-3"></i>收件箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-envelope ml-2 mr-3"></i>未读邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-star ml-2 mr-3"></i>置顶邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-tag ml-2 mr-3"></i>标签邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-feather ml-2 mr-3"></i>草稿箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-stamp ml-2 mr-3"></i>已发送邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-trash-alt ml-2 mr-3"></i>已删除邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-poop ml-2 mr-3"></i>垃圾邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-folder ml-2 mr-3"></i>自定义文件夹</li>' +
            '</ul>',
        mini: {
            width: 48
        },
        width: 180,
        itemClick: function (e) {
            $('#leftDrawerContent > div').addClass('hide');
            $('#leftDrawerContent > div').eq(e.item.index()).removeClass('hide');
        }
    });
    $('#leftDrawerBtn').click(function () {
        if ($('#leftDrawer').data('kendoDrawer').drawerContainer.hasClass('k-drawer-expanded')) {
            $('#leftDrawer').data('kendoDrawer').hide();
        } else {
            $('#leftDrawer').data('kendoDrawer').show();
        }
    });
    // 右滑拉出抽屉
    $('#rightDrawer').kendoDrawer({
        mode: 'push',
        position: 'right',
        template:
            '<ul>' +
                '<li class="k-state-selected" data-role="drawer-item"><i class="fas fa-inbox ml-2 mr-3"></i>收件箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-envelope ml-2 mr-3"></i>未读邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-star ml-2 mr-3"></i>置顶邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-tag ml-2 mr-3"></i>标签邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-feather ml-2 mr-3"></i>草稿箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-stamp ml-2 mr-3"></i>已发送邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-trash-alt ml-2 mr-3"></i>已删除邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-poop ml-2 mr-3"></i>垃圾邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-folder ml-2 mr-3"></i>自定义文件夹</li>' +
            '</ul>',
        mini: {
            width: 48
        },
        width: 180,
        itemClick: function (e) {
            $('#rightDrawerContent > div').addClass('hide');
            $('#rightDrawerContent > div').eq(e.item.index()).removeClass('hide');
        }
    });
    $('#rightDrawerBtn').click(function () {
        if ($('#rightDrawer').data('kendoDrawer').drawerContainer.hasClass('k-drawer-expanded')) {
            $('#rightDrawer').data('kendoDrawer').hide();
        } else {
            $('#rightDrawer').data('kendoDrawer').show();
        }
    });
    // 左滑全屏抽屉
    $('#leftFullDrawer').kendoDrawer({
        template:
            '<ul>' +
                '<li class="k-state-selected" data-role="drawer-item"><i class="fas fa-inbox ml-2 mr-3"></i>收件箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-envelope ml-2 mr-3"></i>未读邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-star ml-2 mr-3"></i>置顶邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-tag ml-2 mr-3"></i>标签邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-feather ml-2 mr-3"></i>草稿箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-stamp ml-2 mr-3"></i>已发送邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-trash-alt ml-2 mr-3"></i>已删除邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-poop ml-2 mr-3"></i>垃圾邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-folder ml-2 mr-3"></i>自定义文件夹</li>' +
            '</ul>'
    });
    $('#leftFullDrawerBtn').click(function () {
        $('#leftFullDrawer').data('kendoDrawer').show();
    });
    // 自定义迷你模式抽屉
    $('#miniDrawer').kendoDrawer({
        mode: 'push',
        template:
            '<ul>' +
                '<li class="k-state-selected" data-role="drawer-item"><i class="fas fa-inbox ml-2 mr-3"></i>收件箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-envelope ml-2 mr-3"></i>未读邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-star ml-2 mr-3"></i>置顶邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-tag ml-2 mr-3"></i>标签邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-feather ml-2 mr-3"></i>草稿箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-stamp ml-2 mr-3"></i>已发送邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-trash-alt ml-2 mr-3"></i>已删除邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-poop ml-2 mr-3"></i>垃圾邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-folder ml-2 mr-3"></i>自定义文件夹</li>' +
            '</ul>',
        mini: {
            template:
                '<ul>' +
                    '<li class="k-state-selected" data-role="drawer-item"><i class="k-icon k-i-inbox"></i></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-email"></i></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-star"></i></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-marker-pin"></i></li>' +
                    '<li data-role="drawer-separator"></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-paste-plain-text"></i></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-hyperlink-email"></i></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-trash"></i></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-apply-format"></i></li>' +
                    '<li data-role="drawer-separator"></li>' +
                    '<li data-role="drawer-item"><i class="k-icon k-i-folder"></i></li>' +
                '</ul>'
        },
        width: 180,
        itemClick: function (e) {
            $('#miniDrawerContent > div').addClass('hide');
            $('#miniDrawerContent > div').eq(e.item.index()).removeClass('hide');
        }
    });
    $('#miniDrawerBtn').click(function () {
        if ($('#miniDrawer').data('kendoDrawer').drawerContainer.hasClass('k-drawer-expanded')) {
            $('#miniDrawer').data('kendoDrawer').hide();
        } else {
            $('#miniDrawer').data('kendoDrawer').show();
        }
    });
    // 右滑全屏抽屉
    $('#rightFullDrawer').kendoDrawer({
        position: 'right',
        template:
            '<ul>' +
                '<li class="k-state-selected" data-role="drawer-item"><i class="fas fa-inbox ml-2 mr-3"></i>收件箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-envelope ml-2 mr-3"></i>未读邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-star ml-2 mr-3"></i>置顶邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-tag ml-2 mr-3"></i>标签邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-feather ml-2 mr-3"></i>草稿箱</li>' +
                '<li data-role="drawer-item"><i class="fas fa-stamp ml-2 mr-3"></i>已发送邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-trash-alt ml-2 mr-3"></i>已删除邮件</li>' +
                '<li data-role="drawer-item"><i class="fas fa-poop ml-2 mr-3"></i>垃圾邮件</li>' +
                '<li data-role="drawer-separator"></li>' +
                '<li data-role="drawer-item"><i class="fas fa-folder ml-2 mr-3"></i>自定义文件夹</li>' +
            '</ul>'
    });
    $('#rightFullDrawerBtn').click(function () {
        $('#rightFullDrawer').data('kendoDrawer').show();
    });
});