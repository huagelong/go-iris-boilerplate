$(function () {
    // 获取数据源生成树形
    $('#treeView').kendoTreeView({
        dataSource: {
            transport: {
                read: function (options) { readNode(options, 'json/nav.json') }
            },
            schema: {
                data: 'data',
                model: {
                    id: 'id',
                    children: 'items'
                }
            }
        }
    });
});