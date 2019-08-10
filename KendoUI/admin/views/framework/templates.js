$(function () {
    // 创建数据源
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                $.fn.ajaxPost({
                    ajaxUrl: 'json/list.json',
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
    });
    // 选择数据
    $('#dataList').kendoDropDownList({
        dataSource: dataSource,
        dataValueField: 'id',
        dataTextField: 'realName',
        template: function (dataItem) {
            return '<img class="w-25 rounded-circle mr-2" src="' + dataItem.photo.url + '" alt="' + dataItem.photo.name + dataItem.photo.extension + '">' + dataItem.realName;
        },
        height: 520,
        dataBound: function () {
            $('#templates').html(kendo.template($('#detailsTemplate').html())(dataSource.get(this.value())));
        },
        change: function () {
            $('#templates').html(kendo.template($('#detailsTemplate').html())(dataSource.get(this.value())));
        }
    });
});