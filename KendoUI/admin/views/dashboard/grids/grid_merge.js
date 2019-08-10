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
            //serverPaging: true,
            pageSize: 10
        },
        columns: [
            { title: '级别', width: '100px',
                headerAttributes: { 'class': 'align-middle' },
                attributes: { 'class': 'merge-col' },
                template: '黄金圣斗士'
            },
            { field: 'userName', title: '用户名', width: '80px',
                headerAttributes: { 'class': 'align-middle' }
            },
            { field: 'realName', title: '姓名', width: '100px',
                headerAttributes: { 'class': 'align-middle' }
            },
            { field: 'nickName', title: '昵称', width: '110px',
                headerAttributes: { 'class': 'align-middle' }
            },
            { hidden: true, field: 'password', title: '密码', width: '70px',
                headerAttributes: { 'class': 'align-middle' },
                template: function (dataItem) {
                    return dataItem.password.replace(dataItem.password.substr(0), '******');
                }
            },
            { field: 'online', title: '状态', width: '70px',
                headerAttributes: { 'class': 'align-middle' },
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #'
            },
            { field: 'gender', title: '性别', width: '60px',
                headerAttributes: { 'class': 'align-middle' },
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ]
            },
            { field: 'age', title: '年龄', width: '70px',
                headerAttributes: { 'class': 'align-middle' },
                template: '#= age # 岁'
            },
            { field: 'height', title: '身高', width: '80px',
                headerAttributes: { 'class': 'align-middle' },
                template: '#= kendo.toString(height, "0.00") # m'
            },
            { field: 'bloodType', title: '血型', width: '70px',
                headerAttributes: { 'class': 'align-middle' },
                values: [
                    { text: 'A 型', value: '1' },
                    { text: 'B 型', value: '2' },
                    { text: 'O 型', value: '3' },
                    { text: 'AB 型', value: '4' },
                    { text: '其他', value: '5' }
                ]
            },
            { field: 'birthday', title: '生日', width: '110px',
                headerAttributes: { 'class': 'align-middle' }
            },
            { title: '家庭情况',
                headerAttributes: { 'class': 'text-center' },
                columns: [
                    { field: 'mateBirthday', title: '配偶生日', width: '110px' },
                    { field: 'creditCard', title: '银行卡', width: '150px',
                        template: function (dataItem) {
                            return dataItem.creditCard.replace(dataItem.creditCard.substr(2, 12), '** **** **** **');
                        }
                    },
                    { field: 'asset', title: '资产', width: '140px',
                        format: '{0:c}'
                    },
                    { field: 'nativePlace', title: '籍贯', width: '250px',
                        attributes: { 'class': 'p-0' },
                        template:
                            '<table>' +
                                '<tr>' +
                                    '<td class="border-bottom">#= nativePlace.provinceName #</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td class="border-bottom">#= nativePlace.cityName #</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>#= nativePlace.areaName #</td>' +
                                '</tr>' +
                            '</table>'
                    },
                    { field: 'domicile', title: '居住地', width: '100px',
                        template: '#= domicile.name #'
                    },
                    { field: 'nation', title: '民族', width: '100px',
                        template: '#= nation.nationName #'
                    }
                ]
            },
            { field: 'zodiac', title: '生肖', width: '60px',
                headerAttributes: { 'class': 'align-middle' },
                template: '#= zodiac.zodiacName #'
            },
            { title: '教育情况',
                headerAttributes: { 'class': 'text-center' },
                columns: [
                    { field: 'language', title: '语言', width: '210px',
                        attributes: { 'class': 'p-0' },
                        template:
                            '<table>' +
                            '# for (var i = 0; i < language.split(/[\\s]/).length; i++) { #' +
                                '<tr>' +
                                    '# if ((i + 1) === language.split(/[\\s]/).length) { #' +
                                    '<td>' +
                                    '# } else { #' +
                                    '<td class="border-bottom">' +
                                    '# } #' +
                                        '#= language.split(/[\\s]/)[i] #' +
                                    '</td>' +
                                '</tr>' +
                            '# } #' +
                            '</table>'
                    },
                    { field: 'education', title: '教育程度', width: '130px',
                        attributes: { 'class': 'p-0' },
                        template:
                            '<table>' +
                            '# for (var i = 0; i < education.length; i++) { #' +
                                '<tr>' +
                                    '# if ((i + 1) === education.length) { #' +
                                    '<td>' +
                                    '# } else { #' +
                                    '<td class="border-bottom">' +
                                    '# } #' +
                                        '# if (education[i] === "1") { #' +
                                            '小学' +
                                        '# } else if (education[i] === "2") { #' +
                                            '初中' +
                                        '# } else if (education[i] === "3") { #' +
                                            '高中' +
                                        '# } else if (education[i] === "4") { #' +
                                            '中专' +
                                        '# } else if (education[i] === "5") { #' +
                                            '大专' +
                                        '# } else if (education[i] === "6") { #' +
                                            '本科' +
                                        '# } else if (education[i] === "7") { #' +
                                            '硕士' +
                                        '# } else if (education[i] === "8") { #' +
                                            '博士' +
                                        '# } else if (education[i] === "9") { #' +
                                            '其他' +
                                        '# } #' +
                                    '</td>' +
                                '</tr>' +
                            '# } #' +
                            '</table>'
                    },
                    { field: 'graduation', title: '毕业年份', width: '90px' },
                    { field: 'firstJob', title: '参加工作年月', width: '110px' }
                ]
            },
            { title: '联系方式',
                headerAttributes: { 'class': 'text-center' },
                columns: [
                    { field: 'mobile', title: '手机', width: '120px' },
                    { field: 'email', title: '电子邮件', width: '180px' },
                    { field: 'homepage', title: '个人主页', width: '190px' }
                ]
            },
            { title: '个性介绍',
                headerAttributes: { 'class': 'text-center' },
                columns: [
                    { field: 'getUp', title: '起床时间', width: '90px' },
                    { field: 'importantMoment', title: '最有意义的时刻', width: '150px' },
                    { field: 'character', title: '性格', width: '90px',
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
                    { field: 'color', title: '颜色喜好', width: '90px',
                        template: '<span style="display: inline-block; width: 100%; height: 24px; background: #= color #; border: 1px solid \\#c5c5c5; border-radius: 4px; vertical-align: middle;"></span>'
                    },
                    { field: 'constellation', title: '相配的星座', width: '170px',
                        attributes: { 'class': 'p-0' },
                        template:
                            '<table>' +
                            '# for (var i = 0; i < constellation.length; i++) { #' +
                                '<tr>' +
                                    '# if ((i + 1) === constellation.length) { #' +
                                    '<td>' +
                                    '# } else { #' +
                                    '<td class="border-bottom">' +
                                    '# } #' +
                                        '# if (constellation[i] === "1") { #' +
                                            '白羊座' +
                                        '# } else if (constellation[i] === "2") { #' +
                                            '金牛座' +
                                        '# } else if (constellation[i] === "3") { #' +
                                            '双子座' +
                                        '# } else if (constellation[i] === "4") { #' +
                                            '巨蟹座' +
                                        '# } else if (constellation[i] === "5") { #' +
                                            '狮子座' +
                                        '# } else if (constellation[i] === "6") { #' +
                                            '处女座' +
                                        '# } else if (constellation[i] === "7") { #' +
                                            '天秤座' +
                                        '# } else if (constellation[i] === "8") { #' +
                                            '天蝎座' +
                                        '# } else if (constellation[i] === "9") { #' +
                                            '射手座' +
                                        '# } else if (constellation[i] === "10") { #' +
                                            '山羊座' +
                                        '# } else if (constellation[i] === "11") { #' +
                                            '水瓶座' +
                                        '# } else if (constellation[i] === "12") { #' +
                                            '双鱼座' +
                                        '# } #' +
                                    '</td>' +
                                '</tr>' +
                            '# } #' +
                            '</table>'
                    },
                    { field: 'tourism', title: '旅游足迹', width: '200px',
                        attributes: { 'class': 'p-0' },
                        template:
                            '<table>' +
                            '# for (var i = 0; i < tourism.length; i++) { #' +
                                '<tr>' +
                                    '# if ((i + 1) === tourism.length) { #' +
                                    '<td>' +
                                    '# } else { #' +
                                    '<td class="border-bottom">' +
                                    '# } #' +
                                        '#= tourism[i].name #' +
                                    '</td>' +
                                '</tr>' +
                            '# } #' +
                            '</table>'
                    }
                ]
            },
            { field: 'summary', title: '自我介绍', width: '310px',
                headerAttributes: { 'class': 'align-middle' }
            },
            { field: 'photo', title: '头像', width: '120px',
                headerAttributes: { 'class': 'align-middle' },
                template: '<a href="javascript:showBigPic(\'#= photo.url #\');"><img class="w-25 rounded-circle" src="#= photo.url #" alt="#= photo.name ##= photo.extension #"></a><small class="ml-2 text-muted">[#= kendo.toString(photo.size / 1024, "0.00") # KB]</small>'
            },
            { field: 'sign', title: '签名', width: '310px',
                headerAttributes: { 'class': 'align-middle' },
                template: '#= sign #'
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
        dataBound: function (e) {
            $('td.merge-col').attr('rowspan', e.sender._data.length).not(':first').remove();
        }
    });
});