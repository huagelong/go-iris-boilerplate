$(function () {
    // DOM 表格下拉框
    $('#domMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        dropDownWidth: 300
    });
    // 普通表格下拉框
    $('#generalMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        dropDownWidth: 300,
        height: 500,
        suggest: true
    });
    // 只读表格下拉框
    $('#readonlyMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        value: '31',
        clearButton: false
    }).data('kendoMultiColumnComboBox').readonly();
    // 禁用表格下拉框
    $('#disabledMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        enable: false
    });
    // 默认值表格下拉框
    $('#defaultValueMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        dropDownWidth: 300,
        value: '31'
    });
    // 筛选表格下拉框
    $('#filterMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        dropDownWidth: 300,
        filter: 'contains',
        filterFields: ['code', 'name'],
        delay: 300,
        minLength: 2,
        enforceMinLength: true
    });
    // 自定义首尾表格下拉框
    $('#headerFooterMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        dropDownWidth: 300,
        height: 300,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.total() #</strong>项 =-</small></div>'
    });
    // 自定义分组表格下拉框
    $('#groupMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/cities.json',
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
            group: {
                field: 'provinceName'
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        height: 300,
        fixedGroupTemplate: '<div class="text-center theme-m">当前：<i class="fas fa-star mr-2"></i>#: data #</div>',
        groupTemplate: '<i class="fas fa-star mr-2"></i>#: data #'
    });
    // 自定义列表项表格下拉框
    $('#customMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/list.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'id',
        dataTextField: 'realName',
        columns: [
            {
                field: 'realName',
                headerTemplate: '<div class="d-flex align-items-center"><i class="fas fa-2x fa-user-circle mr-2"></i><strong>姓名</strong></div>',
                width: 124,
                template: '<img class="w-25 rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>昵称</strong></div>',
                width: 105,
                template: '#: nickName #'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>性别</strong><i class="fas fa-venus-mars ml-2"></i></div>',
                width: 70,
                template:
                    '# if (gender === "1") { #' +
                        '男<i class="fas fa-mars mars ml-2"></i>' +
                    '# } else if (gender === "2") { #' +
                        '女<i class="fas fa-venus venus ml-2"></i>' +
                    '# } #'
            },
            {
                headerTemplate: '<div class="mb-1"><i class="fas fa-genderless mr-2"></i><strong>状态</strong></div>',
                width: 70,
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>年龄</strong></div>',
                width: 70,
                template: '#: age # 岁'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>身高</strong></div>',
                width: 70,
                template: '#: kendo.toString(height, "0.00") # m'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>血型</strong></div>',
                width: 64,
                template:
                    '# if (bloodType === "1") { #' +
                        'A 型' +
                    '# } else if (bloodType === "2") { #' +
                        'B 型' +
                    '# } else if (bloodType === "3") { #' +
                        'O 型' +
                    '# } else if (bloodType === "4") { #' +
                        'AB 型' +
                    '# } else if (bloodType === "5") { #' +
                        '其他' +
                    '# } #'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>生日</strong></div>',
                width: 105,
                template: '#: birthday #'
            },
            {
                headerTemplate: '<div class="mb-1"><strong>生肖</strong></div>',
                width: 50,
                template: '#: zodiac.zodiacName #'
            }
        ],
        height: 520
    });
    // 新增项表格下拉框
    $('#addItemMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ],
        dropDownWidth: 300,
        filter: 'contains',
        filterFields: ['code', 'name'],
        noDataTemplate: '<p>无相关数据</p><p>是否新增<strong class="theme-m font-weight-bold mx-1">#: instance.text() #</strong>？</p><button class="k-button theme-m-bg border-0 rounded" type="button" onclick="addNewItem(\'#: instance.element[0].id #\', \'#: instance.text() #\');">新增此项</button>'
    });

    // 等宽表格下拉框
    $('#widthMultiColumnComboBox').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/provinces.json',
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
            }
        },
        placeholder: '-= 请输入 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '名称' }
        ]
    });
});

// 新增一项
function addNewItem(widgetId, value) {
    var dataSource = $('#' + widgetId).data('kendoMultiColumnComboBox').dataSource;
    dataSource.add({
        code: 0,
        name: value
    });
    dataSource.one('sync', function () {
        $('#' + widgetId).data('kendoMultiColumnComboBox').select(dataSource.view().length - 1);
    });
    dataSource.sync();
}