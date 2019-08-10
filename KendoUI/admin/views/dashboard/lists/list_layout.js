$(function () {
    // 年龄
    numericRange($('#ageStart'), $('#ageEnd'), 'n0', 0, 1, 1, 120);
    // 身高
    numericRange($('#heightStart'), $('#heightEnd'), '0.00 m', 2, 0.01, 1.01, 3.00);
    // 血型
    $('#bloodType').kendoDropDownList();
    // 生日
    dateRange($('#birthdayStart'), $('#birthdayEnd'), 'Date');
    // 配偶生日
    dateInputRange($('#mateBirthdayStart'), $('#mateBirthdayEnd'), 'Date');
    // 银行卡
    $('#creditCard').kendoMaskedTextBox({
        mask: '0000 0000 0000 0000'
    });
    // 资产
    numericRange($('#assetStart'), $('#assetEnd'), 'c', 2, 10000, 0, 10000000000);
    // 籍贯
    $('#province').kendoDropDownList({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/province.json',
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
        dataValueField: 'province',
        dataTextField: 'provinceName',
        filter: 'contains'
    });
    $('#city').kendoDropDownList({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/city.json',
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
        optionLabel: '-= 城市 =-',
        dataValueField: 'city',
        dataTextField: 'cityName',
        filter: 'contains'
    });
    $('#area').kendoDropDownList({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/area.json',
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
        optionLabel: '-= 区县 =-',
        dataValueField: 'area',
        dataTextField: 'areaName',
        filter: 'contains'
    });
    // 居住地
    $('#domicile').kendoDropDownTree({
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
        placeholder: '树形下拉单选框',
        dataValueField: 'code',
        dataTextField: 'name',
        loadOnDemand: true,
        filter: 'contains'
    });
    // 民族
    $('#nation').kendoComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/nation.json',
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
        dataValueField: 'nation',
        dataTextField: 'nationName',
        suggest: true
    });
    // 生肖
    $('#zodiac').kendoMultiColumnComboBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/zodiac.json',
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
        dataValueField: 'zodiac',
        dataTextField: 'zodiacName',
        columns: [
            { field: 'zodiacName', title: '生肖', width: '56px' },
            { field: 'zodiacValue1', title: '年份', width: '60px' },
            { field: 'zodiacValue2', title: '年份', width: '60px' },
            { field: 'zodiacValue3', title: '年份', width: '60px' },
            { field: 'zodiacValue4', title: '年份', width: '60px' },
            { field: 'zodiacValue5', title: '年份', width: '60px' }
        ],
        filter: 'contains',
        filterFields: ['zodiacValue1', 'zodiacValue2', 'zodiacValue3', 'zodiacValue4', 'zodiacValue5'],
        minLength: 4,
        suggest: true
    });
    // 语言
    $('#language').kendoAutoComplete({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/language.json',
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
        dataTextField: 'language',
        suggest: true,
        separator: ' '
    });
    // 毕业年份
    dateRange($('#graduationStart'), $('#graduationEnd'), 'Year');
    // 参加工作年月
    dateRange($('#firstJobStart'), $('#firstJobEnd'), 'Month');
    // 起床时间
    dateRange($('#getUpStart'), $('#getUpEnd'), 'Time');
    // 最有意义的时刻
    dateRange($('#importantMomentStart'), $('#importantMomentEnd'), 'DateTime');
    // 性格
    $('#character').kendoSlider({
        decreaseButtonTitle: '内向',
        increaseButtonTitle: '开朗',
        min: -10,
        max: 10,
        smallStep: 2,
        largeStep: 0,
        tooltip: {
            template:
                '# if (value === 10) { #' +
                    '超级开朗' +
                '# } else if (value === 8) { #' +
                    '非常开朗' +
                '# } else if (value === 6) { #' +
                    '很开朗' +
                '# } else if (value === 4) { #' +
                    '比较开朗' +
                '# } else if (value === 2) { #' +
                    '有点开朗' +
                '# } else if (value === 0) { #' +
                    '普通' +
                '# } else if (value === -2) { #' +
                    '有点内向' +
                '# } else if (value === -4) { #' +
                    '比较内向' +
                '# } else if (value === -6) { #' +
                    '很内向' +
                '# } else if (value === -8) { #' +
                    '非常内向' +
                '# } else if (value === -10) { #' +
                    '超级内向' +
                '# } #'
        }
    });
    // 颜色喜好
    $('#color').kendoColorPicker({
        opacity: true,
        buttons: false
    });
    // 相配的星座
    $('#constellation').kendoMultiSelect({
        placeholder: '多选下拉框',
        autoClose: false
    });
    // 旅游足迹
    $('#tourism').kendoDropDownTree({
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
        placeholder: '树形下拉多选框',
        dataValueField: 'code',
        dataTextField: 'name',
        loadOnDemand: true,
        filter: 'contains',
        checkboxes: true,
        autoClose: false
    });
    // 是否在线
    $('#online').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        checked: true
    });
    // 生成工具条
    $('#toolbar').kendoToolBar({
        resizable: false,
        items: [
            { type: 'spacer' },
            { template: '<a class="k-button k-button-icontext orderBtn" href="javascript:;" onclick="order(\'desc\');"><span class="k-icon k-i-sort-asc-sm"></span>升序</a><a class="k-button k-button-icontext orderBtn hide" href="javascript:;" onclick="order(\'asc\');"><span class="k-icon k-i-sort-desc-sm"></span>降序</a>' },
            { template: '<input class="k-textbox w-100" id="search" name="search" type="text" placeholder="搜索...">' },
            { template: '<select class="w-100" id="filter" name="filter"></select>' }
        ]
    });
    // 筛选
    $('#filter').kendoDropDownList({
        dataSource: {
            data: [
                { text: '男', value: '1' },
                { text: '女', value: '2' }
            ]
        },
        optionLabel: "- 筛选 -",
        dataValueField: 'value',
        dataTextField: 'text',
        change: function (e) {
            $('#listView').data('kendoListView').dataSource.filter({
                field: 'gender',
                operator: 'contains',
                value: this.value()
            });
        }
    });
    // 定义数据源
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: function (options) { readItem(options, 'json/list.json') }
        },
        schema: {
            total: 'total',
            data: 'data',
            model: {
                id: 'id',
                fields: {
                    userName: { type: 'string' },
                    realName: { type: 'string' },
                    nickName: { type: 'string' },
                    password: { type: 'string' },
                    confirmPassword: { type: 'string' },
                    online: { type: 'boolean' },
                    gender: { type: 'string' },
                    age: { type: 'number' },
                    height: { type: 'number' },
                    bloodType: { type: 'string' },
                    birthday: { type: 'date',
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                        }
                    },
                    mateBirthday: { type: 'date',
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                        }
                    },
                    creditCard: { type: 'string' },
                    asset: { type: 'number' },
                    nativePlace: { type: 'object' },
                    domicile: { type: 'object' },
                    nation: { type: 'object' },
                    zodiac: { type: 'object' },
                    language: { type: 'string' },
                    education: { type: 'object' },
                    graduation: { type: 'date',
                        parse: function (e) {
                            return kendo.toString(new Date(e), 'yyyy');
                        }
                    },
                    firstJob: { type: 'date',
                        parse: function (e) {
                            return kendo.toString(new Date(e), 'yyyy-MM');
                        }
                    },
                    mobile: { type: 'string' },
                    email: { type: 'string' },
                    homepage: { type: 'string' },
                    getUp: { type: 'date',
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'HH:mm');
                        }
                    },
                    importantMoment: { type: 'date',
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd HH:mm');
                        }
                    },
                    character: { type: 'number' },
                    color: { type: 'string' },
                    constellation: { type: 'object' },
                    tourism: { type: 'object' },
                    summary: { type: 'string' },
                    photo: { type: 'object' },
                    sign: { type: 'string' }
                }
            }
        },
        pageSize: 12
    });
    // 获取数据源生成列表
    $('#listView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#listTemplate').html())
    });
    // 获取数据源并分页
    $('#pager').kendoPager({
        dataSource: dataSource,
        buttonCount: 5,
        input: true,
        pageSizes: [5, 10, 15, 20, 25, 30, 50, 100, 'all'],
        refresh: true
    });
    // 搜索
    $('#search').keyup(function () {
        $('#listView').data('kendoListView').dataSource.filter({
            logic: 'or',
            filters: [
                { field: 'userName', operator: 'contains', value: $(this).val() },
                { field: 'realName', operator: 'contains', value: $(this).val() },
                { field: 'nickName', operator: 'contains', value: $(this).val() },
                { field: 'age', operator: 'eq', value: $(this).val() },
                { field: 'height', operator: 'eq', value: $(this).val() },
                { field: 'birthday', operator: 'contains', value: $(this).val() },
                { field: 'creditCard', operator: 'contains', value: $(this).val() },
                { field: 'asset', operator: 'contains', value: $(this).val() },
                { field: 'language', operator: 'contains', value: $(this).val() },
                { field: 'mobile', operator: 'contains', value: $(this).val() },
                { field: 'email', operator: 'contains', value: $(this).val() },
                { field: 'homepage', operator: 'contains', value: $(this).val() }
            ]
        });
    });
    // 文本
    $('#textView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#textTemplate').html())
    });
    // 图片
    $('#pictureView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#pictureTemplate').html())
    });
    // 条状
    $('#stripView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#stripTemplate').html())
    });
    // 块状
    $('#blockView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#blockTemplate').html())
    });
});

// 排序
function order(dir) {
    $('#listView').data('kendoListView').dataSource.sort({
        field: 'id',
        dir: dir
    });
    $('.orderBtn').toggle();
}