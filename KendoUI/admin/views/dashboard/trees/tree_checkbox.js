var treeView;
$(function () {
    // 获取数据源生成树形
    treeView = $('#treeView').kendoTreeView({
        dataSource: {
            transport: {
                read: function (options) { readNode(options, 'json/tree.json') }
            },
            schema: {
                data: 'data',
                model: {
                    id: 'id',
                    children: 'items'
                }
            }
        },
        checkboxes: {
            checkChildren: true
        },
        check: function (e) {
            isSelectAll();
            treeView.expand(e.node);
            treeView.expand($(e.node).find('.k-item'));
        },
        select: function (e) {
            if ($(e.node).find('a.k-link').length === 0) {
                $('#treeDetail').empty();
            }
        },
        dataBound: function () {
            isSelectAll();
            if ($('#treeView a.k-state-selected').length === 1) {
                location.href = $('#treeView a.k-state-selected').attr('href');
            }
        }
    }).data('kendoTreeView');
    // 全选
    $('#selectAll').click(function () {
        if ($(this).prop('checked')) {
            treeView.expand($('#treeView .k-item'));
            $('#selectAll, #treeView :checkbox').prop('indeterminate', false).prop('checked', true);
        } else {
            treeView.expand($('#treeView .k-item'));
            $('#selectAll, #treeView :checkbox').prop('indeterminate', false).prop('checked', false);
        }
    });
});

// 全选判断
function isSelectAll() {
    var ckb = $('#treeView > ul > li > div').find(':checkbox'),
        ckbChecked = $('#treeView > ul > li > div').find(':checked');
    if (ckb.length === ckbChecked.length) {
        $('#selectAll').prop('indeterminate', false).prop('checked', true);
    } else {
        $.each(ckb, function () {
            if ($(this).prop('checked') || $(this).prop('indeterminate')) {
                $('#selectAll').prop('checked', false).prop('indeterminate', true);
                return false;
            } else {
                $('#selectAll').prop('indeterminate', false).prop('checked', false);
            }
        });
    }
}

// 显示详情
function viewDetails(id) {
    new kendo.data.DataSource({
        transport: {
            read: function (options) {
                $.fn.ajaxPost({
                    ajaxUrl: 'json/grid.json',
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
        },
        change: function () {
            $('#treeDetail').html(kendo.template($('#detailsTemplate').html())(this.get(id)));
        }
    }).read();
}