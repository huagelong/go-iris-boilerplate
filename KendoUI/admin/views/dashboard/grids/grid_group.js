$(function () {
    // 获取数据源生成表格
    $('#grid').kendoGrid({
        dataSource: {
            transport: {
                read: function (options) { readItem(options, 'json/grid.json') }
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
                        nativePlace: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        return e.provinceName + ' - ' + e.cityName + ' - ' + e.areaName;
                                    } else {
                                        return e.nativePlace;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        domicile: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        return e.name;
                                    } else {
                                        return e.domicile;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        nation: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        return e.nationName;
                                    } else {
                                        return e.nation;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        zodiac: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        return e.zodiacName;
                                    } else {
                                        return e.zodiac;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        language: { type: 'string' },
                        education: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        var str = '';
                                        for (var i = 0; i < e.length; i++) {
                                            if (e[i] === '1') {
                                                str += '小学 ';
                                            } else if (e[i] === '2') {
                                                str += '初中 ';
                                            } else if (e[i] === '3') {
                                                str += '高中 ';
                                            } else if (e[i] === '4') {
                                                str += '中专 ';
                                            } else if (e[i] === '5') {
                                                str += '大专 ';
                                            } else if (e[i] === '6') {
                                                str += '本科 ';
                                            } else if (e[i] === '7') {
                                                str += '硕士 ';
                                            } else if (e[i] === '8') {
                                                str += '博士 ';
                                            } else if (e[i] === '9') {
                                                str += '其他 ';
                                            }
                                        }
                                        return str;
                                    } else {
                                        return e.education;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
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
                        constellation: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        var str = '';
                                        for (var i = 0; i < e.length; i++) {
                                            if (e[i] === '1') {
                                                str += '白羊座 ';
                                            } else if (e[i] === '2') {
                                                str += '金牛座 ';
                                            } else if (e[i] === '3') {
                                                str += '双子座 ';
                                            } else if (e[i] === '4') {
                                                str += '巨蟹座 ';
                                            } else if (e[i] === '5') {
                                                str += '狮子座 ';
                                            } else if (e[i] === '6') {
                                                str += '处女座 ';
                                            } else if (e[i] === '7') {
                                                str += '天秤座 ';
                                            } else if (e[i] === '8') {
                                                str += '天蝎座 ';
                                            } else if (e[i] === '9') {
                                                str += '射手座 ';
                                            } else if (e[i] === '10') {
                                                str += '山羊座 ';
                                            } else if (e[i] === '11') {
                                                str += '水瓶座 ';
                                            } else if (e[i] === '12') {
                                                str += '双鱼座 ';
                                            }
                                        }
                                        return str;
                                    } else {
                                        return e.constellation;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        tourism: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        var str = '';
                                        for (var i = 0; i < e.length; i++) {
                                            str += e[i].name + ' ';
                                        }
                                        return str;
                                    } else {
                                        return e.tourism;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        summary: { type: 'string' },
                        photo: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    if (typeof e.id === 'undefined') {
                                        return '<a href="javascript:showBigPic(\'' + e.url + '\');"><img class="w-15 rounded-circle" src="' + e.url + '" alt="' + e.name + e.extension + '"></a><small class="ml-2 text-muted">[' + kendo.toString(e.size / 1024, '0.00') + ' KB]</small>';
                                    } else {
                                        return e.photo;
                                    }
                                } else {
                                    return e;
                                }
                            }
                        },
                        sign: { type: 'string',
                            parse: function (e) {
                                if (typeof e === 'object') {
                                    return e.sign;
                                } else {
                                    return e;
                                }
                            }
                        }
                    }
                }
            },
            group: [
                { field: 'online', dir: 'desc',
                    aggregates: [
                        { field: 'online', aggregate: 'count' },
                        { field: 'gender', aggregate: 'count' },
                        { field: 'age', aggregate: 'min' },
                        { field: 'age', aggregate: 'max' },
                        { field: 'asset', aggregate: 'sum' }
                    ]
                },
                { field: 'gender', dir: 'asc',
                    aggregates: [
                        { field: 'online', aggregate: 'count' },
                        { field: 'gender', aggregate: 'count' },
                        { field: 'age', aggregate: 'min' },
                        { field: 'age', aggregate: 'max' },
                        { field: 'asset', aggregate: 'sum' }
                    ]
                }
            ],
            aggregate: [
                { field: 'realName', aggregate: 'count' },
                { field: 'age', aggregate: 'average' },
                { field: 'height', aggregate: 'average' },
                { field: 'asset', aggregate: 'sum' }
            ],
            sort: [
                { field: 'userName', dir: 'desc' }
            ],
            filter: {
                logic: 'or',
                filters: [
                    { field: 'userName', operator: 'contains', value: null },
                    { field: 'realName', operator: 'contains', value: null },
                    { field: 'nickName', operator: 'contains', value: null },
                    { field: 'online', operator: 'eq', value: null },
                    { field: 'gender', operator: 'eq', value: null },
                    { field: 'age', operator: 'lt', value: null },
                    { field: 'height', operator: 'gt', value: null },
                    { field: 'bloodType', operator: 'neq', value: null },
                    { field: 'birthday', operator: 'lt', value: null },
                    { field: 'mateBirthday', operator: 'gt', value: null },
                    { field: 'creditCard', operator: 'contains', value: null },
                    { field: 'asset', operator: 'gte', value: null },
                    { field: 'nativePlace', operator: 'contains', value: null },
                    { field: 'domicile', operator: 'contains', value: null },
                    { field: 'nation', operator: 'contains', value: null },
                    { field: 'zodiac', operator: 'contains', value: null },
                    { field: 'language', operator: 'contains', value: null },
                    { field: 'education', operator: 'contains', value: null },
                    { field: 'graduation', operator: 'lte', value: null },
                    { field: 'firstJob', operator: 'gte', value: null },
                    { field: 'mobile', operator: 'contains', value: null },
                    { field: 'email', operator: 'contains', value: null },
                    { field: 'homepage', operator: 'contains', value: null },
                    { field: 'getUp', operator: 'lte', value: null },
                    { field: 'importantMoment', operator: 'eq', value: null },
                    { field: 'character', operator: 'eq', value: null },
                    { field: 'color', operator: 'eq', value: null },
                    { field: 'constellation', operator: 'contains', value: null },
                    { field: 'tourism', operator: 'contains', value: null },
                    { field: 'summary', operator: 'contains', value: null },
                    { field: 'photo', operator: 'contains', value: null },
                    { field: 'sign', operator: 'contains', value: null }
                ]
            },
            // serverGrouping: true,
            // serverAggregates: true,
            // serverSorting: true,
            // serverFiltering: true,
            // serverPaging: true,
            pageSize: 15
        },
        columns: [
            { field: 'userName', title: '用户名', width: '180px' },
            { field: 'realName', title: '姓名', width: '200px',
                footerTemplate: '总计：#= count # 人'
            },
            { field: 'nickName', title: '昵称', width: '210px' },
            { hidden: true, field: 'password', title: '密码', width: '230px',
                template: function (dataItem) {
                    return dataItem.password.replace(dataItem.password.substr(0), '******');
                }
            },
            { field: 'online', title: '状态', width: '180px',
                values: [
                    { text: '在线', value: true },
                    { text: '离线', value: false }
                ],
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #',
                aggregates: ['count'],
                groupHeaderTemplate:
                    '状态：' +
                    '# if (value) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #' +
                    '（合计：#= count # 人）'
            },
            { field: 'gender', title: '性别', width: '160px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ],
                aggregates: ['count'],
                groupHeaderTemplate:
                    '性别：' +
                    '# if (value === "1") { #' +
                        '男<i class="fas fa-mars mars ml-2"></i>' +
                    '# } else if (value === "2") { #' +
                        '女<i class="fas fa-venus venus ml-2"></i>' +
                    '# } #' +
                    '（合计：#= count # 人）'
            },
            { field: 'age', title: '年龄', width: '160px',
                template: '#= age # 岁',
                aggregates: ['min', 'max', 'average'],
                groupHeaderColumnTemplate: '最小：#= min # 岁',
                groupFooterTemplate: '最大：#= max # 岁',
                footerTemplate: '平均：#= kendo.toString(average, "n0") # 岁',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoNumericTextBox({
                                format: 'n0',
                                decimals: 0
                            });
                        }
                    }
                }
            },
            { field: 'height', title: '身高', width: '180px',
                template: '#= kendo.toString(height, "0.00") # m',
                aggregates: ['average'],
                footerTemplate: '平均：#= kendo.toString(average, "0.00") # m',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoNumericTextBox({
                                format: '0.00 m',
                                decimals: 2,
                                step: 0.01
                            });
                        }
                    }
                }
            },
            { field: 'bloodType', title: '血型', width: '180px',
                values: [
                    { text: 'A 型', value: '1' },
                    { text: 'B 型', value: '2' },
                    { text: 'O 型', value: '3' },
                    { text: 'AB 型', value: '4' },
                    { text: '其他', value: '5' }
                ]
            },
            { field: 'birthday', title: '生日', width: '210px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoDatePicker({
                                format: 'yyyy-MM-dd',
                                footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #'
                            });
                        }
                    }
                }
            },
            { field: 'mateBirthday', title: '配偶生日', width: '210px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoDatePicker({
                                format: 'yyyy-MM-dd',
                                footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #'
                            });
                        }
                    }
                }
            },
            { field: 'creditCard', title: '银行卡', width: '260px',
                template: function (dataItem) {
                    return dataItem.creditCard.replace(dataItem.creditCard.substr(2, 12), '** **** **** **');
                }
            },
            { field: 'asset', title: '资产', width: '240px',
                format: '{0:c}',
                aggregates: ['sum'],
                groupFooterTemplate: '合计：#= kendo.toString(sum, "c") #',
                footerTemplate: '总计：#= kendo.toString(sum, "c") #',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoNumericTextBox({
                                format: 'c',
                                decimals: 2,
                                step: 10000
                            });
                        }
                    }
                }
            },
            { field: 'nativePlace', title: '籍贯', width: '350px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'nativePlace'
                            });
                        }
                    }
                }
            },
            { field: 'domicile', title: '居住地', width: '200px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'domicile'
                            });
                        }
                    }
                }
            },
            { field: 'nation', title: '民族', width: '200px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'nation'
                            });
                        }
                    }
                }
            },
            { field: 'zodiac', title: '生肖', width: '140px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'zodiac'
                            });
                        }
                    }
                }
            },
            { field: 'language', title: '语言', width: '310px' },
            { field: 'education', title: '教育程度', width: '220px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'education'
                            });
                        }
                    }
                }
            },
            { field: 'graduation', title: '毕业年份', width: '160px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoDatePicker({
                                start: 'decade',
                                depth: 'decade',
                                format: 'yyyy',
                                footer: '今年：#= kendo.toString(data, "yyyy年") #'
                            });
                        }
                    }
                }
            },
            { field: 'firstJob', title: '参加工作年月', width: '190px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoDatePicker({
                                start: 'year',
                                depth: 'year',
                                format: 'yyyy-MM',
                                footer: '当月：#= kendo.toString(data, "yyyy年MM月") #'
                            });
                        }
                    }
                }
            },
            { field: 'mobile', title: '手机', width: '220px' },
            { field: 'email', title: '电子邮件', width: '280px' },
            { field: 'homepage', title: '个人主页', width: '290px' },
            { field: 'getUp', title: '起床时间', width: '170px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoTimePicker({
                                format: 'HH:mm'
                            });
                        }
                    }
                }
            },
            { field: 'importantMoment', title: '最有意义的时刻', width: '280px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoDateTimePicker({
                                format: 'yyyy-MM-dd HH:mm',
                                footer: '现在：#= kendo.toString(data, "yyyy年MM月dd日 HH:mm") #'
                            });
                        }
                    }
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
                ]
            },
            { field: 'color', title: '颜色喜好', width: '140px',
                template: '<span style="display: inline-block; width: 100%; height: 24px; background: #= color #; border: 1px solid \\#c5c5c5; border-radius: 4px; vertical-align: middle;"></span>',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoColorPicker({
                                opacity: true,
                                buttons: false
                            });
                        }
                    }
                }
            },
            { field: 'constellation', title: '相配的星座', width: '270px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'constellation'
                            });
                        }
                    }
                }
            },
            { field: 'tourism', title: '旅游足迹', width: '300px',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'tourism'
                            });
                        }
                    }
                }
            },
            { field: 'summary', title: '自我介绍', width: '390px' },
            { field: 'photo', title: '头像', width: '230px',
                template: '#= photo #',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'photo',
                                template: function (dataItem) {
                                    return '<img class="w-25 rounded-circle" src="' + dataItem.photo.split('<')[2].split('=')[2].split('"')[1] + '" alt="' + dataItem.photo.split('<')[2].split('=')[2].split('"')[1].split('/')[2] + '"><small class="ml-2 text-muted">' + dataItem.photo.split('<')[4].split('>')[1] + '</small>';
                                }
                            });
                        }
                    }
                }
            },
            { field: 'sign', title: '签名', width: '390px',
                template: '#= sign #',
                filterable: {
                    cell: {
                        template: function (e) {
                            e.element.kendoAutoComplete({
                                dataSource: e.dataSource,
                                dataTextField: 'sign',
                                template: function (dataItem) {
                                    return dataItem.sign;
                                }
                            });
                        }
                    }
                }
            }
        ],
        noRecords: {
            template: '<div class="text-center p-4">无相关数据</div>'
        },
        pageable: {
            buttonCount: 5,
            input: true,
            pageSizes: [5, 10, 15, 20, 25, 30, 50, 100, 'all'],
            refresh: true
        },
        sortable: {
            mode: 'multiple'
        },
        filterable: {
            mode: 'row'
        },
        groupable: true,
        reorderable: true,
        resizable: true
    });
});