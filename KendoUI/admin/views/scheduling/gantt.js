$(function () {
    // 定义 PDF 嵌入字体
    kendo.pdf.defineFont({
        'Microsoft YaHei': 'fonts/msyh.ttf',
        'Microsoft YaHei|Bold': 'fonts/msyhbd.ttf'
    });
    // 普通甘特图
    $('#generalGantt').kendoGantt({
        dataSource: {
            transport: {
                create: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            // $('#generalGantt').data('kendoGantt').dataSource.read();
                            $('#generalGantt').data('kendoGantt').refresh();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                destroy: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: {'id': options.data.id},
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            // $('#generalGantt').data('kendoGantt').dataSource.read();
                            $('#generalGantt').data('kendoGantt').refresh();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                update: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            // $('#generalGantt').data('kendoGantt').dataSource.read();
                            $('#generalGantt').data('kendoGantt').refresh();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/gantt.json',
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
                data: 'data',
                model: {
                    id: 'id',
                    fields: {
                        id: { from: 'ID', type: 'number' },
                        parentId: { from: 'ParentID', type: 'number',
                            defaultValue: null,
                            validation: {
                                required: true
                            }
                        },
                        orderId: { from: 'OrderID', type: 'number',
                            validation: {
                                required: true
                            }
                        },
                        title: { from: 'Title',
                            defaultValue: ''
                        },
                        start: { from: 'Start', type: 'date',
                            parse: function (e) {
                                return kendo.parseDate(e);
                            }
                        },
                        end: { from: 'End', type: 'date',
                            parse: function (e) {
                                return kendo.parseDate(e);
                            }
                        },
                        percentComplete: { from: 'PercentComplete', type: 'number' },
                        summary: { from: 'Summary', type: 'boolean' },
                        expanded: { from: 'Expanded', type: 'boolean',
                            defaultValue: true
                        }
                    }
                }
            }
        },
        dependencies: [
            { id: 1, predecessorId: 1, successorId: 2, type: 1 },
            { id: 2, predecessorId: 2, successorId: 3, type: 1 },
            { id: 3, predecessorId: 3, successorId: 4, type: 1 },
            { id: 4, predecessorId: 4, successorId: 5, type: 1 },
            { id: 5, predecessorId: 5, successorId: 6, type: 1 },
            { id: 6, predecessorId: 6, successorId: 7, type: 1 },
            { id: 7, predecessorId: 7, successorId: 8, type: 1 },
            { id: 8, predecessorId: 8, successorId: 9, type: 1 },
            { id: 9, predecessorId: 9, successorId: 10, type: 1 },
            { id: 10, predecessorId: 10, successorId: 11, type: 1 },
            { id: 11, predecessorId: 11, successorId: 12, type: 1 },
            { id: 12, predecessorId: 12, successorId: 13, type: 1 },
            { id: 13, predecessorId: 13, successorId: 14, type: 1 },
            { id: 14, predecessorId: 16, successorId: 18, type: 1 },
            { id: 15, predecessorId: 18, successorId: 20, type: 1 },
            { id: 16, predecessorId: 20, successorId: 22, type: 1 },
            { id: 17, predecessorId: 22, successorId: 24, type: 1 },
            { id: 18, predecessorId: 24, successorId: 26, type: 1 },
            { id: 19, predecessorId: 26, successorId: 28, type: 1 },
            { id: 20, predecessorId: 28, successorId: 30, type: 1 },
            { id: 21, predecessorId: 30, successorId: 32, type: 1 },
            { id: 22, predecessorId: 32, successorId: 34, type: 1 },
            { id: 23, predecessorId: 34, successorId: 36, type: 1 },
            { id: 24, predecessorId: 36, successorId: 38, type: 1 },
            { id: 25, predecessorId: 38, successorId: 39, type: 1 },
            { id: 26, predecessorId: 39, successorId: 40, type: 1 }
        ],
        resources: {
            dataSource: [
                { id: 'Aries', name: '穆', color: '#c39b8f' },
                { id: 'Taurus', name: '阿鲁迪巴', color: '#d770ad' },
                { id: 'Gemini', name: '撒加', color: '#da4453' },
                { id: 'Cancer', name: '迪斯马斯克', color: '#ff9800' },
                { id: 'Leo', name: '艾欧里亚', color: '#f6bb42' },
                { id: 'Virgo', name: '沙加', color: '#8cc152' },
                { id: 'Libra', name: '童虎', color: '#37bc9b' },
                { id: 'Scorpion', name: '米罗', color: '#3bafda' },
                { id: 'Sagittarius', name: '艾俄洛斯', color: '#4a89dc' },
                { id: 'Capricorn', name: '修罗', color: '#967adc' },
                { id: 'Aquarius', name: '卡妙', color: '#434a54' },
                { id: 'Picses', name: '阿布罗狄', color: '#aab2bd' },
                { id: 'Pegasus', name: '星矢', color: '#007bff' },
                { id: 'Dragon', name: '紫龙', color: '#28a745' },
                { id: 'Cygnus', name: '冰河', color: '#17a2b8' },
                { id: 'Andromeda', name: '瞬', color: '#dc3545' },
                { id: 'Phoenix', name: '一辉', color: '#ffc107' },
                { id: 'Goddess', name: '雅典娜', color: '#6c757d' }
            ]
        },
        assignments: {
            dataSource: [
                { taskId: 0, resourceId: 'Pegasus', value: 0.2 },
                { taskId: 0, resourceId: 'Dragon', value: 0.2 },
                { taskId: 0, resourceId: 'Cygnus', value: 0.2 },
                { taskId: 0, resourceId: 'Andromeda', value: 0.2 },
                { taskId: 0, resourceId: 'Phoenix', value: 0.2 },
                { taskId: 1, resourceId: 'Aries', value: 0.2 },
                { taskId: 1, resourceId: 'Pegasus', value: 0.2 },
                { taskId: 1, resourceId: 'Dragon', value: 0.2 },
                { taskId: 1, resourceId: 'Cygnus', value: 0.2 },
                { taskId: 1, resourceId: 'Andromeda', value: 0.2 },
                { taskId: 2, resourceId: 'Taurus', value: 0.5 },
                { taskId: 2, resourceId: 'Pegasus', value: 0.5 },
                { taskId: 3, resourceId: 'Gemini', value: 0.5 },
                { taskId: 3, resourceId: 'Andromeda', value: 0.5 },
                { taskId: 4, resourceId: 'Cancer', value: 0.5 },
                { taskId: 4, resourceId: 'Dragon', value: 0.5 },
                { taskId: 5, resourceId: 'Leo', value: 0.5 },
                { taskId: 5, resourceId: 'Pegasus', value: 0.5 },
                { taskId: 6, resourceId: 'Virgo', value: 0.5 },
                { taskId: 6, resourceId: 'Phoenix', value: 0.5 },
                { taskId: 7, resourceId: 'Libra', value: 0.5 },
                { taskId: 7, resourceId: 'Dragon', value: 0.5 },
                { taskId: 8, resourceId: 'Scorpion', value: 0.5 },
                { taskId: 8, resourceId: 'Cygnus', value: 0.5 },
                { taskId: 9, resourceId: 'Sagittarius', value: 0.2 },
                { taskId: 9, resourceId: 'Pegasus', value: 0.2 },
                { taskId: 9, resourceId: 'Dragon', value: 0.2 },
                { taskId: 9, resourceId: 'Cygnus', value: 0.2 },
                { taskId: 9, resourceId: 'Andromeda', value: 0.2 },
                { taskId: 10, resourceId: 'Capricorn', value: 0.5 },
                { taskId: 10, resourceId: 'Dragon', value: 0.5 },
                { taskId: 11, resourceId: 'Aquarius', value: 0.5 },
                { taskId: 11, resourceId: 'Cygnus', value: 0.5 },
                { taskId: 12, resourceId: 'Picses', value: 0.5 },
                { taskId: 12, resourceId: 'Andromeda', value: 0.5 },
                { taskId: 13, resourceId: 'Gemini', value: 0.5 },
                { taskId: 13, resourceId: 'Pegasus', value: 0.25 },
                { taskId: 13, resourceId: 'Phoenix', value: 0.25 },
                { taskId: 14, resourceId: 'Pegasus', value: 1 },
                { taskId: 15, resourceId: 'Aries', value: 1 },
                { taskId: 16, resourceId: 'Pegasus', value: 0.25 },
                { taskId: 16, resourceId: 'Dragon', value: 0.25 },
                { taskId: 16, resourceId: 'Cygnus', value: 0.25 },
                { taskId: 16, resourceId: 'Andromeda', value: 0.25 },
                { taskId: 17, resourceId: 'Taurus', value: 1 },
                { taskId: 18, resourceId: 'Pegasus', value: 1 },
                { taskId: 19, resourceId: 'Gemini', value: 1 },
                { taskId: 20, resourceId: 'Andromeda', value: 1 },
                { taskId: 21, resourceId: 'Cancer', value: 1 },
                { taskId: 22, resourceId: 'Dragon', value: 1 },
                { taskId: 23, resourceId: 'Leo', value: 1 },
                { taskId: 24, resourceId: 'Pegasus', value: 1 },
                { taskId: 25, resourceId: 'Virgo', value: 1 },
                { taskId: 26, resourceId: 'Phoenix', value: 1 },
                { taskId: 27, resourceId: 'Libra', value: 1 },
                { taskId: 28, resourceId: 'Dragon', value: 1 },
                { taskId: 29, resourceId: 'Scorpion', value: 1 },
                { taskId: 30, resourceId: 'Cygnus', value: 1 },
                { taskId: 31, resourceId: 'Sagittarius', value: 1 },
                { taskId: 32, resourceId: 'Pegasus', value: 0.25 },
                { taskId: 32, resourceId: 'Dragon', value: 0.25 },
                { taskId: 32, resourceId: 'Cygnus', value: 0.25 },
                { taskId: 32, resourceId: 'Andromeda', value: 0.25 },
                { taskId: 33, resourceId: 'Capricorn', value: 1 },
                { taskId: 34, resourceId: 'Dragon', value: 1 },
                { taskId: 35, resourceId: 'Aquarius', value: 1 },
                { taskId: 36, resourceId: 'Cygnus', value: 1 },
                { taskId: 37, resourceId: 'Picses', value: 1 },
                { taskId: 38, resourceId: 'Andromeda', value: 1 },
                { taskId: 39, resourceId: 'Gemini', value: 0.5 },
                { taskId: 39, resourceId: 'Pegasus', value: 0.25 },
                { taskId: 39, resourceId: 'Phoenix', value: 0.25 },
                { taskId: 40, resourceId: 'Pegasus', value: 1 }
            ]
        },
        toolbar: ['append', 'pdf'],
        views: [
            { type: 'day',
                selected: true,
                range: {
                    start: new Date('2019/8/14'),
                    end: new Date('2019/8/17')
                },
                slotSize: 160,
                timeHeaderTemplate: '#= kendo.toString(start, "HH时") #',
                dayHeaderTemplate: '#= kendo.toString(start, "dddd MM月dd日") #',
                resizeTooltipFormat: 'MM月dd日 dddd HH时'
            },
            { type: 'week',
                range: {
                    start: new Date('2019/8/12'),
                    end: new Date('2019/8/24')
                },
                slotSize: 200,
                dayHeaderTemplate: '#= kendo.toString(start, "dddd MM月dd日") #',
                weekHeaderTemplate: '#= kendo.toString(start, "dddd MM月dd日") # - #= kendo.toString(kendo.date.addDays(end, -1), "dddd MM月dd日") #',
                resizeTooltipFormat: 'MM月dd日 dddd'
            },
            { type: 'month',
                range: {
                    start: new Date('2019/7/1'),
                    end: new Date('2019/9/30')
                },
                slotSize: 240,
                weekHeaderTemplate: '#= kendo.toString(start, "ddd MM月dd日") # - #= kendo.toString(kendo.date.addDays(end, -1), "ddd MM月dd日") #',
                monthHeaderTemplate: '#= kendo.toString(start, "MM月") #',
                resizeTooltipFormat: 'yyyy年MM月dd日 dddd'
            },
            { type: 'year',
                monthHeaderTemplate: '#= kendo.toString(start, "MM月") #',
                yearHeaderTemplate: '#= kendo.toString(start, "yyyy年") #',
                resizeTooltipFormat: 'yyyy年MM月dd日 dddd'
            }
        ],
        pdf: {
            fileName: 'Gantt.pdf',
            creator: 'IKKI Studio',
            author: 'IKKI & Amikoko',
            title: '甘特图展示',
            subject: '黄金十二宫',
            keywords: 'Gold Saint',
            landscape: true,
            avoidLinks: true
        },
        columns: [
            { field: 'title', title: '任务', width: 200, editable: true, sortable: true },
            { field: 'resources', title: '资源分配', width: 220, editable: true },
            { field: 'percentComplete', title: '完成度', format: '{0:p}', width: 90, editable: true, sortable: true },
            { field: 'start', title: '开始时间', format: '{0:HH:mm}', width: 90, editable: true, sortable: true },
            { field: 'end', title: '结束时间', format: '{0:HH:mm}', width: 90, editable: true, sortable: true }
        ],
        date: new Date('2019/8/15'),
        workDayStart: new Date('2019/8/15 11:00 AM'),
        workDayEnd: new Date('2019/8/15 11:00 PM'),
        taskTemplate:
            '# if (resources.length > 0) { #' +
                '# if (resources.length > 1) { #' +
                    '# for (var i = 0; i < resources.length; i++) { #' +
                        '<img class="img-s m-1" src="img/temp/#: resources[i].id #.png" alt="#: resources[i].id #">' +
                    '# } #' +
                    '#: title #' +
                '# } else { #' +
                    '<div style="border-top-left-radius: 4px; background-color: #: resources[0].color #;">' +
                        '<img class="img-s m-1" src="img/temp/#: resources[0].id #.png" alt="#: resources[0].id #">' +
                        '#: title #' +
                    '</div>' +
                '# } #' +
                '<div class="progress" style="height: 3px;">' +
                    '<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: #: percentComplete * 100 #%; background-color: #: resources[0].color #;"></div>' +
                '</div>' +
            '# } #',
        resizable: true,
        navigatable: true,
        rowHeight: 50
    });
});