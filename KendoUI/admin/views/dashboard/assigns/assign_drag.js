var dragFrom,
    dragTo;
$(function () {
    // 获取数据源生成树形
    dragFrom = $('#dragFrom').kendoTreeView({
        dataSource: {
            transport: {
                read: function (options) { readNode(options, 'json/assigns.json') }
            },
            schema: {
                data: 'itemsFrom',
                model: {
                    id: 'id'
                }
            }
        },
        dragAndDrop: true,
        drop: saveDrop
    }).data('kendoTreeView');
    dragTo = $('#dragTo').kendoTreeView({
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
        dragAndDrop: true,
        drop: saveDrop
    }).data('kendoTreeView');
});

// 保存拖放
function saveDrop(e) {
    var source,
        destination;
    if ($(e.destinationNode).parents('#dragTo').length > 0) {
        if ($(e.sourceNode).find('.k-sprite').length < 1) {
            if (($(e.destinationNode).find('.k-sprite').length === 1 && e.dropPosition === 'over') || ($(e.destinationNode).find('.k-sprite').length === 0 && e.dropPosition !== 'over')) {
                if ($(e.sourceNode).parents('#dragFrom').length === 1) {
                    source = dragFrom.dataItem(e.sourceNode);
                } else {
                    source = dragTo.dataItem(e.sourceNode);
                }
                destination = dragTo.dataItem(e.destinationNode);
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
            } else {
                e.setValid(false);
                alertMsg('只能移动到最后一级目录内！', 'warning');
            }
        } else {
            e.setValid(false);
            alertMsg('不允许移动目录！', 'warning');
        }
    } else {
        e.setValid(false);
        alertMsg('不允许移动到左边！', 'warning');
    }
}