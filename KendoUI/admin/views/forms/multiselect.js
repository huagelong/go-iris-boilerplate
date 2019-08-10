$(function () {
    // DOM 多选下拉框
    $('#domMultiSelect').kendoMultiSelect({
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
        autoClose: false
    });
    // 普通多选下拉框
    $('#generalMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        autoWidth: true,
        height: 500,
        autoClose: false
    });
    // 只读多选下拉框
    $('#readonlyMultiSelect').kendoMultiSelect({
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
        value: ['11', '31'],
        clearButton: false
    }).data('kendoMultiSelect').readonly();
    // 禁用多选下拉框
    $('#disabledMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        enable: false
    });
    // 默认值多选下拉框
    $('#defaultValueMultiSelect').kendoMultiSelect({
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
        value: ['11', '31'],
        autoClose: false
    });
    // 筛选多选下拉框
    $('#filterMultiSelect').kendoMultiSelect({
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
    // 自定义首尾多选下拉框
    $('#headerFooterMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        height: 300,
        autoClose: false,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.data().length #</strong>项 =-</small></div>'
    });
    // 自定义分组多选下拉框
    $('#groupMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        height: 300,
        autoClose: false,
        fixedGroupTemplate: '<div class="text-center theme-m">当前：<i class="fas fa-star mr-2"></i>#: data #</div>',
        groupTemplate: '<i class="fas fa-star mr-2"></i>#: data #'
    });
    // 自定义列表项多选下拉框
    $('#customMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'photo.url',
        dataTextField: 'realName',
        height: 520,
        autoClose: false,
        itemTemplate: '<img class="w-10 rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #',
        tagTemplate: '<div class="d-flex align-items-center"><img class="border rounded-circle mr-2" src="#: photo.url #" alt="#: realName #">#: realName #</div>'
    });
    // 新增项多选下拉框
    $('#addItemMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains',
        noDataTemplate: '<p>无相关数据</p><p>是否新增<strong class="theme-m font-weight-bold mx-1">#: instance.input.val() #</strong>？</p><button class="k-button theme-m-bg border-0 rounded" type="button" onclick="addNewItem(\'#: instance.element[0].id #\', \'#: instance.input.val() #\');">新增此项</button>'
    });
    // 统计模式多选下拉框
    $('#tagMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        autoClose: false,
        tagMode: 'single',
        tagTemplate: '#: values.length # 项已选择'
    });
    // 数量限制多选下拉框
    $('#maxMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        maxSelectedItems: 3,
        autoClose: false
    });
    // 等宽多选下拉框
    $('#widthMultiSelect').kendoMultiSelect({
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
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        autoClose: false
    });
});

// 新增一项
function addNewItem(widgetId, value) {
    var dataSource = $('#' + widgetId).data('kendoMultiSelect').dataSource;
    dataSource.add({
        code: 0,
        name: value
    });
    dataSource.one('requestEnd', function (args) {
        if (args.type !== 'create') {
            return;
        }
        dataSource.one('sync', function () {
            $('#' + widgetId).data('kendoMultiSelect').value($('#' + widgetId).data('kendoMultiSelect').value().concat([args.response[0].code]));
        });
    });
    dataSource.sync();
}