$(function () {
    // DOM 树形单选下拉框
    $('#domDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        loadOnDemand: true
    });
    // 普通树形单选下拉框
    $('#generalDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        autoWidth: true,
        height: 500,
        loadOnDemand: true
    });
    // 普通树形多选下拉框
    $('#generalMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        height: 500,
        loadOnDemand: true,
        autoClose: false
    });
    // 只读树形单选下拉框
    $('#readonlyDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        value: '31',
        clearButton: false,
        loadOnDemand: true
    }).data('kendoDropDownTree').readonly();
    // 只读树形多选下拉框
    $('#readonlyMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        value: ['11', '31'],
        clearButton: false,
        loadOnDemand: true
    }).data('kendoDropDownTree').readonly();
    // 禁用树形单选下拉框
    $('#disabledDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        enable: false,
        loadOnDemand: true
    });
    // 禁用树形多选下拉框
    $('#disabledMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        enable: false,
        loadOnDemand: true
    });
    // 默认值树形单选下拉框
    $('#defaultValueDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        value: '31',
        loadOnDemand: true
    });
    // 默认值树形多选下拉框
    $('#defaultValueMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        value: ['11', '31'],
        loadOnDemand: true,
        autoClose: false
    });
    // 筛选树形单选下拉框
    $('#filterDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains',
        delay: 300,
        minLength: 2,
        enforceMinLength: true
    });
    // 筛选树形多选下拉框
    $('#filterMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        autoClose: false,
        filter: 'contains',
        delay: 300,
        minLength: 2,
        enforceMinLength: true
    });
    // 自定义首尾树形单选下拉框
    $('#headerFooterDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        loadOnDemand: true,
        height: 300,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.data().length #</strong>项 =-</small></div>'
    });
    // 自定义首尾树形多选下拉框
    $('#headerFooterMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        loadOnDemand: true,
        autoClose: false,
        height: 300,
        headerTemplate: '<div class="p-2 text-center theme-m-bg"><i class="flag-icon flag-icon-cn mr-2"></i>中国行政区划</div>',
        footerTemplate: '<div class="p-1 text-center theme-s-bg"><small>-= 已找到<strong class="mx-1">#: instance.dataSource.data().length #</strong>项 =-</small></div>'
    });
    // 自定义列表项树形单选下拉框
    $('#customDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/tree.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'id',
        dataTextField: 'text',
        dataSpriteCssClassField: 'spriteCssClass',
        dataImageUrlField: 'imageUrl',
        dataUrlField: 'url',
        loadOnDemand: true,
        template:
            '# if (item.imageUrl) { #' +
                '<i class="fas fa-star ml-2 mr-1"></i>#: (item.text).substr(0, 3) #：<img class="rounded-circle mr-2" src="#: item.imageUrl #" alt="#: item.text #">' +
            '# } else { #' +
                '#: item.text #' +
            '# } #',
        valueTemplate:
            '# if (typeof imageUrl !== "undefined") { #' +
                '<img class="border rounded-circle mr-2" src="#: imageUrl #" alt="#: text #">#: text #' +
            '# } else { #' +
                '<i class="#: spriteCssClass # mr-2"></i>#: text #' +
            '# } #'
    });
    // 自定义列表项树形多选下拉框
    $('#customMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/tree.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'id',
        dataTextField: 'text',
        dataSpriteCssClassField: 'spriteCssClass',
        dataImageUrlField: 'imageUrl',
        dataUrlField: 'url',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        loadOnDemand: true,
        autoClose: false,
        template:
            '# if (item.imageUrl) { #' +
                '<i class="fas fa-star ml-2 mr-1"></i>#: (item.text).substr(0, 3) #：<img class="rounded-circle mr-2" src="#: item.imageUrl #" alt="#: item.text #">' +
            '# } else { #' +
                '#: item.text #' +
            '# } #',
        valueTemplate:
            '# if (typeof imageUrl !== "undefined") { #' +
                '<img class="border rounded-circle mr-1" src="#: imageUrl #" alt="#: text #">#: text #' +
            '# } else { #' +
                '<i class="#: spriteCssClass # mr-1"></i>#: text #' +
            '# } #'
    });
    // 统计模式树形下拉框
    $('#tagDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        loadOnDemand: true,
        autoClose: false,
        tagMode: 'single'
    });
    // 等宽树形单选下拉框
    $('#widthDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        loadOnDemand: true
    });
    // 等宽树形多选下拉框
    $('#widthMultiDropDownTree').kendoDropDownTree({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/select_hierarchical_data.json',
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
                    children: 'items'
                }
            }
        },
        placeholder: '-= 请选择 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        checkboxes: {
            checkChildren: true
        },
        checkAll: true,
        checkAllTemplate: '全选',
        autoWidth: true,
        loadOnDemand: true,
        autoClose: false
    });
});

// 置空
function viewDetails(id) {}