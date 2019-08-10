var treeFrom,
    treeTo;
$(function () {
    // 获取数据源生成树形
    treeFrom = $('#treeFrom').kendoTreeView({
        dataSource: {
            transport: {
                read: function (options) { readNode(options, 'json/assigns.json') }
            },
            schema: {
                data: 'nodeFrom',
                model: {
                    id: 'id',
                    children: 'items'
                }
            }
        },
        loadOnDemand: false,
        checkboxes: {
            checkChildren: true
        }
    }).data('kendoTreeView');
    treeTo = $('#treeTo').kendoTreeView({
        dataSource: {
            transport: {
                read: function (options) { readNode(options, 'json/assigns.json') }
            },
            schema: {
                data: 'nodeTo',
                model: {
                    id: 'id',
                    children: 'items'
                }
            }
        },
        loadOnDemand: false,
        checkboxes: {
            checkChildren: true
        }
    }).data('kendoTreeView');
    // 关键字搜索
    $('input[name=keywords]').keyup(function () {
        var treeView = $(this).closest('p').next();
        treeView.data('kendoTreeView').expand(treeView.find('li'));
        if ($(this).val() !== '') {
            treeView.find('li').hide();
            treeView.find('.k-in:contains(' + $(this).val() + ')').each(function () {
                $(this).parents('li').show();
            });
        } else {
            treeView.find('li').show();
        }
    });
    // 双击添加
    $('#treeFrom').on('dblclick', '.k-in', function (){
        if ($(this).find('.k-image').length > 0) {
            treeTo.append(treeFrom.select(), treeTo.findByUid(treeTo.dataSource.get(treeFrom.dataItem(treeFrom.parent(treeFrom.select())).id).uid));
            treeTo.select('');
            $('#treeTo :checkbox').prop('indeterminate', false).prop('checked', false);
        }
    });
    // 双击删除
    $('#treeTo').on('dblclick', '.k-in', function (){
        if ($(this).find('.k-image').length > 0) {
            treeFrom.append(treeTo.select(), treeFrom.findByUid(treeFrom.dataSource.get(treeTo.dataItem(treeTo.parent(treeTo.select())).id).uid));
            treeFrom.select('');
            $('#treeFrom :checkbox').prop('indeterminate', false).prop('checked', false);
        }
    });
    // 添加
    $('#addNodes').click(function () {
        if ($('#treeFrom :checked').length > 0) {
            $.each($('#treeFrom :checked'), function () {
                if ($(this).parent().next().find('.k-image').length > 0) {
                    treeTo.append($(this).closest('.k-item'), treeTo.findByUid(treeTo.dataSource.get(treeFrom.dataItem(treeFrom.parent($(this).closest('.k-item'))).id).uid));
                }
            });
            treeTo.select('');
            $('#treeFrom, #treeTo').find(':checkbox').prop('indeterminate', false).prop('checked', false);
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 删除
    $('#delNodes').click(function () {
        if ($('#treeTo :checked').length > 0) {
            $.each($('#treeTo :checked'), function () {
                if ($(this).parent().next().find('.k-image').length > 0) {
                    treeFrom.append($(this).closest('.k-item'), treeFrom.findByUid(treeFrom.dataSource.get(treeTo.dataItem(treeTo.parent($(this).closest('.k-item'))).id).uid));
                }
            });
            treeFrom.select('');
            $('#treeFrom, #treeTo').find(':checkbox').prop('indeterminate', false).prop('checked', false);
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交 ID
    $('#submitIdAssign').unbind('click').click(function () {
        var ids = [];
        $.each($('#treeTo').find('.k-image'), function () {
            ids.push({
                'id': treeTo.dataItem($(this).closest('.k-item')).id,
                'parentId': treeTo.dataItem(treeTo.parent($(this).closest('.k-item'))).id,
                'order': treeTo.dataItem($(this).closest('.k-item')).index
            });
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
                    treeFrom.dataSource.read();
                    treeTo.dataSource.read();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交数据
    $('#submitDataAssign').unbind('click').click(function () {
        var models = treeTo.dataSource.data();
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
                    treeFrom.dataSource.read();
                    treeTo.dataSource.read();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 重置
    $('#refreshAssign').click(function () {
        treeFrom.dataSource.cancelChanges();
        treeTo.dataSource.cancelChanges();
    });
});