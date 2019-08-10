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
    // 获取数据源生成表格
    $('#grid').kendoGrid({
        dataSource: {
            transport: {
                create: function (options) { createItem(options, 'json/response.json') },
                destroy: function (options) { destroyItem(options, 'json/response.json') },
                update: function (options) { updateItem(options, 'json/response.json') },
                read: function (options) { readItem(options, 'json/grid.json') }
            },
            schema: {
                total: 'total',
                data: 'data',
                model: {
                    id: 'id',
                    fields: {
                        userName: { type: 'string',
                            validation: {
                                userNameRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=userName]')) {
                                        return true;
                                    }
                                    input.attr('data-userNameRequired-msg', '请输入用户名！');
                                    return input.val() !== '';
                                },
                                userNamePattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=userName]')) {
                                        return true;
                                    }
                                    input.attr('data-userNamePattern-msg', '请输入4-16个大小写字母或数字！');
                                    return input.val().match(/^[A-Za-z0-9]{4,16}$/) !== null;
                                }
                            }
                        },
                        realName: { type: 'string',
                            validation: {
                                realNameRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=realName]')) {
                                        return true;
                                    }
                                    input.attr('data-realNameRequired-msg', '请输入姓名！');
                                    return input.val() !== '';
                                },
                                realNamePattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=realName]')) {
                                        return true;
                                    }
                                    input.attr('data-realNamePattern-msg', '请输入1-10个汉字！');
                                    return input.val().match(/^[\u4E00-\u9FA5]{1,10}$/) !== null;
                                }
                            }
                        },
                        nickName: { type: 'string',
                            validation: {
                                nickNameRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=nickName]')) {
                                        return true;
                                    }
                                    input.attr('data-nickNameRequired-msg', '请输入昵称！');
                                    return input.val() !== '';
                                },
                                nickNamePattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=nickName]')) {
                                        return true;
                                    }
                                    input.attr('data-nickNamePattern-msg', '请输入2-20个大小写字母、数字、空格、下划线、中划线或汉字！');
                                    return input.val().match(/^[A-Za-z0-9\s_\-\u4E00-\u9FA5]{2,20}$/) !== null;
                                },
                                nickNameUnique: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=nickName]')) {
                                        return true;
                                    }
                                    var unique = true;
                                    $.fn.ajaxPost({
                                        ajaxAsync: false,
                                        ajaxData: {
                                            'nickName': input.val()
                                        },
                                        succeed: function () {
                                            unique = true;
                                        },
                                        failed: function () {
                                            unique = false;
                                        }
                                    });
                                    input.attr('data-nickNameUnique-msg', '此昵称已存在，请重新输入！');
                                    return unique;
                                }
                            }
                        },
                        password: { type: 'string',
                            validation: {
                                passwordRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=password]')) {
                                        return true;
                                    }
                                    input.attr('data-passwordRequired-msg', '请输入密码！');
                                    return input.val() !== '';
                                },
                                passwordPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=password]')) {
                                        return true;
                                    }
                                    input.attr('data-passwordPattern-msg', '请输入6-20个大小写字母或数字！');
                                    return input.val().match(/^[A-Za-z0-9]{6,20}$/) !== null;
                                }
                            }
                        },
                        confirmPassword: { type: 'string',
                            validation: {
                                confirmPasswordRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=confirmPassword]')) {
                                        return true;
                                    }
                                    input.attr('data-confirmPasswordRequired-msg', '请输入确认密码！');
                                    return input.val() !== '';
                                },
                                matchPassword: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=confirmPassword]')) {
                                        return true;
                                    }
                                    input.attr('data-matchPassword-msg', '两次输入的密码不一致！');
                                    return (input.val() === $('.k-grid-edit-row [name=password]').val());
                                }
                            }
                        },
                        online: { type: 'boolean' },
                        gender: { type: 'string',
                            validation: {
                                genderRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=gender]')) {
                                        return true;
                                    }
                                    input.attr('data-genderRequired-msg', '请选择性别！');
                                    return $('.k-grid-edit-row [name=gender]').is(':checked');
                                }
                            }
                        },
                        age: { type: 'number',
                            defaultValue: null,
                            validation: {
                                ageRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=age]')) {
                                        return true;
                                    }
                                    input.attr('data-ageRequired-msg', '请输入年龄！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        height: { type: 'number',
                            defaultValue: null,
                            validation: {
                                heightRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=height]')) {
                                        return true;
                                    }
                                    input.attr('data-heightRequired-msg', '请输入身高！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        bloodType: { type: 'string',
                            validation: {
                                bloodTypeRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=bloodType]')) {
                                        return true;
                                    }
                                    input.attr('data-bloodTypeRequired-msg', '请选择血型！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        birthday: { type: 'date',
                            defaultValue: null,
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            },
                            validation: {
                                birthdayRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=birthday]')) {
                                        return true;
                                    }
                                    input.attr('data-birthdayRequired-msg', '请输入生日！');
                                    return input.val() !== '';
                                },
                                birthdayPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=birthday]')) {
                                        return true;
                                    }
                                    input.attr('data-birthdayPattern-msg', '日期格式不正确！');
                                    return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
                                }
                            }
                        },
                        mateBirthday: { type: 'date',
                            defaultValue: null,
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd');
                            },
                            validation: {
                                mateBirthdayRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=mateBirthday]')) {
                                        return true;
                                    }
                                    input.attr('data-mateBirthdayRequired-msg', '请输入配偶生日！');
                                    return input.val().match(/^((?!年-月-日).)*$/) !== null;
                                },
                                mateBirthdayPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=mateBirthday]')) {
                                        return true;
                                    }
                                    input.attr('data-mateBirthdayPattern-msg', '日期格式不正确！');
                                    return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
                                }
                            }
                        },
                        creditCard: { type: 'string',
                            parse: function (e) {
                                return e.replace(/\s*/g, '');
                            },
                            validation: {
                                creditCardRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=creditCard]')) {
                                        return true;
                                    }
                                    input.attr('data-creditCardRequired-msg', '请输入银行卡！');
                                    return input.val() !== '';
                                },
                                creditCardPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=creditCard]')) {
                                        return true;
                                    }
                                    input.attr('data-creditCardPattern-msg', '请补足位数！');
                                    return input.val().match(/^[\d\s]{19}$/) !== null;
                                }
                            }
                        },
                        asset: { type: 'number',
                            defaultValue: null,
                            validation: {
                                assetRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=asset]')) {
                                        return true;
                                    }
                                    input.attr('data-assetRequired-msg', '请输入资产！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        nativePlace: { type: 'object',
                            defaultValue: {
                                province: '',
                                provinceName: '',
                                city: '',
                                cityName: '',
                                area: '',
                                areaName: ''
                            },
                            validation: {
                                provinceRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row #provinceEdit')) {
                                        return true;
                                    }
                                    input.attr('data-provinceRequired-msg', '请选择省份！');
                                    return input.val() !== '';
                                },
                                cityRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row #cityEdit')) {
                                        return true;
                                    }
                                    input.attr('data-cityRequired-msg', '请选择城市！');
                                    return input.val() !== '';
                                },
                                areaRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row #areaEdit')) {
                                        return true;
                                    }
                                    input.attr('data-areaRequired-msg', '请选择区县！');
                                    return input.val() !== '';
                                }
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
                            },
                            validation: {
                                domicileRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=domicile]')) {
                                        return true;
                                    }
                                    input.attr('data-domicileRequired-msg', '请选择居住地！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        nation: { type: 'object',
                            defaultValue: {
                                nation: '',
                                nationName: ''
                            },
                            validation: {
                                nationRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=nation]')) {
                                        return true;
                                    }
                                    input.attr('data-nationRequired-msg', '请选择民族！');
                                    return input.val() !== '';
                                },
                                nationPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=nation_input]')) {
                                        return true;
                                    }
                                    input.attr('data-nationPattern-msg', '请输入汉字！');
                                    return input.val() === '' || input.val().match(/^[\u4E00-\u9FA5]+$/) !== null;
                                }
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
                            },
                            validation: {
                                zodiacRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=zodiac]')) {
                                        return true;
                                    }
                                    input.attr('data-zodiacRequired-msg', '请选择生肖！');
                                    return input.val() !== '';
                                },
                                zodiacPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=zodiac_input]')) {
                                        return true;
                                    }
                                    input.attr('data-zodiacPattern-msg', '请输入生肖！');
                                    return input.val() === '' || input.val().match(/^[鼠|牛|虎|兔|龙|蛇|马|羊|猴|鸡|狗|猪]{1}$/) !== null;
                                }
                            }
                        },
                        language: { type: 'string',
                            parse: function (e) {
                                return $.trim(e);
                            },
                            validation: {
                                languageRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=language]')) {
                                        return true;
                                    }
                                    input.attr('data-languageRequired-msg', '请输入语言！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        education: { type: 'object',
                            defaultValue: [],
                            validation: {
                                educationRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=education]')) {
                                        return true;
                                    }
                                    input.attr('data-educationRequired-msg', '请选择教育程度！');
                                    return $('.k-grid-edit-row [name=education]').is(':checked');
                                }
                            }
                        },
                        graduation: { type: 'date',
                            defaultValue: null,
                            parse: function (e) {
                                return kendo.toString(new Date(e), 'yyyy');
                            },
                            validation: {
                                graduationRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=graduation]')) {
                                        return true;
                                    }
                                    input.attr('data-graduationRequired-msg', '请输入毕业年份！');
                                    return input.val() !== '';
                                },
                                graduationPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=graduation]')) {
                                        return true;
                                    }
                                    input.attr('data-graduationPattern-msg', '年份格式不正确！');
                                    return kendo.parseDate(input.val(), 'yyyy') instanceof Date;
                                }
                            }
                        },
                        firstJob: { type: 'date',
                            defaultValue: null,
                            parse: function (e) {
                                return kendo.toString(new Date(e), 'yyyy-MM');
                            },
                            validation: {
                                firstJobRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=firstJob]')) {
                                        return true;
                                    }
                                    input.attr('data-firstJobRequired-msg', '请输入参加工作年月！');
                                    return input.val() !== '';
                                },
                                firstJobPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=firstJob]')) {
                                        return true;
                                    }
                                    input.attr('data-firstJobPattern-msg', '月份格式不正确！');
                                    return kendo.parseDate(input.val(), 'yyyy-MM') instanceof Date;
                                }
                            }
                        },
                        mobile: { type: 'string',
                            validation: {
                                mobileRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=mobile]')) {
                                        return true;
                                    }
                                    input.attr('data-mobileRequired-msg', '请输入手机！');
                                    return input.val() !== '';
                                },
                                mobilePattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=mobile]')) {
                                        return true;
                                    }
                                    input.attr('data-mobilePattern-msg', '手机格式不正确！');
                                    return input.val().match(/^1(3[0-9]|4[579]|5[0-35-9]|6[6]|7[0135-8]|8[0-9]|9[89])\d{8}$/) !== null;
                                }
                            }
                        },
                        email: { type: 'string',
                            validation: {
                                emailRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=email]')) {
                                        return true;
                                    }
                                    input.attr('data-emailRequired-msg', '请输入电子邮件！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        homepage: { type: 'string',
                            validation: {
                                homepageRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=homepage]')) {
                                        return true;
                                    }
                                    input.attr('data-homepageRequired-msg', '请输入个人主页！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        getUp: { type: 'date',
                            defaultValue: null,
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'HH:mm');
                            },
                            validation: {
                                getUpRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=getUp]')) {
                                        return true;
                                    }
                                    input.attr('data-getUpRequired-msg', '请输入起床时间！');
                                    return input.val() !== '';
                                },
                                getUpPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=getUp]')) {
                                        return true;
                                    }
                                    input.attr('data-getUpPattern-msg', '时间格式不正确！');
                                    return kendo.parseDate(input.val(), 'HH:mm') instanceof Date;
                                }
                            }
                        },
                        importantMoment: { type: 'date',
                            defaultValue: null,
                            parse: function (e) {
                                return kendo.toString(kendo.parseDate(e), 'yyyy-MM-dd HH:mm');
                            },
                            validation: {
                                importantMomentRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=importantMoment]')) {
                                        return true;
                                    }
                                    input.attr('data-importantMomentRequired-msg', '请输入最有意义的时刻！');
                                    return input.val() !== '';
                                },
                                importantMomentPattern: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=importantMoment]')) {
                                        return true;
                                    }
                                    input.attr('data-importantMomentPattern-msg', '日期时间格式不正确！');
                                    return kendo.parseDate(input.val(), 'yyyy-MM-dd HH:mm') instanceof Date;
                                }
                            }
                        },
                        character: { type: 'number',
                            validation: {
                                characterRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=character]')) {
                                        return true;
                                    }
                                    input.attr('data-characterRequired-msg', '请选择性格！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        color: {
                            defaultValue: 'rgba(0, 0, 0, 0)',
                            parse: function (e) {
                                return 'rgba('+ kendo.parseColor(e).r +', '+ kendo.parseColor(e).g +', '+ kendo.parseColor(e).b +', '+ kendo.parseColor(e).a +')';
                            },
                            validation: {
                                colorRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=color]')) {
                                        return true;
                                    }
                                    input.attr('data-colorRequired-msg', '请选择颜色喜好！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        constellation: { type: 'object',
                            defaultValue: [],
                            validation: {
                                constellationRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=constellation]')) {
                                        return true;
                                    }
                                    input.attr('data-constellationRequired-msg', '请选择相配的星座！');
                                    return input.val() !== null;
                                }
                            }
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
                            },
                            validation: {
                                tourismRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=tourism]')) {
                                        return true;
                                    }
                                    input.attr('data-tourismRequired-msg', '请选择旅游足迹！');
                                    return input.prev().find('li.k-button').length > 0;
                                }
                            }
                        },
                        summary: { type: 'string',
                            validation: {
                                summaryRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=summary]')) {
                                        return true;
                                    }
                                    input.attr('data-summaryRequired-msg', '请输入自我介绍！');
                                    return input.val() !== '';
                                }
                            }
                        },
                        photo: { type: 'object',
                            defaultValue: {
                                url: 'img/avatar.png',
                                name: 'avatar',
                                extension: '.png',
                                size: 53284
                            },
                            validation: {
                                photoRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=photo]')) {
                                        return true;
                                    }
                                    input.attr('data-photoRequired-msg', '请上传头像！');
                                    return $('#photoShow').attr('alt') !== 'avatar.png' && $('#photoShow').attr('title') !== '52.04 KB';
                                }
                            }
                        },
                        sign: { type: 'string',
                            validation: {
                                signRequired: function (input) {
                                    if (!input.is('.k-grid-edit-row [name=sign]')) {
                                        return true;
                                    }
                                    input.attr('data-signRequired-msg', '请输入签名！');
                                    return input.val() !== '';
                                }
                            }
                        }
                    }
                }
            },
            //serverPaging: true,
            pageSize: 10
        },
        toolbar: [
            { name: 'create' }
        ],
        columns: [
            { title: '操作', width: '230px',
                command: [
                    { name: 'detail', text: '详情',
                        iconClass: 'k-icon k-i-txt',
                        click: function (e) {
                            e.preventDefault();
                            divWindow('详情', 'auto', '40%', kendo.template($('#detailsTemplate').html())(this.dataItem($(e.target).closest('tr'))));
                        }
                    },
                    { name: 'edit',
                        iconClass: {
                            edit: 'k-icon k-i-edit',
                            update: 'k-icon k-i-check',
                            cancel: 'k-icon k-i-cancel'
                        },
                        text: {
                            update: '保存'
                        }
                    },
                    { name: 'destroy',
                        iconClass: 'k-icon k-i-x'
                    }
                ]
            },
            { field: 'userName', title: '用户名', width: '80px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="userName" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'realName', title: '姓名', width: '100px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="realName" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'nickName', title: '昵称', width: '110px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="nickName" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'password', title: '密码', width: '100px',
                template: function (dataItem) {
                    return dataItem.password.replace(dataItem.password.substr(0), '******');
                },
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="password" type="password" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'confirmPassword', title: '确认密码', width: '100px',
                template: function (dataItem) {
                    return dataItem.confirmPassword.replace(dataItem.confirmPassword.substr(0), '******');
                },
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<strong class="k-required d-block">&nbsp;</strong>').appendTo(container);
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
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-radio" id="genderEdit1" name="gender" type="radio" value="1" data-bind="checked: '+ options.field +'"><label class="k-radio-label" for="genderEdit1">男</label>' +
                        '<input class="k-radio" id="genderEdit2" name="gender" type="radio" value="2" data-bind="checked: '+ options.field +'"><label class="k-radio-label" for="genderEdit2">女</label>' +
                        '<span class="k-invalid-msg" data-for="gender"></span>')
                        .appendTo(container);
                }
            },
            { field: 'age', title: '年龄', width: '80px',
                template: '#= age # 岁',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="age" type="number" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoNumericTextBox({
                            format: 'n0',
                            decimals: 0,
                            min: 1,
                            max: 120
                        });
                    $('<span class="k-invalid-msg" data-for="age"></span>')
                        .appendTo(container);
                }
            },
            { field: 'height', title: '身高', width: '100px',
                template: '#= kendo.toString(height, "0.00") # m',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="height" type="number" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoNumericTextBox({
                            format: '0.00 m',
                            decimals: 2,
                            step: 0.01,
                            min: 1.01,
                            max: 3.00
                        });
                    $('<span class="k-invalid-msg" data-for="height"></span>')
                        .appendTo(container);
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
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="bloodType"></span>')
                        .appendTo(container);
                }
            },
            { field: 'birthday', title: '生日', width: '140px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="birthday" type="date" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDatePicker({
                            format: 'yyyy-MM-dd',
                            footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #',
                            min: new Date(1920, 0, 1),
                            max: new Date()
                        });
                    $('<span class="k-invalid-msg" data-for="birthday"></span>')
                        .appendTo(container);
                }
            },
            { field: 'mateBirthday', title: '配偶生日', width: '110px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="mateBirthday" type="date" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDateInput({
                            format: 'yyyy-MM-dd',
                            min: new Date(1920, 0, 1),
                            max: new Date()
                        });
                    $('<span class="k-invalid-msg" data-for="mateBirthday"></span>')
                        .appendTo(container);
                }
            },
            { field: 'creditCard', title: '银行卡', width: '170px',
                template: function (dataItem) {
                    return dataItem.creditCard.replace(dataItem.creditCard.substr(2, 12), '** **** **** **');
                },
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="creditCard" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoMaskedTextBox({
                            mask: '0000 0000 0000 0000'
                        });
                    $('<span class="k-invalid-msg" data-for="creditCard"></span>')
                        .appendTo(container);
                }
            },
            { field: 'asset', title: '资产', width: '170px',
                format: '{0:c}',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="asset" type="number" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoNumericTextBox({
                            format: 'c',
                            decimals: 2,
                            step: 10000
                        });
                    $('<span class="k-invalid-msg" data-for="asset"></span>')
                        .appendTo(container);
                }
            },
            { field: 'nativePlace', title: '籍贯', width: '250px',
                template: '#= nativePlace.provinceName # - #= nativePlace.cityName # - #= nativePlace.areaName #',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="nativePlace"></span>')
                        .appendTo(container);
                }
            },
            { field: 'domicile', title: '居住地', width: '240px',
                template: '#= domicile.name #',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="domicile"></span>')
                        .appendTo(container);
                }
            },
            { field: 'nation', title: '民族', width: '140px',
                template: '#= nation.nationName #',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="nation"></span><span class="k-invalid-msg" data-for="nation_input"></span>')
                        .appendTo(container);
                }
            },
            { field: 'zodiac', title: '生肖', width: '90px',
                template: '#= zodiac.zodiacName #',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="zodiac"></span><span class="k-invalid-msg" data-for="zodiac_input"></span>')
                        .appendTo(container);
                }
            },
            { field: 'language', title: '语言', width: '240px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="language"></span>')
                        .appendTo(container);
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
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-checkbox" id="educationEdit1" name="education" type="checkbox" value="1" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit1">小学</label>' +
                        '<input class="k-checkbox" id="educationEdit2" name="education" type="checkbox" value="2" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit2">初中</label>' +
                        '<input class="k-checkbox" id="educationEdit3" name="education" type="checkbox" value="3" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit3">高中</label>' +
                        '<input class="k-checkbox" id="educationEdit4" name="education" type="checkbox" value="4" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit4">中专</label>' +
                        '<input class="k-checkbox" id="educationEdit5" name="education" type="checkbox" value="5" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit5">大专</label>' +
                        '<input class="k-checkbox" id="educationEdit6" name="education" type="checkbox" value="6" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit6">本科</label>' +
                        '<input class="k-checkbox" id="educationEdit7" name="education" type="checkbox" value="7" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit7">硕士</label>' +
                        '<input class="k-checkbox" id="educationEdit8" name="education" type="checkbox" value="8" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit8">博士</label>' +
                        '<input class="k-checkbox" id="educationEdit9" name="education" type="checkbox" value="9" data-bind="checked: '+ options.field +'"><label class="k-checkbox-label" for="educationEdit9">其他</label>' +
                        '<span class="k-invalid-msg" data-for="education"></span>')
                        .appendTo(container);
                }
            },
            { field: 'graduation', title: '毕业年份', width: '90px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="graduation" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDatePicker({
                            start: 'decade',
                            depth: 'decade',
                            format: 'yyyy',
                            footer: '今年：#= kendo.toString(data, "yyyy年") #'
                        });
                    $('<span class="k-invalid-msg" data-for="graduation"></span>')
                        .appendTo(container);
                }
            },
            { field: 'firstJob', title: '参加工作年月', width: '110px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="firstJob" type="month" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDatePicker({
                            start: 'year',
                            depth: 'year',
                            format: 'yyyy-MM',
                            footer: '当月：#= kendo.toString(data, "yyyy年MM月") #'
                        });
                    $('<span class="k-invalid-msg" data-for="firstJob"></span>')
                        .appendTo(container);
                }
            },
            { field: 'mobile', title: '手机', width: '120px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="mobile" type="tel" data-bind="value: '+ options.field +'">')
                        .appendTo(container);
                }
            },
            { field: 'email', title: '电子邮件', width: '180px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="email" type="email" data-bind="value: '+ options.field +'" data-email-msg="电子邮件格式不正确！">')
                        .appendTo(container);
                }
            },
            { field: 'homepage', title: '个人主页', width: '190px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input class="k-textbox" name="homepage" type="url" data-bind="value: '+ options.field +'" data-url-msg="网址格式不正确！">')
                        .appendTo(container);
                }
            },
            { field: 'getUp', title: '起床时间', width: '90px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="getUp" type="time" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoTimePicker({
                            format: 'HH:mm'
                        });
                    $('<span class="k-invalid-msg" data-for="getUp"></span>')
                        .appendTo(container);
                }
            },
            { field: 'importantMoment', title: '最有意义的时刻', width: '200px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="importantMoment" type="datetime" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoDateTimePicker({
                            format: 'yyyy-MM-dd HH:mm',
                            footer: '现在：#= kendo.toString(data, "yyyy年MM月dd日 HH:mm") #'
                        });
                    $('<span class="k-invalid-msg" data-for="importantMoment"></span>')
                        .appendTo(container);
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
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="character"></span>')
                        .appendTo(container);
                }
            },
            { field: 'color', title: '颜色喜好', width: '90px',
                template: '<span style="display: inline-block; width: 100%; height: 24px; background: #= color #; border: 1px solid \\#c5c5c5; border-radius: 4px; vertical-align: middle;"></span>',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<input name="color" data-bind="value: '+ options.field +'">')
                        .appendTo(container)
                        .kendoColorPicker({
                            opacity: true,
                            buttons: false
                        });
                    $('<span class="k-invalid-msg" data-for="color"></span>')
                        .appendTo(container);
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
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="constellation"></span>')
                        .appendTo(container);
                }
            },
            { field: 'tourism', title: '旅游足迹', width: '270px',
                template:
                    '# for (var i = 0; i < tourism.length; i++) { #' +
                        '#= tourism[i].name #&nbsp;' +
                    '# } #',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                    $('<span class="k-invalid-msg" data-for="tourism"></span>')
                        .appendTo(container);
                }
            },
            { field: 'summary', title: '自我介绍', width: '310px',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<textarea class="k-textarea" name="summary" data-bind="value: '+ options.field +'"></textarea>')
                        .appendTo(container);
                }
            },
            { field: 'photo', title: '头像', width: '320px',
                template: '<a href="javascript:showBigPic(\'#= photo.url #\');"><img class="w-10 rounded-circle" src="#= photo.url #" alt="#= photo.name ##= photo.extension #"></a><small class="ml-2 text-muted">[#= kendo.toString(photo.size / 1024, "0.00") # KB]</small>',
                editor: function (container, options) {
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
                    $('<div class="media">' +
                            '<img class="img-thumbnail w-15 mr-2" id="photoShow" src="'+ options.model.photo.url +'" alt="'+ options.model.photo.name + options.model.photo.extension +'" title="'+ kendo.toString(options.model.photo.size / 1024, "0.00") +' KB">' +
                            '<div class="media-body">' +
                                '<input id="photoEdit" name="photo" type="file">' +
                                '<span class="k-invalid-msg" data-for="photo"></span>' +
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
                    $('<strong class="k-required d-block">*<small>必填</small></strong>').appendTo(container);
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
                                'outdent',
                                'viewHtml'
                            ]
                        });
                    $('<span class="k-invalid-msg" data-for="sign"></span>')
                        .appendTo(container);
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
        reorderable: true,
        resizable: true,
        editable: {
            mode: 'inline'
        },
        edit: function (e) {
            e.container.find('.k-grid-update', '.k-grid-cancel').attr('href', 'javascript:;');
        }
    });
});