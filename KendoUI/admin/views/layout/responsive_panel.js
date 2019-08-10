$(function () {
    $('#navigation').kendoPanelBar({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/nav.json',
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
    $('#responsivePanel').kendoResponsivePanel({
        toggleButton: '#toggle',
        orientation: 'right',
        breakpoint: 1200
    });
});