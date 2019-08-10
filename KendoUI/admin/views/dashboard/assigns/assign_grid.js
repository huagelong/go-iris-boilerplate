$(function () {
    // 获取数据源生成表格
    var gridFrom = $('#gridFrom').kendoGrid({
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
        toolbar: [
            { template: '<span class="k-textbox k-space-left w-100"><input name="keywords" type="text" placeholder="关键字搜索"><a class="k-icon k-i-search k-required ml-1" href="javascript:;"></a></span>' }
        ],
        columns: [
            { selectable: true, width: '40px' },
            { field: 'photo', title: '头像', width: '80px',
                template: '<img class="w-100" src="#= photo.url #" alt="#= nickName #" title="#= nickName #">'
            },
            { field: 'realName', title: '姓名', width: '100px' },
            { field: 'online', title: '状态', width: '70px',
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #'
            },
            { field: 'gender', title: '性别', width: '70px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ]
            },
            { field: 'birthday', title: '生日', width: '110px' },
            { field: 'zodiac', title: '生肖', width: '70px',
                template: '#= zodiac.zodiacName #'
            }
        ],
        noRecords: {
            template: '<div class="text-center p-4">无相关数据</div>'
        },
        sortable: true,
        reorderable: true,
        resizable: true
    }).data('kendoGrid');
    var gridTo = $('#gridTo').kendoGrid({
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
        toolbar: [
            { template: '<span class="k-textbox k-space-left w-100"><input name="keywords" type="text" placeholder="关键字搜索"><a class="k-icon k-i-search k-required ml-1" href="javascript:;"></a></span>' }
        ],
        columns: [
            { selectable: true, width: '40px' },
            { field: 'photo', title: '头像', width: '80px',
                template: '<img class="w-100" src="#= photo.url #" alt="#= nickName #" title="#= nickName #">'
            },
            { field: 'realName', title: '姓名', width: '100px' },
            { field: 'online', title: '状态', width: '70px',
                template:
                    '# if (online) { #' +
                    '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                    '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #'
            },
            { field: 'gender', title: '性别', width: '70px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ]
            },
            { field: 'birthday', title: '生日', width: '110px' },
            { field: 'zodiac', title: '生肖', width: '70px',
                template: '#= zodiac.zodiacName #'
            }
        ],
        noRecords: {
            template: '<div class="text-center p-4">无相关数据</div>'
        },
        sortable: true,
        reorderable: true,
        resizable: true
    }).data('kendoGrid');
    // 关键字搜索
    $('input[name=keywords]').keyup(function () {
        $(this).closest('.k-grid').data('kendoGrid').dataSource.filter({
            logic: 'or',
            filters: [
                { field: 'realName', operator: 'contains', value: $(this).val() },
                { field: 'nickName', operator: 'contains', value: $(this).val() },
                { field: 'birthday', operator: 'contains', value: $(this).val() }
            ]
        });
    });
    // 双击添加
    $('#gridFrom .k-grid-content').on('dblclick', 'tr', function (){
        var dataItem = gridFrom.dataItem($(this));
        gridFrom.dataSource.remove(dataItem);
        gridTo.dataSource.add(dataItem);
        gridTo.dataSource.sort({
            field: 'id',
            dir: 'asc'
        });
    });
    // 双击删除
    $('#gridTo .k-grid-content').on('dblclick', 'tr', function (){
        var dataItem = gridTo.dataItem($(this));
        gridTo.dataSource.remove(dataItem);
        gridFrom.dataSource.add(dataItem);
        gridFrom.dataSource.sort({
            field: 'id',
            dir: 'asc'
        });
    });
    // 添加
    $('#addItems').click(function () {
        var ids = gridFrom.selectedKeyNames();
        if (ids.length > 0) {
            $.each(ids, function () {
                var dataItem = gridFrom.dataSource.get(this);
                gridFrom.dataSource.remove(dataItem);
                gridTo.dataSource.add(dataItem);
            });
            gridTo.dataSource.sort({
                field: 'id',
                dir: 'asc'
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 删除
    $('#delItems').click(function () {
        var ids = gridTo.selectedKeyNames();
        if (ids.length > 0) {
            $.each(ids, function () {
                var dataItem = gridTo.dataSource.get(this);
                gridTo.dataSource.remove(dataItem);
                gridFrom.dataSource.add(dataItem);
            });
            gridFrom.dataSource.sort({
                field: 'id',
                dir: 'asc'
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交 ID
    $('#submitIdAssign').unbind('click').click(function () {
        $('#gridTo .k-grid-header').find(':checkbox').click();
        var ids = gridTo.selectedKeyNames();
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
                    gridFrom.dataSource.read();
                    gridTo.dataSource.read();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交数据
    $('#submitDataAssign').unbind('click').click(function () {
        var models = gridTo.dataSource.data();
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
                    gridFrom.dataSource.read();
                    gridTo.dataSource.read();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 重置
    $('#refreshAssign').click(function () {
        gridFrom.clearSelection();
        gridTo.clearSelection();
        gridFrom.dataSource.cancelChanges();
        gridTo.dataSource.cancelChanges();
    });
});