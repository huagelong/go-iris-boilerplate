$(function () {
    // 年龄
    $('#age').kendoNumericTextBox({
        format: 'n0',
        decimals: 0,
        min: 1,
        max: 120
    });
    // 身高
    $('#height').kendoNumericTextBox({
        format: '0.00 m',
        decimals: 2,
        step: 0.01,
        min: 1.01,
        max: 3.00
    });
    // 血型
    $('#bloodType').kendoDropDownList();
    // 生日
    $('#birthday').kendoDatePicker({
        format: 'yyyy-MM-dd',
        footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #',
        min: new Date(1920, 0, 1),
        max: new Date()
    });
    // 配偶生日
    $('#mateBirthday').kendoDateInput({
        format: 'yyyy-MM-dd',
        min: new Date(1920, 0, 1),
        max: new Date()
    });
    // 银行卡
    $('#creditCard').kendoMaskedTextBox({
        mask: '0000 0000 0000 0000'
    });
    // 资产
    $('#asset').kendoNumericTextBox({
        format: 'c',
        decimals: 2,
        step: 10000
    });
    // 籍贯
    $('#province').kendoDropDownList({
        dataSource: {
            transport: {
                read: {
                    url: 'json/province.json',
                    dataType: 'json'
                }
            },
            schema: {
                data: 'data'
            }
        },
        optionLabel: '-= 省份 =-',
        dataValueField: 'province',
        dataTextField: 'provinceName'
    });
    $('#city').kendoDropDownList({
        dataSource: {
            transport: {
                read: {
                    url: 'json/city.json',
                    dataType: 'json'
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
        dataTextField: 'cityName'
    });
    $('#area').kendoDropDownList({
        dataSource: {
            transport: {
                read: {
                    url: 'json/area.json',
                    dataType: 'json'
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
        dataTextField: 'areaName'
    });
    // 居住地
    $('#domicile').kendoDropDownTree({
        dataSource: {
            transport: {
                read: {
                    url: 'json/select_hierarchical_data.json',
                    dataType: 'json'
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
        loadOnDemand: true
    });
    // 民族
    $('#nation').kendoComboBox({
        dataSource: {
            transport: {
                read: {
                    url: 'json/nation.json',
                    dataType: 'json'
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
                read: {
                    url: 'json/zodiac.json',
                    dataType: 'json'
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
                read: {
                    url: 'json/language.json',
                    dataType: 'json'
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
    $('#graduation').kendoDatePicker({
        start: 'decade',
        depth: 'decade',
        format: 'yyyy',
        footer: '今年：#= kendo.toString(data, "yyyy年") #'
    });
    // 参加工作年月
    $('#firstJob').kendoDatePicker({
        start: 'year',
        depth: 'year',
        format: 'yyyy-MM',
        footer: '当月：#= kendo.toString(data, "yyyy年MM月") #'
    });
    // 起床时间
    $('#getUp').kendoTimePicker({
        format: 'HH:mm'
    });
    // 最有意义的时刻
    $('#importantMoment').kendoDateTimePicker({
        format: 'yyyy-MM-dd HH:mm',
        footer: '现在：#= kendo.toString(data, "yyyy年MM月dd日 HH:mm") #'
    });
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
        palette: ['#c39b8f', '#d770ad', '#da4453', '#ff9800', '#f6bb42', '#aab2bd', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#434a54'],
        columns: 6,
        tileSize: 32
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
                read: {
                    url: 'json/select_hierarchical_data.json',
                    dataType: 'json'
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
        checkboxes: true,
        autoClose: false
    });
    // 头像
    $('#photo').kendoUpload({
        multiple: false,
        validation: {
            allowedExtensions: ['.jpg', '.png', '.gif', '.bmp'],
            maxFileSize: 10485760
        }
    });
    // 签名
    $('#sign').kendoEditor({
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
    // 同意条款
    $('#agree').kendoSwitch({
        messages: {
            checked: '',
            unchecked: ''
        },
        checked: true
    });
    // 表单验证
    var validator = $('form').kendoValidator({
        rules: {
            // 匹配密码
            matchPassword: function (input) {
                if (!input.is('[name=confirmPassword]')) {
                    return true;
                }
                return (input.val() === $('[name=password]').val());
            },
            // 性别
            gender: function (input) {
                if (!input.is('[name=gender]')) {
                    return true;
                }
                return $('[name=gender]').is(':checked');
            },
            // 生日
            birthday: function (input) {
                if (!input.is('[name=birthday]')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
            },
            // 配偶生日
            mateBirthday: function (input) {
                if (!input.is('[name=mateBirthday]')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
            },
            // 民族
            nation: function (input) {
                if (!input.is('[name=nation_input]')) {
                    return true;
                }
                return input.val() === '' || input.val().match(/^[\u4E00-\u9FA5]+$/) !== null;
            },
            // 生肖
            zodiac: function (input) {
                if (!input.is('[name=zodiac_input]')) {
                    return true;
                }
                return input.val() === '' || input.val().match(/^[鼠|牛|虎|兔|龙|蛇|马|羊|猴|鸡|狗|猪]{1}$/) !== null;
            },
            // 教育程度
            education: function (input) {
                if (!input.is('[name=education]')) {
                    return true;
                }
                return $('[name=education]').is(':checked');
            },
            // 毕业年份
            graduation: function (input) {
                if (!input.is('[name=graduation]')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'yyyy') instanceof Date;
            },
            // 参加工作年月
            firstJob: function (input) {
                if (!input.is('[name=firstJob]')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'yyyy-MM') instanceof Date;
            },
            // 起床时间
            getUp: function (input) {
                if (!input.is('[name=getUp]')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'HH:mm') instanceof Date;
            },
            // 最有意义的时刻
            importantMoment: function (input) {
                if (!input.is('[name=importantMoment]')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'yyyy-MM-dd HH:mm') instanceof Date;
            },
            // 头像
            photo: function (input) {
                if (!input.is('[name=photo]')) {
                    return true;
                }
                return $('[name=photo]').val() !== '';
            }
        },
        messages: {
            matchPassword: '两次输入的密码不一致！',
            gender: '请选择性别！',
            birthday: '日期格式不正确！',
            mateBirthday: '日期格式不正确！',
            nation: '请输入汉字！',
            zodiac: '请输入生肖！',
            education: '请选择教育程度！',
            graduation: '年份格式不正确！',
            firstJob: '月份格式不正确！',
            getUp: '时间格式不正确！',
            importantMoment: '日期时间格式不正确！',
            photo: '请上传头像！'
        }
    }).data('kendoValidator');
    // 表单提交
    $('#submitBtn').unbind('click').click(function () {
        if (validator.validate()) {
            $(this).removeClass('k-state-selected').addClass('k-state-disabled').prop('disabled', true);
            noticeMsg('开始提交表单……', 'success', 'center', 500, function () {
                $('form').submit();
            });
        } else {
            noticeMsg('表单中有选项未填写正确！请检查……', 'error', 'center', 2000, function () {
                // 出错定位
                $('.k-invalid-msg:visible').first().parents('.form-group').focus();
            });
        }
    });
});