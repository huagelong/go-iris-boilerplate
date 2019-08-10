$(function () {
    // 生成工具条
    $('#toolbar').kendoToolBar({
        resizable: false,
        items: [
            { template: '<a class="k-button k-button-icontext k-state-selected k-add-button" href="javascript:;"><span class="k-icon k-i-add"></span>新增</a>' },
            { template: '<a class="k-button k-button-icontext theme-m-box k-save-button" href="javascript:;"><span class="k-icon k-i-check"></span>保存变更</a>' },
            { template: '<a class="k-button k-button-icontext k-cancel-button" href="javascript:;"><span class="k-icon k-i-cancel"></span>取消变更</a>' },
            { type: 'spacer' },
            { template: '<a class="k-button k-button-icontext orderBtn" id="orderBtnAsc" href="javascript:;"><span class="k-icon k-i-sort-asc-sm"></span>升序</a><a class="k-button k-button-icontext orderBtn hide" id="orderBtnDesc" href="javascript:;"><span class="k-icon k-i-sort-desc-sm"></span>降序</a>' },
            { template: '<input class="k-textbox w-100" id="search" name="search" type="text" placeholder="搜索...">' },
            { template: '<select class="w-100" id="filter" name="filter"></select>' }
        ]
    });
    // 新增
    $('.k-add-button').click(function (e) {
        $('#listView').data('kendoListView').add();
        e.preventDefault();
    });
    // 保存变更
    $('.k-save-button').click(function (e) {
        dataSource.sync();
        e.preventDefault();
    });
    // 取消变更
    $('.k-cancel-button').click(function (e) {
        dataSource.cancelChanges();
        e.preventDefault();
    });
    // 排序
    $('#orderBtnAsc').click(function (e) {
        dataSource.sort({
            field: 'id',
            dir: 'desc'
        });
        $('.orderBtn').toggle();
        e.preventDefault();
    });
    $('#orderBtnDesc').click(function (e) {
        dataSource.sort({
            field: 'id',
            dir: 'asc'
        });
        $('.orderBtn').toggle();
        e.preventDefault();
    });
    // 搜索
    $('#search').keyup(function () {
        dataSource.filter({
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
            dataSource.filter({
                field: 'gender',
                operator: 'contains',
                value: this.value()
            });
        }
    });
    // 创建数据源
    var dataSource = new kendo.data.DataSource({
        transport: {
            create: {
                url: 'json/response.json',
                dataType: 'json'
            },
            destroy: {
                url: 'json/response.json',
                dataType: 'json'
            },
            update: {
                url: 'json/response.json',
                dataType: 'json'
            },
            read: {
                url: 'json/list.json',
                dataType: 'json'
            },
            parameterMap: function (options, operation) {
                if (operation !== 'read' && options.models) {
                    return kendo.stringify(options.models);
                }
            }
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
                    age: { type: 'number',
                        defaultValue: null
                    },
                    height: { type: 'number',
                        defaultValue: null
                    },
                    bloodType: { type: 'string' },
                    birthday: { type: 'date',
                        defaultValue: null,
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                        }
                    },
                    mateBirthday: { type: 'date',
                        defaultValue: null,
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                        }
                    },
                    creditCard: { type: 'string',
                        parse: function (e) {
                            return e.replace(/\s*/g, '');
                        }
                    },
                    asset: { type: 'number',
                        defaultValue: null
                    },
                    nativePlace: { type: 'object',
                        defaultValue: {
                            province: '',
                            provinceName: '',
                            city: '',
                            cityName: '',
                            area: '',
                            areaName: ''
                        }
                    },
                    domicile: { type: 'object',
                        defaultValue: {
                            code: '',
                            name: ''
                        },
                        parse: function (e) {
                            var obj = {};
                            obj.code = e.code;
                            obj.name = e.name;
                            return obj;
                        }
                    },
                    nation: { type: 'object',
                        defaultValue: {
                            nation: '',
                            nationName: ''
                        }
                    },
                    zodiac: { type: 'object',
                        defaultValue: {
                            zodiac: '',
                            zodiacName: ''
                        },
                        parse: function (e) {
                            var obj = {};
                            obj.zodiac = e.zodiac;
                            obj.zodiacName = e.zodiacName;
                            return obj;
                        }
                    },
                    language: { type: 'string',
                        parse: function (e) {
                            return $.trim(e);
                        }
                    },
                    education: { type: 'object',
                        defaultValue: []
                    },
                    graduation: { type: 'date',
                        defaultValue: null,
                        parse: function (e) {
                            return kendo.toString(new Date(e), 'yyyy');
                        }
                    },
                    firstJob: { type: 'date',
                        defaultValue: null,
                        parse: function (e) {
                            return kendo.toString(new Date(e), 'yyyy-MM');
                        }
                    },
                    mobile: { type: 'string' },
                    email: { type: 'string' },
                    homepage: { type: 'string' },
                    getUp: { type: 'date',
                        defaultValue: null,
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'HH:mm');
                        }
                    },
                    importantMoment: { type: 'date',
                        defaultValue: null,
                        parse: function (e) {
                            return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd HH:mm');
                        }
                    },
                    character: { type: 'number' },
                    color: {
                        defaultValue: 'rgba(0, 0, 0, 0)',
                        parse: function (e) {
                            return 'rgba('+ kendo.parseColor(e).r +', '+ kendo.parseColor(e).g +', '+ kendo.parseColor(e).b +', '+ kendo.parseColor(e).a +')';
                        }
                    },
                    constellation: { type: 'object',
                        defaultValue: []
                    },
                    tourism: { type: 'object',
                        defaultValue: [],
                        parse: function (e) {
                            var arr = [];
                            for (var i = 0; i < e.length; i++) {
                                arr.push({
                                    code: e[i].code,
                                    name: e[i].name
                                });
                            }
                            return arr;
                        }
                    },
                    summary: { type: 'string' },
                    photo: { type: 'object',
                        defaultValue: {
                            url: 'img/avatar.png',
                            name: 'avatar',
                            extension: '.png',
                            size: 53284
                        }
                    },
                    sign: { type: 'string' }
                }
            }
        },
        pageSize: 1
    });
    // 获取数据源生成表格
    $('#grid').kendoGrid({
        dataSource: dataSource,
        columns: [
            { field: 'userName', title: '用户名', width: '80px' },
            { field: 'realName', title: '姓名', width: '100px' },
            { field: 'nickName', title: '昵称', width: '110px' },
            { field: 'password', title: '密码', width: '100px',
                template: function (dataItem) {
                    if (dataItem.password) {
                        return dataItem.password.replace(dataItem.password.substr(0), '******');
                    } else {
                        return '';
                    }
                },
                editor: function (container, options) {
                    $('<input class="k-textbox" name="password" type="password" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'confirmPassword', title: '确认密码', width: '100px',
                template: function (dataItem) {
                    if (dataItem.confirmPassword) {
                        return dataItem.confirmPassword.replace(dataItem.confirmPassword.substr(0), '******');
                    } else {
                        return '';
                    }
                },
                editor: function (container, options) {
                    $('<input class="k-textbox" name="confirmPassword" type="password" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'online', title: '状态', width: '70px',
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #',
                editor: function (container, options) {
                    $('<input name="online" type="checkbox" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoSwitch({
                            messages: {
                                checked: '',
                                unchecked: ''
                            }
                        });
                }
            },
            { field: 'gender', title: '性别', width: '120px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ],
                editor: function (container, options) {
                    $('<input class="k-radio" id="genderEdit1" name="gender" type="radio" value="1" data-bind="checked: '+ options.field +'"><label class="k-radio-label" for="genderEdit1">男</label>' +
                        '<input class="k-radio" id="genderEdit2" name="gender" type="radio" value="2" data-bind="checked: '+ options.field +'"><label class="k-radio-label" for="genderEdit2">女</label>')
                        .appendTo(container);
                }
            },
            { field: 'age', title: '年龄', width: '80px',
                template: function (dataItem) {
                    if (dataItem.age) {
                        return dataItem.age + ' 岁';
                    } else {
                        return '';
                    }
                },
                editor: function (container, options) {
                    $('<input name="age" type="number" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoNumericTextBox({
                            format: 'n0',
                            decimals: 0,
                            min: 1,
                            max: 120
                        });
                }
            },
            { field: 'height', title: '身高', width: '100px',
                template: function (dataItem) {
                    if (dataItem.height) {
                        return kendo.toString(dataItem.height, '0.00') + ' m';
                    } else {
                        return '';
                    }
                },
                editor: function (container, options) {
                    $('<input name="height" type="number" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoNumericTextBox({
                            format: '0.00 m',
                            decimals: 2,
                            step: 0.01,
                            min: 1.01,
                            max: 3.00
                        });
                }
            },
            { field: 'bloodType', title: '血型', width: '130px',
                values: [
                    { text: 'A 型', value: '1' },
                    { text: 'B 型', value: '2' },
                    { text: 'O 型', value: '3' },
                    { text: 'AB 型', value: '4' },
                    { text: '其他', value: '5' }
                ],
                editor: function (container, options) {
                    $('<select name="bloodType" data-bind="value: '+ options.field +'"></select>')
                        .appendTo(container)
                        .kendoDropDownList({
                            dataSource: {
                                data: [
                                    { text: 'A 型', value: '1' },
                                    { text: 'B 型', value: '2' },
                                    { text: 'O 型', value: '3' },
                                    { text: 'AB 型', value: '4' },
                                    { text: '其他', value: '5' }
                                ]
                            },
                            optionLabel: "-= 请选择 =-",
                            dataValueField: 'value',
                            dataTextField: 'text'
                        });
                }
            },
            { field: 'birthday', title: '生日', width: '140px',
                editor: function (container, options) {
                    $('<input name="birthday" type="date" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDatePicker({
                            format: 'yyyy-MM-dd',
                            footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #',
                            min: new Date(1920, 0, 1),
                            max: new Date()
                        });
                }
            },
            { field: 'mateBirthday', title: '配偶生日', width: '110px',
                editor: function (container, options) {
                    $('<input name="mateBirthday" type="date" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDateInput({
                            format: 'yyyy-MM-dd',
                            min: new Date(1920, 0, 1),
                            max: new Date()
                        });
                }
            },
            { field: 'creditCard', title: '银行卡', width: '170px',
                template: function (dataItem) {
                    if (dataItem.creditCard) {
                        return dataItem.creditCard.replace(dataItem.creditCard.substr(2, 12), '** **** **** **');
                    } else {
                        return '';
                    }
                },
                editor: function (container, options) {
                    $('<input name="creditCard" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoMaskedTextBox({
                            mask: '0000 0000 0000 0000'
                        });
                }
            },
            { field: 'asset', title: '资产', width: '170px',
                format: '{0:c}',
                editor: function (container, options) {
                    $('<input name="asset" type="number" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoNumericTextBox({
                            format: 'c',
                            decimals: 2,
                            step: 10000
                        });
                }
            },
            { field: 'nativePlace', title: '籍贯', width: '250px',
                template: function (dataItem) {
                    if (dataItem.nativePlace.provinceName && dataItem.nativePlace.cityName && dataItem.nativePlace.areaName) {
                        return dataItem.nativePlace.provinceName + ' - ' + dataItem.nativePlace.cityName + ' - ' + dataItem.nativePlace.areaName;
                    } else {
                        return '';
                    }
                },
                editor: function (container, options) {
                    $('<select class="mb-2" id="provinceEdit" name="nativePlace" data-bind="value: '+ options.field +'"></select>')
                        .appendTo(container)
                        .kendoDropDownList({
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
                    $('<select class="mb-2" id="cityEdit" name="nativePlace" data-bind="value: '+ options.field +'"></select>')
                        .appendTo(container)
                        .kendoDropDownList({
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
                            cascadeFrom: 'provinceEdit',
                            optionLabel: '-= 城市 =-',
                            dataValueField: 'city',
                            dataTextField: 'cityName',
                            filter: 'contains'
                        });
                    $('<select id="areaEdit" name="nativePlace" data-bind="value: '+ options.field +'"></select>')
                        .appendTo(container)
                        .kendoDropDownList({
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
                            cascadeFrom: 'cityEdit',
                            optionLabel: '-= 区县 =-',
                            dataValueField: 'area',
                            dataTextField: 'areaName',
                            filter: 'contains'
                        });
                }
            },
            { field: 'domicile', title: '居住地', width: '240px',
                template: '#= domicile.name #',
                editor: function (container, options) {
                    $('<input name="domicile" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDropDownTree({
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
                            filter: 'contains'
                        });
                }
            },
            { field: 'nation', title: '民族', width: '140px',
                template: '#= nation.nationName #',
                editor: function (container, options) {
                    $('<input name="nation" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoComboBox({
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
                }
            },
            { field: 'zodiac', title: '生肖', width: '90px',
                template: '#= zodiac.zodiacName #',
                editor: function (container, options) {
                    $('<input name="zodiac" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoMultiColumnComboBox({
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
                }
            },
            { field: 'language', title: '语言', width: '240px',
                editor: function (container, options) {
                    $('<input name="language" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoAutoComplete({
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
                }
            },
            { field: 'education', title: '教育程度', width: '210px',
                template:
                    '# for (var i = 0; i < education.length; i++) { #' +
                        '# if (education[i] === "1") { #' +
                            '小学&nbsp;' +
                        '# } else if (education[i] === "2") { #' +
                            '初中&nbsp;' +
                        '# } else if (education[i] === "3") { #' +
                            '高中&nbsp;' +
                        '# } else if (education[i] === "4") { #' +
                            '中专&nbsp;' +
                        '# } else if (education[i] === "5") { #' +
                            '大专&nbsp;' +
                        '# } else if (education[i] === "6") { #' +
                            '本科&nbsp;' +
                        '# } else if (education[i] === "7") { #' +
                            '硕士&nbsp;' +
                        '# } else if (education[i] === "8") { #' +
                            '博士&nbsp;' +
                        '# } else if (education[i] === "9") { #' +
                            '其他&nbsp;' +
                        '# } #' +
                    '# } #',
                editor: function (container, options) {
                    $('<input class="k-checkbox" id="educationEdit1" name="education" type="checkbox" value="1" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit1">小学</label>' +
                        '<input class="k-checkbox" id="educationEdit2" name="education" type="checkbox" value="2" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit2">初中</label>' +
                        '<input class="k-checkbox" id="educationEdit3" name="education" type="checkbox" value="3" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit3">高中</label>' +
                        '<input class="k-checkbox" id="educationEdit4" name="education" type="checkbox" value="4" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit4">中专</label>' +
                        '<input class="k-checkbox" id="educationEdit5" name="education" type="checkbox" value="5" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit5">大专</label>' +
                        '<input class="k-checkbox" id="educationEdit6" name="education" type="checkbox" value="6" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit6">本科</label>' +
                        '<input class="k-checkbox" id="educationEdit7" name="education" type="checkbox" value="7" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit7">硕士</label>' +
                        '<input class="k-checkbox" id="educationEdit8" name="education" type="checkbox" value="8" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit8">博士</label>' +
                        '<input class="k-checkbox" id="educationEdit9" name="education" type="checkbox" value="9" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit9">其他</label>')
                        .appendTo(container);
                }
            },
            { field: 'graduation', title: '毕业年份', width: '90px',
                editor: function (container, options) {
                    $('<input name="graduation" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDatePicker({
                            start: 'decade',
                            depth: 'decade',
                            format: 'yyyy',
                            footer: '今年：#= kendo.toString(data, "yyyy年") #'
                        });
                }
            },
            { field: 'firstJob', title: '参加工作年月', width: '110px',
                editor: function (container, options) {
                    $('<input name="firstJob" type="month" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDatePicker({
                            start: 'year',
                            depth: 'year',
                            format: 'yyyy-MM',
                            footer: '当月：#= kendo.toString(data, "yyyy年MM月") #'
                        });
                }
            },
            { field: 'mobile', title: '手机', width: '120px',
                editor: function (container, options) {
                    $('<input class="k-textbox" name="mobile" type="tel" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'email', title: '电子邮件', width: '180px',
                editor: function (container, options) {
                    $('<input class="k-textbox" name="email" type="email" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'homepage', title: '个人主页', width: '190px',
                editor: function (container, options) {
                    $('<input class="k-textbox" name="homepage" type="url" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'getUp', title: '起床时间', width: '90px',
                editor: function (container, options) {
                    $('<input name="getUp" type="time" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoTimePicker({
                            format: 'HH:mm'
                        });
                }
            },
            { field: 'importantMoment', title: '最有意义的时刻', width: '200px',
                editor: function (container, options) {
                    $('<input name="importantMoment" type="datetime" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDateTimePicker({
                            format: 'yyyy-MM-dd HH:mm',
                            footer: '现在：#= kendo.toString(data, "yyyy年MM月dd日 HH:mm") #'
                        });
                }
            },
            { field: 'character', title: '性格', width: '200px',
                values: [
                    { text: '超级开朗', value: 10 },
                    { text: '非常开朗', value: 8 },
                    { text: '很开朗', value: 6 },
                    { text: '比较开朗', value: 4 },
                    { text: '有点开朗', value: 2 },
                    { text: '普通', value: 0 },
                    { text: '有点内向', value: -2 },
                    { text: '比较内向', value: -4 },
                    { text: '很内向', value: -6 },
                    { text: '非常内向', value: -8 },
                    { text: '超级内向', value: -10 }
                ],
                editor: function (container, options) {
                    $('<input name="character" type="range" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoSlider({
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
                }
            },
            { field: 'color', title: '颜色喜好', width: '90px',
                template: '<span style="display: inline-block; width: 100%; height: 24px; background: #= color #; border: 1px solid \\#c5c5c5; border-radius: 4px; vertical-align: middle;"></span>',
                editor: function (container, options) {
                    $('<input name="color" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoColorPicker({
                            opacity: true,
                            buttons: false
                        });
                }
            },
            { field: 'constellation', title: '相配的星座', width: '270px',
                template:
                    '# for (var i = 0; i < constellation.length; i++) { #' +
                        '# if (constellation[i] === "1") { #' +
                            '白羊座&nbsp;' +
                        '# } else if (constellation[i] === "2") { #' +
                            '金牛座&nbsp;' +
                        '# } else if (constellation[i] === "3") { #' +
                            '双子座&nbsp;' +
                        '# } else if (constellation[i] === "4") { #' +
                            '巨蟹座&nbsp;' +
                        '# } else if (constellation[i] === "5") { #' +
                            '狮子座&nbsp;' +
                        '# } else if (constellation[i] === "6") { #' +
                            '处女座&nbsp;' +
                        '# } else if (constellation[i] === "7") { #' +
                            '天秤座&nbsp;' +
                        '# } else if (constellation[i] === "8") { #' +
                            '天蝎座&nbsp;' +
                        '# } else if (constellation[i] === "9") { #' +
                            '射手座&nbsp;' +
                        '# } else if (constellation[i] === "10") { #' +
                            '山羊座&nbsp;' +
                        '# } else if (constellation[i] === "11") { #' +
                            '水瓶座&nbsp;' +
                        '# } else if (constellation[i] === "12") { #' +
                            '双鱼座&nbsp;' +
                        '# } #' +
                    '# } #',
                editor: function (container, options) {
                    $('<select name="constellation" multiple data-bind="value: '+ options.field +'"></select>')
                        .appendTo(container)
                        .kendoMultiSelect({
                            dataSource: {
                                data: [
                                    { text: '白羊座', value: '1' },
                                    { text: '金牛座', value: '2' },
                                    { text: '双子座', value: '3' },
                                    { text: '巨蟹座', value: '4' },
                                    { text: '狮子座', value: '5' },
                                    { text: '处女座', value: '6' },
                                    { text: '天秤座', value: '7' },
                                    { text: '天蝎座', value: '8' },
                                    { text: '射手座', value: '9' },
                                    { text: '山羊座', value: '10' },
                                    { text: '水瓶座', value: '11' },
                                    { text: '双鱼座', value: '12' }
                                ]
                            },
                            placeholder: '-= 请选择 =-',
                            dataValueField: 'value',
                            dataTextField: 'text',
                            autoClose: false,
                            valuePrimitive: true
                        });
                }
            },
            { field: 'tourism', title: '旅游足迹', width: '270px',
                template:
                    '# for (var i = 0; i < tourism.length; i++) { #' +
                        '#= tourism[i].name #&nbsp;' +
                    '# } #',
                editor: function (container, options) {
                    $('<select name="tourism" multiple data-bind="value: '+ options.field +'"></select>')
                        .appendTo(container)
                        .kendoDropDownTree({
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
                            checkboxes: true,
                            autoClose: false,
                            change: function () {
                                options.model.set('tourism', this._allCheckedItems);
                            }
                        });
                }
            },
            { field: 'summary', title: '自我介绍', width: '310px',
                editor: function (container, options) {
                    $('<textarea class="k-textarea" name="summary" data-bind="value: '+ options.field +'"></textarea>')
                        .appendTo(container);
                }
            },
            { field: 'photo', title: '头像', width: '320px',
                template: '<a href="javascript:showBigPic(\'#= photo.url #\');"><img class="w-10 rounded-circle" src="#= photo.url #" alt="#= photo.name ##= photo.extension #"></a><small class="ml-2 text-muted">[#= kendo.toString(photo.size / 1024, "0.00") # KB]</small>',
                editor: function (container, options) {
                    $('<div class="media">' +
                        '<img class="img-thumbnail w-15 mr-2" id="photoShow" src="'+ options.model.photo.url +'" alt="'+ options.model.photo.name + options.model.photo.extension +'" title="'+ kendo.toString(options.model.photo.size / 1024, "0.00") +' KB">' +
                        '<div class="media-body">' +
                        '<input id="photoEdit" name="photo" type="file">' +
                        '</div>' +
                        '</div>')
                        .appendTo(container);
                    $('#photoEdit')
                        .kendoUpload({
                            async: {
                                saveUrl: 'json/upload.json',
                                removeUrl: 'json/upload.json'
                            },
                            multiple: false,
                            files: [
                                {
                                    name: options.model.photo.name,
                                    size: options.model.photo.size,
                                    extension: options.model.photo.extension
                                }
                            ],
                            validation: {
                                allowedExtensions: ['.jpg', '.png', '.gif', '.bmp'],
                                maxFileSize: 10485760
                            },
                            success: function (res) {
                                if (res.response.result === 'y') {
                                    if (res.operation === 'upload') {
                                        options.model.set('photo.url', res.response.data.url);
                                        options.model.set('photo.name', res.response.data.name);
                                        options.model.set('photo.extension', res.response.data.extension);
                                        options.model.set('photo.size', res.response.data.size);
                                        $('#photoShow').attr({
                                            'src': res.response.data.url,
                                            'alt': res.response.data.name + res.response.data.extension,
                                            'title': kendo.toString(res.response.data.size / 1024, '0.00') + ' KB'
                                        });
                                        alertMsg(res.response.msg, 'success');
                                    }
                                    if (res.operation === 'remove') {
                                        options.model.set('photo.url', 'img/avatar.png');
                                        options.model.set('photo.name', 'avatar');
                                        options.model.set('photo.extension', '.png');
                                        options.model.set('photo.size', 53284);
                                        $('#photoShow').attr({
                                            'src': 'img/avatar.png',
                                            'alt': 'avatar.png',
                                            'title': '52.04 KB'
                                        });
                                    }
                                } else {
                                    $('.k-upload-files').remove();
                                    alertMsg(res.response.msg, 'error');
                                }
                            }
                        });
                }
            },
            { field: 'sign', title: '签名', width: '600px',
                template: '#= sign #',
                editor: function (container, options) {
                    $('<textarea name="sign" data-bind="value: '+ options.field +'"></textarea>')
                        .appendTo(container)
                        .kendoEditor({
                            tools: [
                                'bold',
                                'italic',
                                'underline',
                                'strikethrough',
                                'foreColor',
                                'backColor',
                                'justifyLeft',
                                'justifyCenter',
                                'justifyRight',
                                'justifyFull',
                                'insertUnorderedList',
                                'insertOrderedList',
                                'indent',
                                'outdent'
                            ]
                        });
                }
            }
        ],
        noRecords: {
            template: '<div class="text-center p-4">无相关数据</div>'
        },
        pageable: false,
        reorderable: true,
        resizable: true,
        navigatable: true,
        editable: {
            mode: 'incell'
        }
    });
    // 获取数据源生成列表
    $('#listView').kendoListView({
        dataSource: dataSource,
        template: kendo.template($('#listTemplate').html()),
        navigatable: true,
        editTemplate: kendo.template($('#editTemplate').html()),
        edit: function (e) {
            // 是否在线
            $('#onlineEdit').kendoSwitch({
                messages: {
                    checked: '',
                    unchecked: ''
                }
            });
            // 年龄
            $('#ageEdit').kendoNumericTextBox({
                format: 'n0',
                decimals: 0,
                min: 1,
                max: 120
            });
            // 身高
            $('#heightEdit').kendoNumericTextBox({
                format: '0.00 m',
                decimals: 2,
                step: 0.01,
                min: 1.01,
                max: 3.00
            });
            // 血型
            $('#bloodTypeEdit').kendoDropDownList();
            // 生日
            $('#birthdayEdit').kendoDatePicker({
                format: 'yyyy-MM-dd',
                footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #',
                min: new Date(1920, 0, 1),
                max: new Date()
            });
            // 配偶生日
            $('#mateBirthdayEdit').kendoDateInput({
                format: 'yyyy-MM-dd',
                min: new Date(1920, 0, 1),
                max: new Date()
            });
            // 银行卡
            $('#creditCardEdit').kendoMaskedTextBox({
                mask: '0000 0000 0000 0000'
            });
            // 资产
            $('#assetEdit').kendoNumericTextBox({
                format: 'c',
                decimals: 2,
                step: 10000
            });
            // 籍贯
            $('#provinceEdit').kendoDropDownList({
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
            $('#cityEdit').kendoDropDownList({
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
                cascadeFrom: 'provinceEdit',
                optionLabel: '-= 城市 =-',
                dataValueField: 'city',
                dataTextField: 'cityName',
                filter: 'contains'
            });
            $('#areaEdit').kendoDropDownList({
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
                cascadeFrom: 'cityEdit',
                optionLabel: '-= 区县 =-',
                dataValueField: 'area',
                dataTextField: 'areaName',
                filter: 'contains'
            });
            // 居住地
            $('#domicileEdit').kendoDropDownTree({
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
                placeholder: '树形下拉框',
                dataValueField: 'code',
                dataTextField: 'name',
                filter: 'contains'
            });
            // 民族
            $('#nationEdit').kendoComboBox({
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
            $('#zodiacEdit').kendoMultiColumnComboBox({
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
            $('#languageEdit').kendoAutoComplete({
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
            $('#graduationEdit').kendoDatePicker({
                start: 'decade',
                depth: 'decade',
                format: 'yyyy',
                footer: '今年：#= kendo.toString(data, "yyyy年") #'
            });
            // 参加工作年月
            $('#firstJobEdit').kendoDatePicker({
                start: 'year',
                depth: 'year',
                format: 'yyyy-MM',
                footer: '当月：#= kendo.toString(data, "yyyy年MM月") #'
            });
            // 起床时间
            $('#getUpEdit').kendoTimePicker({
                format: 'HH:mm'
            });
            // 最有意义的时刻
            $('#importantMomentEdit').kendoDateTimePicker({
                format: 'yyyy-MM-dd HH:mm',
                footer: '现在：#= kendo.toString(data, "yyyy年MM月dd日 HH:mm") #'
            });
            // 性格
            $('#characterEdit').kendoSlider({
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
            $('#colorEdit').kendoColorPicker({
                opacity: true,
                buttons: false
            });
            // 相配的星座
            $('#constellationEdit').kendoMultiSelect({
                placeholder: '多选下拉框',
                autoClose: false,
                valuePrimitive: true
            });
            // 旅游足迹
            $('#tourismEdit').kendoDropDownTree({
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
                filter: 'contains',
                checkboxes: true,
                autoClose: false,
                change: function () {
                    e.model.set('tourism', this._allCheckedItems);
                }
            });
            // 头像
            $('#photoEdit').kendoUpload({
                async: {
                    saveUrl: 'json/upload.json',
                    removeUrl: 'json/upload.json'
                },
                multiple: false,
                showFileList: false,
                files: [
                    {
                        name: e.model.photo.name,
                        size: e.model.photo.size,
                        extension: e.model.photo.extension
                    }
                ],
                validation: {
                    allowedExtensions: ['.jpg', '.png', '.gif', '.bmp'],
                    maxFileSize: 10485760
                },
                localization: {
                    select: '上传头像'
                },
                success: function (res) {
                    if (res.response.result === 'y') {
                        if (res.operation === 'upload') {
                            e.model.set('photo.url', res.response.data.url);
                            e.model.set('photo.name', res.response.data.name);
                            e.model.set('photo.extension', res.response.data.extension);
                            e.model.set('photo.size', res.response.data.size);
                            $('#editForm #photoShow').attr({
                                'src': res.response.data.url,
                                'alt': res.response.data.name + res.response.data.extension,
                                'title': kendo.toString(res.response.data.size / 1024, '0.00') + ' KB'
                            });
                            alertMsg(res.response.msg, 'success');
                        }
                        if (res.operation === 'remove') {
                            e.model.set('photo.url', 'img/avatar.png');
                            e.model.set('photo.name', 'avatar');
                            e.model.set('photo.extension', '.png');
                            e.model.set('photo.size', 53284);
                            $('#editForm #photoShow').attr({
                                'src': 'img/avatar.png',
                                'alt': 'avatar.png',
                                'title': '52.04 KB'
                            });
                        }
                    } else {
                        $('.k-upload-files').remove();
                        alertMsg(res.response.msg, 'error');
                    }
                }
            });
            // 签名
            $('#signEdit').kendoEditor({
                tools: [
                    'bold',
                    'italic',
                    'underline',
                    'strikethrough',
                    'superscript',
                    'subscript',
                    'fontName',
                    'fontSize',
                    'foreColor',
                    'backColor',
                    'justifyLeft',
                    'justifyCenter',
                    'justifyRight',
                    'justifyFull',
                    'insertUnorderedList',
                    'insertOrderedList',
                    'indent',
                    'outdent',
                    'createLink',
                    'unlink',
                    'insertImage',
                    'insertFile',
                    'tableWizard',
                    'createTable',
                    'addColumnLeft',
                    'addColumnRight',
                    'addRowAbove',
                    'addRowBelow',
                    'deleteRow',
                    'deleteColumn',
                    'formatting',
                    'cleanFormatting',
                    'insertHtml',
                    'viewHtml',
                    'print',
                    'pdf'
                ]
            });
        }
    });
    // 获取数据源并分页
    $('#pager').kendoPager({
        dataSource: dataSource,
        buttonCount: 5,
        input: true,
        pageSizes: [1, 2, 5, 10, 15, 20, 25, 30, 50, 100, 'all'],
        refresh: true
    });
});