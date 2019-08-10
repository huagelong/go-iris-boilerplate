$(function () {
    // DOM 树形视图
    $('#domTreeView').kendoTreeView();
    // Ajax 树形视图
    $('#ajaxTreeView').kendoTreeView({
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
        dragAndDrop: true
    });
});

// 置空
function viewDetails(id) {}