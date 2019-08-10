$(function () {
    // 提示
    noticeMsg('省市区数据量大~ 请耐心等候~ 载入中……', 'info', 'center', 10000);
    // 自动完成框分组
    $('#autoCompleteGroup').kendoAutoComplete({
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
        dataTextField: 'name',
        height: 500,
        suggest: true,
        separator: ' '
    });
    // 单选下拉框分组
    $('#dropDownListGroup').kendoDropDownList({
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
        height: 500
    });
    // 输入下拉框分组
    $('#comboBoxGroup').kendoComboBox({
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
        height: 500,
        suggest: true
    });
    // 表格下拉框分组
    $('#multiColumnComboBoxGroup').kendoMultiColumnComboBox({
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
            { field: 'provinceName', title: '省份' },
            { field: 'provinceCode', title: '省份编码' },
            { field: 'name', title: '城市' },
            { field: 'code', title: '城市编码' }
        ],
        filter: 'contains',
        filterFields: ['name', 'code', 'provinceCode', 'provinceName'],
        height: 500,
        suggest: true
    });
    // 多选下拉框分组
    $('#multiSelectGroup').kendoMultiSelect({
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
        height: 500,
        autoClose: false
    });
    // 树形下拉框多选
    $('#dropDownTreeMulti').kendoDropDownTree({
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
        height: 500,
        loadOnDemand: true,
        autoClose: false
    });
    // 省市县乡村五级联动（乡镇和村庄的数据太大，故予以注释处理~）
    $('#province').kendoDropDownList({
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
        optionLabel: '-= 省份 =-',
        dataValueField: 'code',
        dataTextField: 'name'
    });
    $('#city').kendoDropDownList({
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
            }
        },
        autoBind: false,
        cascadeFrom: 'province',
        cascadeFromField: 'provinceCode',
        optionLabel: '-= 城市 =-',
        dataValueField: 'code',
        dataTextField: 'name'
    });
    $('#area').kendoDropDownList({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/areas.json',
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
        autoBind: false,
        cascadeFrom: 'city',
        cascadeFromField: 'cityCode',
        optionLabel: '-= 区县 =-',
        dataValueField: 'code',
        dataTextField: 'name'
    });
    // $('#street').kendoDropDownList({
    //     dataSource: {
    //         transport: {
    //             read: function (options) {
    //                 $.fn.ajaxPost({
    //                     ajaxUrl: 'json/streets.json',
    //                     succeed: function (res) {
    //                         options.success(res);
    //                     },
    //                     failed: function (res) {
    //                         options.error(res);
    //                     }
    //                 });
    //             }
    //         },
    //         schema: {
    //             data: 'data'
    //         }
    //     },
    //     autoBind: false,
    //     cascadeFrom: 'area',
    //     cascadeFromField: 'areaCode',
    //     optionLabel: '-= 乡镇 =-',
    //     dataValueField: 'code',
    //     dataTextField: 'name'
    // });
    // $('#village').kendoDropDownList({
    //     dataSource: {
    //         transport: {
    //             read: function (options) {
    //                 $.fn.ajaxPost({
    //                     ajaxUrl: 'json/villages.json',
    //                     succeed: function (res) {
    //                         options.success(res);
    //                     },
    //                     failed: function (res) {
    //                         options.error(res);
    //                     }
    //                 });
    //             }
    //         },
    //         schema: {
    //             data: 'data'
    //         }
    //     },
    //     autoBind: false,
    //     cascadeFrom: 'street',
    //     cascadeFromField: 'streetCode',
    //     optionLabel: '-= 村庄 =-',
    //     dataValueField: 'code',
    //     dataTextField: 'name'
    // });
    // 省市区三级联动
    $('#province2').kendoComboBox({
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
        placeholder: '-= 省份 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains'
    });
    $('#city2').kendoComboBox({
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
            }
        },
        autoBind: false,
        cascadeFrom: 'province2',
        cascadeFromField: 'provinceCode',
        placeholder: '-= 城市 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains'
    });
    $('#area2').kendoComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/areas.json',
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
        autoBind: false,
        cascadeFrom: 'city2',
        cascadeFromField: 'cityCode',
        placeholder: '-= 区县 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        filter: 'contains'
    });
    // 省市二级联动
    $('#province3').kendoMultiColumnComboBox({
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
        placeholder: '-= 省份 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '省份' }
        ],
        filter: 'contains',
        filterFields: ['name', 'code']
    });
    $('#city3').kendoMultiColumnComboBox({
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
            }
        },
        autoBind: false,
        cascadeFrom: 'province3',
        cascadeFromField: 'provinceCode',
        placeholder: '-= 城市 =-',
        dataValueField: 'code',
        dataTextField: 'name',
        columns: [
            { field: 'code', title: '编码' },
            { field: 'name', title: '城市' }
        ],
        filter: 'contains',
        filterFields: ['name', 'code']
    });
});