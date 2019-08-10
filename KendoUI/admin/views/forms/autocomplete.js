$(function () {
    // DOM 自动完成框
    $('#domAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        separator: ','
    });
    // 普通自动完成框
    $('#generalAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        autoWidth: true,
        height: 500,
        suggest: true,
        separator: ','
    });
    // 只读自动完成框
    $('#readonlyAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        separator: ',',
        value: '北京市,上海市',
        clearButton: false
    }).data('kendoAutoComplete').readonly();
    // 禁用自动完成框
    $('#disabledAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        enable: false
    });
    // 默认值自动完成框
    $('#defaultValueAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        separator: ',',
        value: '北京市,上海市'
    });
    // 筛选自动完成框
    $('#filterAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        filter: 'contains',
        delay: 300,
        minLength: 2,
        enforceMinLength: true
    });
    // 自定义首尾自动完成框
    $('#headerFooterAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        height: 300,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.total() #</strong>项 =-</small></div>'
    });
    // 自定义分组自动完成框
    $('#groupAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        height: 300,
        fixedGroupTemplate: '<div class="text-center theme-m">当前：<i class="fas fa-star mr-2"></i>#: data #</div>',
        groupTemplate: '<i class="fas fa-star mr-2"></i>#: data #'
    });
    // 自定义列表项自动完成框
    $('#customAutoComplete').kendoAutoComplete({
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
        dataTextField: 'realName',
        height: 520,
        template: '<img class="w-25 rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #'
    });
    // 新增项自动完成框
    $('#addItemAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        filter: 'contains',
        noDataTemplate: '<p>无相关数据</p><p>是否新增<strong class="theme-m font-weight-bold mx-1">#: instance.element.val() #</strong>？</p><button class="k-button theme-m-bg border-0 rounded" type="button" onclick="addNewItem(\'#: instance.element[0].id #\', \'#: instance.element.val() #\');">新增此项</button>'
    });
    // 自定义分隔符自动完成框
    $('#separatorAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name',
        separator: ['、', '，', '；', ' ', ',', ';']
    });
    // 等宽自动完成框
    $('#widthAutoComplete').kendoAutoComplete({
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
        dataTextField: 'name'
    });
});

// 新增一项
function addNewItem(widgetId, value) {
    var dataSource = $('#' + widgetId).data('kendoAutoComplete').dataSource;
    dataSource.add({
        code: 0,
        name: value
    });
    dataSource.one('sync', function () {
        $('#' + widgetId).data('kendoAutoComplete').close();
    });
    dataSource.sync();
}