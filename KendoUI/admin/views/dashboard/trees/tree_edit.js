$(function () {
    // 获取数据源生成树形
    $('#treeView').kendoTreeView({
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
        template:
            '# var node = JSON.stringify(item).replace(/\\"/g, "\'") #' +
            '# if (item.url) { #' +
                '#= item.text #' +
            '# } else { #' +
                '<a class="k-link" href="javascript:editTree(#= node #);">#= item.text #</a>' +
            '# } #',
        dataBound: function () {
            if ($('#treeView a.k-state-selected').length === 1) {
                location.href = $('#treeView a.k-state-selected').attr('href');
            } else if ($('#treeView span.k-state-selected').length === 1) {
                location.href = $('#treeView span.k-state-selected a').attr('href');
            }
        }
    });
});

// 增删改查
function editTree(node) {
    $('#treeDetail').html(kendo.template($('#editTemplate').html())(node));
}

// 增
function createTree() {
    $('#treeDetail .view').hide();
    $('#treeDetail .edit').hide();
    $('#treeDetail .add').show();
    $('#treeDetail input.edit').prop('disabled', true);
    $('#treeDetail input.add').prop('disabled', false);
}

// 增保存
function saveCreateTree() {
    if ($('#treeDetail form').kendoValidator().data('kendoValidator').validate()) {
        $.fn.ajaxPost({
            ajaxData: $('#treeDetail form').serializeObject(),
            succeed: function () {
                refreshTree();
            },
            isMsg: true
        });
    }
}

// 删
function destroyTree(id, text) {
    confirmMsg('删除确认', '你确定要删除<strong class="theme-m mx-1">' + text + '</strong>节点吗？', 'question', function () {
        $.fn.ajaxPost({
            ajaxData: {
                'id': id
            },
            succeed: function () {
                refreshTree();
            },
            isMsg: true
        });
    });
}

// 改
function updateTree(id, text, uid) {
    $('#treeDetail .view').hide();
    $('#treeDetail .add').hide();
    $('#treeDetail .edit').show();
    $('#treeDetail input.add').prop('disabled', true);
    $('#treeDetail input.edit').prop('disabled', false);
}

// 改保存
function saveUpdateTree(id, dom) {
    if ($('#treeDetail form').kendoValidator().data('kendoValidator').validate()) {
        $.fn.ajaxPost({
            ajaxData: $('#treeDetail form').serializeObject(),
            succeed: function () {
                refreshTree();
            },
            isMsg: true
        });
    }
}

// 取消
function cancelTree() {
    $('#treeDetail .add').hide();
    $('#treeDetail .edit').hide();
    $('#treeDetail .view').show();
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