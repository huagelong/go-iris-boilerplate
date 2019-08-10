$(function () {
    // 提示框
    tipMsg($('#tipMsgCenter'), '这里是提示的内容~', 'center');
    tipMsg($('#tipMsgTop'), '这里是提示的内容~', 'top');
    tipMsg($('#tipMsgBottom'), '这里是提示的内容~', 'bottom');
    tipMsg($('#tipMsgLeft'), '这里是提示的内容~', 'left');
    tipMsg($('#tipMsgRight'), '这里是提示的内容~', 'right');
    // 自定义提示框
    $('#customTooltip').kendoTooltip({
        autoHide: false,
        showOn: 'click',
        position: 'top',
        content:
            '<div class="media">' +
                '<img class="rounded-lg mr-3" src="img/IKKI.png" alt="IKKI">' +
                '<div class="media-body">' +
                    '<h4 class="mt-2 mb-4">IKKI</h4>' +
                    '<p>国籍：中国</p>' +
                    '<p>星座：凤凰座</p>' +
                    '<p>职业：前端攻城狮</p>' +
                '</div>' +
            '</div>'
    });
});