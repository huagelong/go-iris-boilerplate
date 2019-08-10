$(function () {
    var position = 'right';
    if (window.outerWidth <= 991) {
        position = 'bottom';
    }
    // 获取数据源生成穿梭框
    $('#listboxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) { readItem(options, 'json/assigns.json') }
            },
            schema: {
                data: 'itemFrom',
                model: {
                    id: 'id',
                    fields: {
                        photo: { type: 'object' },
                        realName: { type: 'string' },
                        nickName: { type: 'string' },
                        online: { type: 'boolean' },
                        gender: { type: 'string' },
                        birthday: { type: 'date',
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            }
                        },
                        zodiac: { type: 'object' }
                    }
                }
            }
        },
        dataTextField: 'realName',
        dataValueField: 'id',
        template: kendo.template($('#listboxTemplate').html()),
        selectable: 'multiple',
        draggable: {
            placeholder: function (draggedItem) {
                return draggedItem.clone().addClass('k-ghost').removeClass('d-none');
            }
        },
        dropSources: ['listboxTo'],
        connectWith: 'listboxTo',
        toolbar: {
            position: position,
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#listboxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) { readItem(options, 'json/assigns.json') }
            },
            schema: {
                data: 'itemTo',
                model: {
                    id: 'id',
                    fields: {
                        photo: { type: 'object' },
                        realName: { type: 'string' },
                        nickName: { type: 'string' },
                        online: { type: 'boolean' },
                        gender: { type: 'string' },
                        birthday: { type: 'date',
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            }
                        },
                        zodiac: { type: 'object' }
                    }
                }
            }
        },
        dataTextField: 'realName',
        dataValueField: 'id',
        template: kendo.template($('#listboxTemplate').html()),
        selectable: 'multiple',
        draggable: {
            placeholder: function (draggedItem) {
                return draggedItem.clone().addClass('k-ghost').removeClass('d-none');
            }
        },
        dropSources: ['listboxFrom'],
        connectWith: 'listboxFrom'
    });
    // 提交 ID
    $('#submitIdAssign').unbind('click').click(function () {
        var ids = [];
        $.each($('#listboxTo').data('kendoListBox').dataItems(), function () {
            ids.push(this.id);
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
                    refresh();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 提交数据
    $('#submitDataAssign').unbind('click').click(function () {
        var models = $('#listboxTo').data('kendoListBox').dataItems();
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
                    refresh();
                },
                isMsg: true
            });
        } else {
            alertMsg('请先选择对象！', 'warning');
        }
    });
    // 重置
    $('#refreshAssign').click(function () {
        refresh();
    });
});