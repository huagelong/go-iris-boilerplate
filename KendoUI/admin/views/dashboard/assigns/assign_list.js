$(function () {
    // 生成工具条
    $('#toolbarFrom').kendoToolBar({
        resizable: false,
        items: [
            { template: '<input class="k-checkbox" id="selectAllFrom" type="checkbox" title="全选"><label class="k-checkbox-label" for="selectAllFrom"></label>' },
            { type: 'spacer' },
            { template: '<input class="k-textbox w-100" name="keywords" type="text" placeholder="关键字搜索">' }
        ]
    });
    $('#toolbarTo').kendoToolBar({
        resizable: false,
        items: [
            { template: '<input class="k-checkbox" id="selectAllTo" type="checkbox" title="全选"><label class="k-checkbox-label" for="selectAllTo"></label>' },
            { type: 'spacer' },
            { template: '<input class="k-textbox w-100" name="keywords" type="text" placeholder="关键字搜索">' }
        ]
    });
    // 获取数据源生成列表
    var listFrom = $('#listFrom').kendoListView({
        dataSource: {
            transport: {
                read: function (options) { readItem(options, 'json/assigns.json') }
            },
            schema: {
                data: 'itemFrom',
                model: {
                    id: 'id',
                    fields: {
                        photo: { type: 'object' },
                        realName: { type: 'string' },
                        nickName: { type: 'string' },
                        online: { type: 'boolean' },
                        gender: { type: 'string' },
                        birthday: { type: 'date',
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            }
                        },
                        zodiac: { type: 'object' }
                    }
                }
            }
        },
        template: kendo.template($('#listTemplate').html()),
        selectable: 'multiple',
        change: function (e) {
            $('#listFrom .listItem .ids').prop('checked', false);
            this.select().find('.ids').prop('checked', true);
        },
        dataBound: function () {
            $('#selectAllFrom').prop('checked', false);
        }
    }).data('kendoListView');
    var listTo = $('#listTo').kendoListView({
        dataSource: {
            transport: {
                read: function (options) { readItem(options, 'json/assigns.json') }
            },
            schema: {
                data: 'itemTo',
                model: {
                    id: 'id',
                    fields: {
                        photo: { type: 'object' },
                        realName: { type: 'string' },
                        nickName: { type: 'string' },
                        online: { type: 'boolean' },
                        gender: { type: 'string' },
                        birthday: { type: 'date',
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            }
                        },
                        zodiac: { type: 'object' }
                    }
                }
            }
        },
        template: kendo.template($('#listTemplate').html()),
        selectable: 'multiple',
        change: function (e) {
            $('#listTo .listItem .ids').prop('checked', false);
            this.select().find('.ids').prop('checked', true);
        },
        dataBound: function () {
            $('#selectAllTo').prop('checked', false);
        }
    }).data('kendoListView');
    // 全选
    $('#selectAllFrom').click(function () {
        if ($(this).prop('checked')) {
            listFrom.select($('#listFrom .listItem'));
        } else {
            listFrom.clearSelection();
        }
    });
    $('#selectAllTo').click(function () {
        if ($(this).prop('checked')) {
            listTo.select($('#listTo .listItem'));
        } else {
            listTo.clearSelection();
        }
    });
    // 单选
    $('#listFrom').on('click', '.ids', function () {
        if ($(this).prop('checked')) {
            listFrom.select($(this).parents('.listItem'));
        } else {
            $(this).parents('.listItem').removeClass('k-state-selected').removeAttr('aria-selected');
        }
    });
    $('#listTo').on('click', '.ids', function () {
        if ($(this).prop('checked')) {
            listTo.select($(this).parents('.listItem'));
        } else {
            $(this).parents('.listItem').removeClass('k-state-selected').removeAttr('aria-selected');
        }
    });
    // 关键字搜索
    $('input[name=keywords]').keyup(function () {
        $(this).closest('.k-toolbar').next().data('kendoListView').dataSource.filter({
            logic: 'or',
            filters: [
                { field: 'realName', operator: 'contains', value: $(this).val() },
                { field: 'nickName', operator: 'contains', value: $(this).val() },
                { field: 'birthday', operator: 'contains', value: $(this).val() }
            ]
        });
    });
    // 双击添加
    $('#listFrom').on('dblclick', '.listItem', function (){
        var dataItem = listFrom.dataItem($(this));
        listFrom.dataSource.remove(dataItem);
        listTo.dataSource.add(dataItem);
        listTo.dataSource.sort({
            field: 'id',
            dir: 'asc'
        });
    });
    // 双击删除
    $('#listTo').on('dblclick', '.listItem', function (){
        var dataItem = listTo.dataItem($(this));
        listTo.dataSource.remove(dataItem);
        listFrom.dataSource.add(dataItem);
        listFrom.dataSource.sort({
            field: 'id',
            dir: 'asc'
        });
    });
    // 添加
    $('#addItems').click(function () {
        var ids = [];
        $.each($('#listFrom .ids'), function () {
            if ($(this).prop('checked')) {
                ids.push($(this).val());
            }
        });
        if (ids.length > 0) {
            $.each(ids, function () {
                var dataItem = listFrom.dataSource.get(this);
                listFrom.dataSource.remove(dataItem);
                listTo.dataSource.add(dataItem);
            });
            listTo.dataSource.sort({
                field: 'id',
                dir: 'asc'
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 删除
    $('#delItems').click(function () {
        var ids = [];
        $.each($('#listTo .ids'), function () {
            if ($(this).prop('checked')) {
                ids.push($(this).val());
            }
        });
        if (ids.length > 0) {
            $.each(ids, function () {
                var dataItem = listTo.dataSource.get(this);
                listTo.dataSource.remove(dataItem);
                listFrom.dataSource.add(dataItem);
            });
            listFrom.dataSource.sort({
                field: 'id',
                dir: 'asc'
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交 ID
    $('#submitIdAssign').unbind('click').click(function () {
        var ids = [];
        $.each($('#listTo .ids'), function () {
            ids.push($(this).val());
        });
        if (ids.length > 0) {
            $('#loading').show();
            $.fn.ajaxPost({
                ajaxData: {
                    'ids': ids
                },
                ajaxUrl: 'json/response.json',
                finished: function () {
                    $('#loading').hide();
                },
                succeed: function (res) {
                    listFrom.dataSource.read();
                    listTo.dataSource.read();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交数据
    $('#submitDataAssign').unbind('click').click(function () {
        var models = listTo.dataSource.data();
        if (models.length > 0) {
            $('#loading').show();
            $.fn.ajaxPost({
                ajaxData: {
                    'models': models
                },
                ajaxUrl: 'json/response.json',
                finished: function () {
                    $('#loading').hide();
                },
                succeed: function (res) {
                    listFrom.dataSource.read();
                    listTo.dataSource.read();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 重置
    $('#refreshAssign').click(function () {
        listFrom.clearSelection();
        listTo.clearSelection();
        listFrom.dataSource.cancelChanges();
        listTo.dataSource.cancelChanges();
    });
});