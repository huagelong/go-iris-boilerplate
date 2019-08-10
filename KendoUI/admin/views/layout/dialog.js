$(function () {
    // 警告框
    $('#alertMsgSuccess').click(function () {
        alertMsg('这里是成功信息的内容~', 'success');
    });
    $('#alertMsgInfo').click(function () {
        alertMsg('这里是普通信息的内容~', 'info');
    });
    $('#alertMsgQuestion').click(function () {
        alertMsg('这里是提问信息的内容~', 'question');
    });
    $('#alertMsgWarning').click(function () {
        alertMsg('这里是警告信息的内容~', 'warning');
    });
    $('#alertMsgError').click(function () {
        alertMsg('这里是错误信息的内容~', 'error');
    });
    // 确认框
    $('#confirmMsgSuccess').click(function () {
        confirmMsg('成功信息', '这里是成功信息的内容~', 'success', function () {
            alertMsgNoBtn('你选择了确定~', 'info');
        });
    });
    $('#confirmMsgInfo').click(function () {
        confirmMsg('普通信息', '这里是普通信息的内容~', 'info', function () {
            alertMsgNoBtn('你选择了确定~', 'info');
        });
    });
    $('#confirmMsgQuestion').click(function () {
        confirmMsg('提问信息', '这里是提问信息的内容~', 'question', function () {
            alertMsgNoBtn('你选择了确定~', 'info');
        });
    });
    $('#confirmMsgWarning').click(function () {
        confirmMsg('警告信息', '这里是警告信息的内容~', 'warning', function () {
            alertMsgNoBtn('你选择了确定~', 'info');
        });
    });
    $('#confirmMsgError').click(function () {
        confirmMsg('错误信息', '这里是错误信息的内容~', 'error', function () {
            alertMsgNoBtn('你选择了确定~', 'info');
        });
    });
    // 对话框无按钮
    $('#alertMsgNoBtn').click(function () {
        alertMsgNoBtn('这里是一闪而过的信息~', 'info');
    });
    // 自定义对话框
    $('#customDialog').click(function () {
        var alertDialog = $('<div class="dialog-box"></div>').kendoDialog({
            animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
            maxWidth: '30%',
            maxHeight: '30%',
            minWidth: 320,
            minHeight: 196,
            title: '标题',
            content: '这里是自定义按钮对话框~',
            actions: [
                {
                    text: '安装更新',
                    primary: true,
                    action: function () {
                        alertMsgNoBtn('你选择了安装更新~', 'info');
                    }
                },
                {
                    text: '忽略更新',
                    action: function () {
                        alertMsgNoBtn('你选择了忽略更新~', 'info');
                    }
                },
                {
                    text: '下次提醒我',
                    action: function () {
                        alertMsgNoBtn('你选择了下次提醒我~', 'info');
                    }
                }
            ],
            close: function () {
                alertDialog.destroy();
            }
        }).data('kendoDialog');
        alertDialog.open();
    });
    // Kendo UI 原生警告框
    $('#alertBtn').click(function () {
        kendo.alert('这里是 Kendo UI 原生警告框的信息~');
    });
    // Kendo UI 原生确认框
    $('#confirmBtn').click(function () {
        kendo.confirm('这里是 Kendo UI 原生确认框的信息~').then(function () {
            kendo.alert('你选择了确定~');
        }, function () {
            kendo.alert('你选择了取消~');
        });
    });
    // Kendo UI 原生提示框
    $('#promptBtn').click(function () {
        kendo.prompt('这里是 Kendo UI 原生提示框的信息~', '默认内容').then(function (data) {
            kendo.alert(kendo.format('你填写的是："{0}"', data));
        }, function () {
            kendo.alert('你选择了取消~');
        });
    });
});