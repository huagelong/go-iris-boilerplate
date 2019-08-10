$(function () {
    // 获取数据源生成路由导航
    $.fn.ajaxPost({
        ajaxUrl: navUrl,
        succeed: function (res) {
            $('#spaPanelBar').kendoPanelBar({
                dataSource: res.data,
                expandMode: 'single'
            });
        }
    });
});