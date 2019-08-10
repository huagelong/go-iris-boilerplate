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
        template:
            '#= item.text #' +
            '# if (!item.url && item.spriteCssClass !== "fas fa-user k-sprite-edit") { #' +
                '<button class="k-button k-button-icontext" onclick="createTree(\'#= item.id #\', \'#= item.uid #\');"><span class="k-icon k-i-add"></span>新增</button>' +
                '<button class="k-button k-button-icontext" onclick="updateTree(\'#= item.id #\', \'#= item.text #\', \'#= item.uid #\');"><span class="k-icon k-i-edit"></span>编辑</button>' +
                '<button class="k-button k-button-icontext" onclick="destroyTree(\'#= item.id #\', \'#= item.text #\', this);"><span class="k-icon k-i-close"></span>删除</button>' +
            '# } #',
        dragAndDrop: true,
        drop: function (e) {
            var source = treeView.dataItem(e.sourceNode),
                destination = treeView.dataItem(e.destinationNode);
            if (e.valid) {
                $.fn.ajaxPost({
                    ajaxData: {
                        'sourceId': source.id,
                        'destinationId': destination.id,
                        'dropPosition': e.dropPosition
                    },
                    isMsg: true
                });
            }
        },
        select: function (e) {
            if ($(e.node).find('button').length > 0) {
                $('#treeDetail').empty();
            }
        },
        dataBound: function () {
            if ($('#treeView a.k-state-selected').length === 1) {
                location.href = $('#treeView a.k-state-selected').attr('href');
            }
        }
    }).data('kendoTreeView');
    // 关键字搜索
    $('#keywords').keyup(function () {
        treeView.expand($('#treeView li'));
        if ($(this).val() !== '') {
            $('#treeView li').hide();
            $('#treeView .k-in:contains(' + $(this).val() + ')').each(function () {
                $(this).parents('li').show();
            });
        } else {
            $('#treeView li').show();
        }
    });
});

// 增
function createTree(id, uid) {
    treeView.append({
        text: '<input class="k-textbox" type="text">' +
            '<button class="k-button k-button-icontext" onclick="saveCreateTree(\'' + id + '\', this);"><span class="k-icon k-i-check"></span>保存</button>' +
            '<button class="k-button k-button-icontext" onclick="cancelCreateTree(this);"><span class="k-icon k-i-cancel"></span>取消</button>',
        spriteCssClass: 'fas fa-user k-sprite-edit'
    }, treeView.findByUid(uid), function (e) {
        setTimeout(function (){
            treeView.select(e);
            e.find('.k-textbox').focus();
        }, 10);
    });
}

// 增保存
function saveCreateTree(id, dom) {
    if ($(dom).prev().val() === '') {
        alertMsg('新增节点名称不能为空！', 'error');
    } else {
        $.fn.ajaxPost({
            ajaxData: {
                'parentId': id,
                'text': $(dom).prev().val()
            },
            succeed: function () {
                refreshTree();
            },
            isMsg: true
        });
    }
}

// 增取消
function cancelCreateTree(dom) {
    treeView.remove($(dom).closest('li'));
    setTimeout(function (){
        $('#treeView').blur();
    }, 10);
}

// 删
function destroyTree(id, text, dom) {
    confirmMsg('删除确认', '你确定要删除<strong class="theme-m mx-1">' + text + '</strong>节点吗？', 'question', function () {
        $.fn.ajaxPost({
            ajaxData: {
                'id': id
            },
            succeed: function () {
                treeView.remove($(dom).closest('li'));
            },
            isMsg: true
        });
    });
}

// 改
function updateTree(id, text, uid) {
    treeView.insertBefore({
        text: '<input class="k-textbox" type="text" value="' + text + '">' +
            '<button class="k-button k-button-icontext" onclick="saveUpdateTree(\'' + id + '\', this);"><span class="k-icon k-i-check"></span>保存</button>' +
            '<button class="k-button k-button-icontext" onclick="cancelUpdateTree(this);"><span class="k-icon k-i-cancel"></span>取消</button>',
        spriteCssClass: 'fas fa-user k-sprite-edit'
    }, treeView.findByUid(uid));
    setTimeout(function (){
        treeView.select(treeView.findByUid(uid).prev());
        treeView.findByUid(uid).hide().prev().find('.k-textbox').focus();
    }, 10);
}

// 改保存
function saveUpdateTree(id, dom) {
    if ($(dom).prev().val() === '') {
        alertMsg('编辑节点名称不能为空！', 'error');
    } else {
        $.fn.ajaxPost({
            ajaxData: {
                'id': id,
                'text': $(dom).prev().val()
            },
            succeed: function () {
                refreshTree();
            },
            isMsg: true
        });
    }
}

// 改取消
function cancelUpdateTree(dom) {
    $(dom).closest('li').next().show();
    treeView.remove($(dom).closest('li'));
    setTimeout(function (){
        $('#treeView').blur();
    }, 10);
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