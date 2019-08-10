$(function () {
    // DOM 单选下拉框
    $('#domDropDownList').kendoDropDownList({
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
    // 普通单选下拉框
    $('#generalDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        autoWidth: true,
        height: 500
    });
    // 只读单选下拉框
    $('#readonlyDropDownList').kendoDropDownList({
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
    }).data('kendoDropDownList').readonly();
    // 禁用单选下拉框
    $('#disabledDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        enable: false
    });
    // 默认值单选下拉框
    $('#defaultValueDropDownList').kendoDropDownList({
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
    // 筛选单选下拉框
    $('#filterDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains',
        delay: 300,
        minLength: 2,
        enforceMinLength: true
    });
    // 自定义首尾单选下拉框
    $('#headerFooterDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        height: 300,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.data().length #</strong>项 =-</small></div>'
    });
    // 自定义分组单选下拉框
    $('#groupDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        height: 300,
        fixedGroupTemplate: '<div class="text-center theme-m">当前：<i class="fas fa-star mr-2"></i>#: data #</div>',
        groupTemplate: '<i class="fas fa-star mr-2"></i>#: data #'
    });
    // 自定义列表项单选下拉框
    $('#customDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'photo.url',
        dataTextField: 'realName',
        height: 540,
        template: '<img class="w-25 rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #',
        valueTemplate: '<img class="w-15 border rounded-circle mr-2" src="#: photo.url #" alt="#: realName #">#: realName #'
    });
    // 新增项单选下拉框
    $('#addItemDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains',
        noDataTemplate: '<p>无相关数据</p><p>是否新增<strong class="theme-m font-weight-bold mx-1">#: instance.filterInput.val() #</strong>？</p><button class="k-button theme-m-bg border-0 rounded" type="button" onclick="addNewItem(\'#: instance.element[0].id #\', \'#: instance.filterInput.val() #\');">新增此项</button>'
    });
    // 自定义占位符单选下拉框
    $('#placeholderDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        optionLabelTemplate: '<i class="flag-icon flag-icon-cn mr-2"></i>请选择',
        dataValueField: 'code',
        dataTextField: 'name'
    });
    // 等宽单选下拉框
    $('#widthDropDownList').kendoDropDownList({
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
        optionLabel: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name'
    });
});

// 新增一项
function addNewItem(widgetId, value) {
    var dataSource = $('#' + widgetId).data('kendoDropDownList').dataSource;
    dataSource.add({
        code: 0,
        name: value
    });
    dataSource.one('sync', function () {
        $('#' + widgetId).data('kendoDropDownList').select(dataSource.view().length - 1);
    });
    dataSource.sync();
}