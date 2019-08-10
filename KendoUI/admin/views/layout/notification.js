$(function () {
    // 成功通知框
    $('#noticeMsgSuccessLeftTop').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'left top', 2000);
    });
    $('#noticeMsgSuccessTop').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'top', 2000);
    });
    $('#noticeMsgSuccessRightTop').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'right top', 2000);
    });
    $('#noticeMsgSuccessLeft').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'left', 2000);
    });
    $('#noticeMsgSuccessCenter').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'center', 2000);
    });
    $('#noticeMsgSuccessRight').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'right', 2000);
    });
    $('#noticeMsgSuccessLeftBottom').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'left bottom', 2000);
    });
    $('#noticeMsgSuccessBottom').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'bottom', 2000);
    });
    $('#noticeMsgSuccessRightBottom').click(function () {
        noticeMsg('这里是成功通知的内容~', 'success', 'right bottom', 2000);
    });
    // 信息通知框
    $('#noticeMsgInfoLeftTop').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'left top', 2000);
    });
    $('#noticeMsgInfoTop').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'top', 2000);
    });
    $('#noticeMsgInfoRightTop').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'right top', 2000);
    });
    $('#noticeMsgInfoLeft').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'left', 2000);
    });
    $('#noticeMsgInfoCenter').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'center', 2000);
    });
    $('#noticeMsgInfoRight').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'right', 2000);
    });
    $('#noticeMsgInfoLeftBottom').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'left bottom', 2000);
    });
    $('#noticeMsgInfoBottom').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'bottom', 2000);
    });
    $('#noticeMsgInfoRightBottom').click(function () {
        noticeMsg('这里是信息通知的内容~', 'info', 'right bottom', 2000);
    });
    // 警告通知框
    $('#noticeMsgWarningLeftTop').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'left top', 2000);
    });
    $('#noticeMsgWarningTop').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'top', 2000);
    });
    $('#noticeMsgWarningRightTop').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'right top', 2000);
    });
    $('#noticeMsgWarningLeft').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'left', 2000);
    });
    $('#noticeMsgWarningCenter').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'center', 2000);
    });
    $('#noticeMsgWarningRight').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'right', 2000);
    });
    $('#noticeMsgWarningLeftBottom').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'left bottom', 2000);
    });
    $('#noticeMsgWarningBottom').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'bottom', 2000);
    });
    $('#noticeMsgWarningRightBottom').click(function () {
        noticeMsg('这里是警告通知的内容~', 'warning', 'right bottom', 2000);
    });
    // 错误通知框
    $('#noticeMsgErrorLeftTop').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'left top', 2000);
    });
    $('#noticeMsgErrorTop').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'top', 2000);
    });
    $('#noticeMsgErrorRightTop').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'right top', 2000);
    });
    $('#noticeMsgErrorLeft').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'left', 2000);
    });
    $('#noticeMsgErrorCenter').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'center', 2000);
    });
    $('#noticeMsgErrorRight').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'right', 2000);
    });
    $('#noticeMsgErrorLeftBottom').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'left bottom', 2000);
    });
    $('#noticeMsgErrorBottom').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'bottom', 2000);
    });
    $('#noticeMsgErrorRightBottom').click(function () {
        noticeMsg('这里是错误通知的内容~', 'error', 'right bottom', 2000);
    });
    // 自定义通知框
    var notification = $('<div class="notice-box"></div>').kendoNotification({
        animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
        position: {
            pinned: false,
            right: 30,
            bottom: 30
        },
        width: 250,
        autoHideAfter: 0,
        stacking: 'up',
        templates: [
            {
                type: 'success',
                template: '<dl class="d-flex align-items-center m-0 p-3"><dt class="ml-2 mr-3"><i class="fas fa-2x fa-check-circle"></i></dt><dd class="m-0"><h5>#= title #</h5><p class="m-0">#= message #</p></dd></dl>'
            },
            {
                type: 'info',
                template: '<dl class="d-flex align-items-center m-0 p-3"><dt class="ml-2 mr-3"><i class="fas fa-2x fa-info-circle"></i></dt><dd class="m-0"><h5>#= title #</h5><p class="m-0">#= message #</p></dd></dl>'
            },
            {
                type: 'warning',
                template: '<dl class="d-flex align-items-center m-0 p-3"><dt class="ml-2 mr-3"><i class="fas fa-2x fa-exclamation-circle"></i></dt><dd class="m-0"><h5>#= title #</h5><p class="m-0">#= message #</p></dd></dl>'
            },
            {
                type: 'error',
                template: '<dl class="d-flex align-items-center m-0 p-3"><dt class="ml-2 mr-3"><i class="fas fa-2x fa-times-circle"></i></dt><dd class="m-0"><h5>#= title #</h5><p class="m-0">#= message #</p></dd></dl>'
            },
            {
                type: 'question',
                template: '<dl class="d-flex align-items-center m-0 p-3"><dt class="ml-2 mr-3"><i class="fas fa-2x fa-question-circle"></i></dt><dd class="m-0"><h5>#= title #</h5><p class="m-0">#= message #</p></dd></dl>'
            },
            {
                type: 'email',
                template: '<dl class="d-flex align-items-center m-0 p-3 bg-primary text-white"><dt class="ml-2 mr-3"><i class="fas fa-2x fa-envelope"></i></dt><dd class="m-0"><h5>#= title #</h5><p class="m-0">#= message #</p></dd></dl>'
            }
        ]
    }).data('kendoNotification');
    $('#customNotificationSuccess').click(function () {
        notification.show({
            title: '成功~',
            message: '这里是成功通知的内容~'
        }, 'success');
    });
    $('#customNotificationInfo').click(function () {
        notification.show({
            title: '信息~',
            message: '这里是信息通知的内容~'
        }, 'info');
    });
    $('#customNotificationWarning').click(function () {
        notification.show({
            title: '警告~',
            message: '这里是警告通知的内容~'
        }, 'warning');
    });
    $('#customNotificationError').click(function () {
        notification.show({
            title: '错误~',
            message: '这里是错误通知的内容~'
        }, 'error');
    });
    $('#customNotificationQuestion').click(function () {
        notification.show({
            title: '提问~',
            message: '这里是提问通知的内容~'
        }, 'question');
    });
    $('#customNotificationEmail').click(function () {
        notification.show({
            title: '新邮件~',
            message: '您有一封新邮件~ 请查收~'
        }, 'email');
    });
    // 隐藏通知框
    $('#hideAllNotification').click(function () {
        notification.hide();
    });
    // 指定位置通知框
    $('#staticNotification').click(function () {
        $(this).addClass('mb-3');
        $('<div class="notice-box"></div>').kendoNotification({
            animation: false,
            appendTo: '#notificationHere',
            hide: function () {
                $('#staticNotification').removeClass('mb-3');
            }
        }).data('kendoNotification').show('这里是指定位置通知的内容~');
    });
});