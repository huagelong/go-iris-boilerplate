$(function () {
    // DOM 输入下拉框
    $('#domComboBox').kendoComboBox({
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
        dataTextField: 'name'
    });
    // 普通输入下拉框
    $('#generalComboBox').kendoComboBox({
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
        autoWidth: true,
        height: 500,
        suggest: true
    });
    // 只读输入下拉框
    $('#readonlyComboBox').kendoComboBox({
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
        value: '31',
        clearButton: false
    }).data('kendoComboBox').readonly();
    // 禁用输入下拉框
    $('#disabledComboBox').kendoComboBox({
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
        enable: false
    });
    // 默认值输入下拉框
    $('#defaultValueComboBox').kendoComboBox({
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
        value: '31'
    });
    // 筛选输入下拉框
    $('#filterComboBox').kendoComboBox({
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
        filter: 'contains',
        delay: 300,
        minLength: 2,
        enforceMinLength: true
    });
    // 自定义首尾输入下拉框
    $('#headerFooterComboBox').kendoComboBox({
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
        height: 300,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.total() #</strong>项 =-</small></div>'
    });
    // 自定义分组输入下拉框
    $('#groupComboBox').kendoComboBox({
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
        height: 300,
        fixedGroupTemplate: '<div class="text-center theme-m">当前：<i class="fas fa-star mr-2"></i>#: data #</div>',
        groupTemplate: '<i class="fas fa-star mr-2"></i>#: data #'
    });
    // 自定义列表项输入下拉框
    $('#customComboBox').kendoComboBox({
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
        height: 520,
        template: '<img class="w-25 rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #'
    });
    // 新增项输入下拉框
    $('#addItemComboBox').kendoComboBox({
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
        filter: 'contains',
        noDataTemplate: '<p>无相关数据</p><p>是否新增<strong class="theme-m font-weight-bold mx-1">#: instance.text() #</strong>？</p><button class="k-button theme-m-bg border-0 rounded" type="button" onclick="addNewItem(\'#: instance.element[0].id #\', \'#: instance.text() #\');">新增此项</button>'
    });
    // 等宽输入下拉框
    $('#widthComboBox').kendoComboBox({
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
        dataTextField: 'name'
    });
});

// 新增一项
function addNewItem(widgetId, value) {
    var dataSource = $('#' + widgetId).data('kendoComboBox').dataSource;
    dataSource.add({
        code: 0,
        name: value
    });
    dataSource.one('sync', function () {
        $('#' + widgetId).data('kendoComboBox').select(dataSource.view().length - 1);
    });
    dataSource.sync();
}