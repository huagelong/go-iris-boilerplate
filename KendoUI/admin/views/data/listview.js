$(function () {
    // 普通列表视图
    $('#generalListView').kendoListView({
        dataSource: {
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
            pageSize: 3
        },
        template: kendo.template($('#listTemplate').html()),
        height: 750,
        scrollable: 'endless',
        navigatable: true,
        selectable: 'multiple'
    });
});