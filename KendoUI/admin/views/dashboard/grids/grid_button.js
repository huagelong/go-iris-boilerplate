$.getScript('js/jszip.min.js');
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
                        password: { type: 'string',
                            parse: function (e) {
                                return e.replace(e.substr(0), '******');
                            }
                        },
                        confirmPassword: { type: 'string',
                            parse: function (e) {
                                return e.replace(e.substr(0), '******');
                            }
                        },
                        online: { type: 'boolean' },
                        gender: { type: 'string' },
                        age: { type: 'number',
                            parse: function (e) {
                                return e + ' 岁';
                            }
                        },
                        height: { type: 'number',
                            parse: function (e) {
                                return kendo.toString(e, '0.00') + ' m';
                            }
                        },
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
                        creditCard: { type: 'string',
                            parse: function (e) {
                                return e.replace(e.substr(2, 12), '** **** **** **');
                            }
                        },
                        asset: { type: 'number',
                            parse: function (e) {
                                return kendo.toString(e, 'c');
                            }
                        },
                        nativePlace: { type: 'string',
                            parse: function (e) {
                                return e.provinceName + ' - ' + e.cityName + ' - ' + e.areaName;
                            }
                        },
                        domicile: { type: 'string',
                            parse: function (e) {
                                return e.name;
                            }
                        },
                        nation: { type: 'string',
                            parse: function (e) {
                                return e.nationName;
                            }
                        },
                        zodiac: { type: 'string',
                            parse: function (e) {
                                return e.zodiacName;
                            }
                        },
                        language: { type: 'string' },
                        education: { type: 'string',
                            parse: function (e) {
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
                            }
                        },
                        tourism: { type: 'string',
                            parse: function (e) {
                                var str = '';
                                for (var i = 0; i < e.length; i++) {
                                    str += e[i].name + ' ';
                                }
                                return str;
                            }
                        },
                        summary: { type: 'string' },
                        photo: { type: 'string',
                            parse: function (e) {
                                return e.url + ':' + '[' + kendo.toString(e.size / 1024, '0.00') + ' KB]';
                            }
                        },
                        sign: { type: 'string' },
                        type: { type: 'string' },
                        admin: { type: 'boolean' },
                        group: { type: 'object',
                            defaultValue: []
                        },
                        permission: { type: 'object',
                            defaultValue: []
                        }
                    }
                }
            },
            //serverPaging: true,
            pageSize: 10
        },
        toolbar: [
            { template: '<a class="k-button k-button-icontext" href="resource/grid.xlsx"><span class="fa fa-download mr-1"></span>模版下载</a>' },
            { template: '<a class="k-button k-button-icontext theme-m-box" href="javascript:importTemp();"><span class="fa fa-file-import mr-1"></span>文件导入</a>' },
            { template: '<a class="k-button k-button-icontext k-grid-excel theme-m-box" href="javascript:;"><span class="fa fa-file-export mr-1"></span>客户端导出（全部项）</a>' },
            { template: '<a class="k-button k-button-icontext" href="javascript:batchSubmitId(\'json/response.json\');"><span class="fa fa-upload mr-1"></span>服务端导出（选择项）</a>' },
            { template: '<a class="k-button k-button-icontext theme-s-box" href="javascript:sendEmail();"><span class="fa fa-envelope mr-1"></span>邮件发送</a>' },
            { template: '<a class="k-button k-button-icontext" href="javascript:print();"><span class="fa fa-print mr-1"></span>打印</a>' },
            { template: '<a class="k-button k-button-icontext float-right" href="javascript:linkTo(\'/\', \'home\');"><span class="k-icon k-i-undo"></span>返回首页</a>' }
        ],
        excel: {
            allPages: true,
            fileName: 'grid.xlsx'
        },
        columns: [
            { locked: true, selectable: true, width: '40px' },
            { locked: true, title: '操作', width: '380px',
                command: [
                    { name: 'set-admin', text: '设为管理员',
                        iconClass: 'fa fa-user mr-1',
                        visible: function (dataItem) {
                            return !(dataItem.admin);
                        },
                        click: function (e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr'));
                            confirmMsg('管理员设置', '你确定要把<strong class="theme-m mx-1">' + dataItem.realName + '</strong>设置为管理员吗？', 'question', function () {
                                $.fn.ajaxPost({
                                    ajaxData: {
                                        'id': dataItem.id,
                                        'admin': true
                                    },
                                    succeed: function () {
                                        dataItem.set('admin', true);
                                    },
                                    isMsg: true
                                });
                            });
                        }
                    },
                    { name: 'cancel-admin', text: '取消管理员',
                        className: 'theme-m-box',
                        iconClass: 'fa fa-user-tie mr-1',
                        visible: function (dataItem) {
                            return dataItem.admin;
                        },
                        click: function (e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr'));
                            confirmMsg('管理员设置', '你确定要取消<strong class="theme-m mx-1">' + dataItem.realName + '</strong>的管理员权限吗？', 'question', function () {
                                $.fn.ajaxPost({
                                    ajaxData: {
                                        'id': dataItem.id,
                                        'admin': false
                                    },
                                    succeed: function () {
                                        dataItem.set('admin', false);
                                    },
                                    isMsg: true
                                });
                            });
                        }
                    },
                    { name: 'special', text: '特殊修改',
                        iconClass: 'fa fa-user-edit mr-1',
                        click: function (e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr')),
                                divWindow = $('<div class="window-box" id="specialEdit"></div>').kendoWindow({
                                    animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
                                    title: '特殊修改',
                                    width: '30%',
                                    modal: true,
                                    pinned: true,
                                    resizable: false,
                                    open: function () {
                                        $('#onlineEdit').kendoSwitch({
                                            messages: {
                                                checked: '',
                                                unchecked: ''
                                            }
                                        });
                                        $('#specialEdit').kendoValidator({
                                            rules: {
                                                nickNameRequired: function (input) {
                                                    if (!input.is('#specialEdit [name=nickName]')) {
                                                        return true;
                                                    }
                                                    return input.val() !== '';
                                                },
                                                nickNamePattern: function (input) {
                                                    if (!input.is('#specialEdit [name=nickName]')) {
                                                        return true;
                                                    }
                                                    return input.val().match(/^[A-Za-z0-9\s_\-\u4E00-\u9FA5]{2,20}$/) !== null;
                                                },
                                                nickNameUnique: function (input) {
                                                    if (!input.is('#specialEdit [name=nickName]')) {
                                                        return true;
                                                    }
                                                    input.next().show();
                                                    var unique = true;
                                                    $.fn.ajaxPost({
                                                        ajaxAsync: false,
                                                        ajaxData: {
                                                            'nickName': input.val()
                                                        },
                                                        finished: function () {
                                                            input.next().hide();
                                                        },
                                                        succeed: function () {
                                                            unique = true;
                                                        },
                                                        failed: function () {
                                                            unique = false;
                                                        }
                                                    });
                                                    return unique;
                                                }
                                            },
                                            messages: {
                                                nickNameRequired: "请输入昵称！",
                                                nickNamePattern: "请输入2-20个大小写字母、数字、空格、下划线、中划线或汉字！",
                                                nickNameUnique: "此昵称已存在，请重新输入！"
                                            }
                                        });
                                        $('#specialEdit button.k-state-selected').unbind('click').click(function (){
                                            if ($('#specialEdit').data('kendoValidator').validate()) {
                                                $.fn.ajaxPost({
                                                    ajaxData: {
                                                        'id': dataItem.id,
                                                        'nickName': $('#specialEdit [name=nickName]').val(),
                                                        'online': $('#onlineEdit').data('kendoSwitch').value()
                                                    },
                                                    succeed: function (res) {
                                                        dataItem.set('nickName', $('#specialEdit [name=nickName]').val());
                                                        dataItem.set('online', $('#onlineEdit').data('kendoSwitch').value());
                                                        divWindow.close();
                                                    },
                                                    isMsg: true
                                                });
                                            }
                                        });
                                    },
                                    close: function () {
                                        divWindow.destroy();
                                    }
                                }).data('kendoWindow'),
                                content =
                                    '<form class="form-row">' +
                                        '<div class="form-group col-6">' +
                                            '<label class="d-block">昵称：</label>' +
                                            '<input class="k-textbox w-100" name="nickName" type="text" value="' + dataItem.nickName + '">' +
                                            '<span class="theme-m ajax-loading"><span class="k-icon k-i-loading"></span>验证中……</span><span class="k-invalid-msg" data-for="nickName"></span>' +
                                        '</div>' +
                                        '<div class="form-group col-6">' +
                                            '<label class="d-block">在线状态：</label>';
                            if (dataItem.online) {
                                content += '<input id="onlineEdit" name="online" type="checkbox" checked>';
                            } else {
                                content += '<input id="onlineEdit" name="online" type="checkbox">';
                            }
                                content +=
                                        '</div>' +
                                        '<div class="form-group col-12 row justify-content-center m-0">' +
                                            '<button class="k-button k-button-lg k-state-selected mx-2" type="button">确 定</button>' +
                                            '<button class="k-button k-button-lg mx-2" type="button" onclick="$(\'#specialEdit\').data(\'kendoWindow\').close();">取 消</button>' +
                                        '</div>' +
                                    '</form>';
                            divWindow.content(content).center().open();
                        }
                    },
                    { name: 'group',
                        template: '<a class="k-button k-button-icontext k-grid-group" href="javascript:;"><span class="fa fa-users mr-1"></span>分组</a>',
                        click: function (e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr'));
                            $.fn.ajaxPost({
                                ajaxUrl: 'json/group.json',
                                succeed: function (res) {
                                    var divWindow = $('<div class="window-box" id="groupEdit"></div>').kendoWindow({
                                            animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
                                            title: '分组',
                                            width: '50%',
                                            modal: true,
                                            pinned: true,
                                            resizable: false,
                                            open: function () {
                                                $('#groupTabStrip').kendoTabStrip({
                                                    animation: false,
                                                    select: function (e) {
                                                        $(e.sender.wrapper[0]).parent().width('100%');
                                                    }
                                                }).data('kendoTabStrip').select(0);
                                                $.each(dataItem.group, function (i, checked) {
                                                    $('#group' + checked).prop('checked', true);
                                                });
                                                $('#groupEdit button.k-state-selected').unbind('click').click(function (){
                                                    $.fn.ajaxPost({
                                                        ajaxData: $('#groupEdit form').serializeObject(),
                                                        succeed: function (res) {
                                                            dataItem.set('group', $('#groupEdit [name=group]').serializeObject().group);
                                                            divWindow.close();
                                                        },
                                                        isMsg: true
                                                    });
                                                });
                                                $('#groupEdit button.theme-m-box').unbind('click').click(function (){
                                                    $('#groupEdit :checkbox').prop('checked', false);
                                                    $.each(dataItem.group, function (i, checked) {
                                                        $('#group' + checked).prop('checked', true);
                                                    });
                                                });
                                            },
                                            close: function () {
                                                divWindow.destroy();
                                            }
                                        }).data('kendoWindow'),
                                        content =
                                            '<form>' +
                                                '<input name="id" type="hidden" value="' + dataItem.id + '">' +
                                                '<div id="groupTabStrip">' +
                                                    '<ul>';
                                    $.each(res.data, function (i, groups) {
                                        content +=      '<li>' + groups.text + '</li>';
                                    });
                                        content +=  '</ul>';
                                    $.each(res.data, function (i, groups) {
                                        content +=  '<div>' +
                                                        '<div class="row m-0">';
                                        $.each(groups.items, function (k, group) {
                                        content +=          '<div class="col-sm-6 col-md-4 col-lg-3">' +
                                                                '<input class="k-checkbox" id="group' + group.id + '" name="group" type="checkbox" value="' + group.id + '"><label class="k-checkbox-label" for="group' + group.id + '">' + group.text + '</label>' +
                                                            '</div>';
                                        });
                                        content +=      '</div>' +
                                                    '</div>';
                                    });
                                        content +='</div>' +
                                                '<div class="form-group col-12 row justify-content-center mt-3 mx-0 mb-0">' +
                                                    '<button class="k-button k-button-lg k-state-selected mx-2" type="button">确 定</button>' +
                                                    '<button class="k-button k-button-lg theme-m-box mx-2" type="button">重 置</button>' +
                                                    '<button class="k-button k-button-lg mx-2" type="button" onclick="$(\'#groupEdit\').data(\'kendoWindow\').close();">取 消</button>' +
                                                '</div>' +
                                            '</form>';
                                    divWindow.content(content).center().open();
                                }
                            });
                        }
                    },
                    { name: 'permission', text: '权限',
                        iconClass: 'fa fa-user-cog mr-1',
                        visible: function (dataItem) {
                            return dataItem.admin;
                        },
                        click: function (e) {
                            e.preventDefault();
                            var dataItem = this.dataItem($(e.target).closest('tr'));
                            $.fn.ajaxPost({
                                ajaxUrl: 'json/nav.json',
                                succeed: function (res) {
                                    var divWindow = $('<div class="window-box" id="permissionEdit"></div>').kendoWindow({
                                            animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
                                            title: '权限',
                                            width: '30%',
                                            height: '40%',
                                            modal: true,
                                            pinned: true,
                                            resizable: false,
                                            open: function () {
                                                $('#permissionTreeView').kendoTreeView({
                                                    dataSource: res.data,
                                                    checkboxes: {
                                                        checkChildren: true,
                                                        template: '<input class="k-checkbox" id="permission#= item.id #" name="permission" type="checkbox" value="#= item.id #"><label class="k-checkbox-label" for="permission#= item.id #">#= item.text #</label>'
                                                    },
                                                    template: function () {
                                                        return ''
                                                    },
                                                    dataBound: function () {
                                                        $('#permissionTreeView').find('.k-in').remove();
                                                    }
                                                });
                                                $.each(dataItem.permission, function (i, checked) {
                                                    $('#permission' + checked).prop('checked', true);
                                                });
                                                $('#permissionEdit button.k-state-selected').unbind('click').click(function (){
                                                    $.fn.ajaxPost({
                                                        ajaxData: $('#permissionEdit form').serializeObject(),
                                                        succeed: function (res) {
                                                            dataItem.set('permission', $('#permissionEdit [name=permission]').serializeObject().permission);
                                                            divWindow.close();
                                                        },
                                                        isMsg: true
                                                    });
                                                });
                                                $('#permissionEdit button.theme-m-box').unbind('click').click(function (){
                                                    $('#permissionEdit :checkbox').prop('checked', false);
                                                    $.each(dataItem.permission, function (i, checked) {
                                                        $('#permission' + checked).prop('checked', true);
                                                    });
                                                });
                                            },
                                            close: function () {
                                                divWindow.destroy();
                                            }
                                        }).data('kendoWindow'),
                                        content =
                                            '<form>' +
                                                '<input name="id" type="hidden" value="' + dataItem.id + '">' +
                                                '<div id="permissionTreeView"></div>' +
                                                '<div class="form-group col-12 row justify-content-center mt-3 mx-0 mb-0">' +
                                                    '<button class="k-button k-button-lg k-state-selected mx-2" type="button">确 定</button>' +
                                                    '<button class="k-button k-button-lg theme-m-box mx-2" type="button">重 置</button>' +
                                                    '<button class="k-button k-button-lg mx-2" type="button" onclick="$(\'#permissionEdit\').data(\'kendoWindow\').close();">取 消</button>' +
                                                '</div>' +
                                            '</form>';
                                    divWindow.content(content).center().open();
                                }
                            });
                        }
                    }
                ]
            },
            { locked: true, field: 'type', title: '类型', width: '280px',
                values: [
                    { text: '临时', value: '0' },
                    { text: '标记', value: '1' },
                    { text: '有效', value: '2' },
                    { text: '无效', value: '3' }
                ],
                template:
                    '# var type0 = \'<button class="k-button k-button-icontext k-notification-warning ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'0\\\', \\\'临时\\\', \\\'warning\\\');"><i class="k-icon k-i-warning"></i>临时</button>\'; #' +
                    '# var type1 = \'<button class="k-button k-button-icontext k-notification-info ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'1\\\', \\\'标记\\\', \\\'info\\\');"><i class="k-icon k-i-information"></i>标记</button>\'; #' +
                    '# var type2 = \'<button class="k-button k-button-icontext k-notification-success ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'2\\\', \\\'有效\\\', \\\'success\\\');"><i class="k-icon k-i-check-outline"></i>有效</button>\'; #' +
                    '# var type3 = \'<button class="k-button k-button-icontext k-notification-error ml-1" onclick="setType(this, \\\'\' + id + \'\\\', \\\'3\\\', \\\'无效\\\', \\\'error\\\');"><i class="k-icon k-i-close-outline"></i>无效</button>\'; #' +
                    '# if (type === "0") { #' +
                        '<span class="dot-color k-notification-warning"></span><strong class="k-notification-warning bg-transparent mx-2">临时</strong>#= type1 ##= type2 ##= type3 #' +
                    '# } else if (type === "1") { #' +
                        '<span class="dot-color k-notification-info"></span><strong class="k-notification-info bg-transparent mx-2">标记</strong>#= type0 ##= type2 ##= type3 #' +
                    '# } else if (type === "2") { #' +
                        '<span class="dot-color k-notification-success"></span><strong class="k-notification-success bg-transparent mx-2">有效</strong>#= type0 ##= type1 ##= type3 #' +
                    '# } else if (type === "3") { #' +
                        '<span class="dot-color k-notification-error"></span><strong class="k-notification-error bg-transparent mx-2">无效</strong>#= type0 ##= type1 ##= type2 #' +
                    '# } #'
            },
            { field: 'userName', title: '用户名', width: '80px' },
            { field: 'realName', title: '姓名', width: '100px' },
            { field: 'nickName', title: '昵称', width: '110px' },
            { hidden: true, field: 'password', title: '密码', width: '70px' },
            { field: 'online', title: '状态', width: '70px',
                values: [
                    { text: '在线', value: true },
                    { text: '离线', value: false }
                ],
                template:
                    '# if (online) { #' +
                        '<span class="dot-color k-notification-success"></span><span class="k-notification-success bg-transparent ml-2">在线</span>' +
                    '# } else { #' +
                        '<span class="dot-color k-notification-error"></span><span class="k-notification-error bg-transparent ml-2">离线</span>' +
                    '# } #'
            },
            { field: 'gender', title: '性别', width: '60px',
                values: [
                    { text: '男', value: '1' },
                    { text: '女', value: '2' }
                ]
            },
            { field: 'age', title: '年龄', width: '70px' },
            { field: 'height', title: '身高', width: '80px' },
            { field: 'bloodType', title: '血型', width: '70px',
                values: [
                    { text: 'A 型', value: '1' },
                    { text: 'B 型', value: '2' },
                    { text: 'O 型', value: '3' },
                    { text: 'AB 型', value: '4' },
                    { text: '其他', value: '5' }
                ]
            },
            { field: 'birthday', title: '生日', width: '110px' },
            { field: 'mateBirthday', title: '配偶生日', width: '110px' },
            { field: 'creditCard', title: '银行卡', width: '150px' },
            { field: 'asset', title: '资产', width: '140px' },
            { field: 'nativePlace', title: '籍贯', width: '250px' },
            { field: 'domicile', title: '居住地', width: '100px' },
            { field: 'nation', title: '民族', width: '100px' },
            { field: 'zodiac', title: '生肖', width: '60px' },
            { field: 'language', title: '语言', width: '210px' },
            { field: 'education', title: '教育程度', width: '130px' },
            { field: 'graduation', title: '毕业年份', width: '90px' },
            { field: 'firstJob', title: '参加工作年月', width: '110px' },
            { field: 'mobile', title: '手机', width: '120px' },
            { field: 'email', title: '电子邮件', width: '180px' },
            { field: 'homepage', title: '个人主页', width: '190px' },
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
            { field: 'constellation', title: '相配的星座', width: '170px' },
            { field: 'tourism', title: '旅游足迹', width: '200px' },
            { field: 'summary', title: '自我介绍', width: '310px' },
            { field: 'photo', title: '头像', width: '120px',
                template:
                    '# var photoUrl = photo.split(":")[0]; #' +
                    '# var photoName = photo.split(":")[0].split("/")[photo.split(":")[0].split("/").length - 1]; #' +
                    '# var photoSize = photo.split(":")[1]; #' +
                    '<a href="javascript:showBigPic(\'#= photoUrl #\');"><img class="w-25 rounded-circle" src="#= photoUrl #" alt="#= photoName #"></a><small class="ml-2 text-muted">#= photoSize #</small>'
            },
            { field: 'sign', title: '签名', width: '310px',
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
        resizable: true
    });
});

// 文件导入
function importTemp() {
    var divWindow = $('<div class="window-box" id="importEdit"></div>').kendoWindow({
        animation: {open: {effects: 'fade:in'}, close: {effects: 'fade:out'}},
        title: '文件导入',
        width: '30%',
        modal: true,
        pinned: true,
        resizable: false,
        open: function () {
            numericRange($('#importStart'), $('#importEnd'), 'n0', 0, 1, 1, 10000);
            $('#importFile').kendoUpload({
                multiple: false,
                validation: {
                    allowedExtensions: ['.xls', '.xlsx'],
                    maxFileSize: 10485760
                },
                localization: {
                    select: '<span class="fa fa-upload mr-1"></span>选择导入文件'
                },
                select: function (e) {
                    setTimeout(function (){
                        if ($(e.sender.wrapper[0]).find('.k-file-invalid-icon').length < 1) {
                            $(e.sender.element[0]).prop('required', false);
                        } else {
                            $(e.sender.element[0]).prop('required', true);
                        }
                    }, 100);
                },
                remove: function (e) {
                    $(e.sender.element[0]).prop('required', true);
                }
            });
            $('#importForm').kendoValidator();
            $('#importForm button.k-state-selected').unbind('click').click(function (){
                if ($('#importForm').data('kendoValidator').validate()) {
                    $('#importFile').prop('disabled', true);
                    $('#loading').show();
                    $.fn.ajaxPostBlob({
                        ajaxData: $('#importForm')[0],
                        finished: function () {
                            $('#loading').hide();
                            $('#importFile').prop('disabled', false);
                        },
                        succeed: function (res) {
                            divWindow.close();
                        }
                    });
                }
            });
        },
        close: function () {
            divWindow.destroy();
        }
    }).data('kendoWindow'),
    content =
        '<form class="form-row" id="importForm">' +
            '<div class="form-group col-6">' +
                '<label class="d-block"><strong class="k-required">*</strong>起始行：</label>' +
                '<input class="w-100" id="importStart" name="importStart" type="number" required data-required-msg="请输入起始行！">' +
                '<span class="k-invalid-msg" data-for="importStart"></span>' +
            '</div>' +
            '<div class="form-group col-6">' +
                '<label class="d-block"><strong class="k-required">*</strong>结束行：</label>' +
                '<input class="w-100" id="importEnd" name="importEnd" type="number" required data-required-msg="请输入结束行！">' +
                '<span class="k-invalid-msg" data-for="importEnd"></span>' +
            '</div>' +
            '<div class="form-group col-12">' +
                '<label class="d-block"><strong class="k-required">*</strong>文件上传：<small class="text-muted">（请选择：<mark>.xls</mark>、<mark>.xlsx</mark>格式，小于等于<mark>10M</mark>的文件）</small></label>' +
                '<input class="w-100" id="importFile" name="importFile" type="file" required data-required-msg="请上传文件！">' +
                '<span class="k-invalid-msg" data-for="importFile"></span>' +
            '</div>' +
            '<div class="form-group col-12 row justify-content-center m-0">' +
                '<button class="k-button k-button-lg k-state-selected mx-3" type="button">导 入</button>' +
                '<button class="k-button k-button-lg mx-3" type="button" onclick="$(\'#importEdit\').data(\'kendoWindow\').close();">取 消</button>' +
            '</div>' +
        '</form>';
    divWindow.content(content).center().open();
}

// 邮件发送
function sendEmail() {
    if ($('#grid').data('kendoGrid').selectedKeyNames().length > 0) {
        var emails = '';
        $.each($('#grid').data('kendoGrid').selectedKeyNames(), function (i, items) {
            emails += $('#grid').data('kendoGrid').dataSource.get(items).email + ';';
        });
        emails.substring(0, emails.length-1);
        var subject = encodeURIComponent('欢迎Star：Kendo UI Admin and Site~'),
            body = encodeURIComponent('<p><a href="https://ikki2000.github.io/KendoUI-Admin-Site/">https://ikki2000.github.io/KendoUI-Admin-Site/</a></p><p>Kendo UI Admin and Site base on Kendo UI for jQuery and Bootstrap 4.</p>');
        location.href = 'mailto:' + emails + '?cc=ikki2002@qq.com&subject=' + subject + '&body=' + body;
    } else {
        alertMsg('请先选择对象！', 'warning');
    }
}

// 类型设置
function setType(dom, id, type, msg, color) {
    confirmMsgBtn('类型操作', '你确定要设置为<strong class="d-inline-block mx-1 px-2 py-1 k-notification-' + color + '">' + msg + '</strong>吗？', 'question', function () {
        $.fn.ajaxPost({
            ajaxData: {
                'id': id,
                'type': type
            },
            succeed: function () {
                $('#grid').data('kendoGrid').dataItem($(dom).closest('tr')).set('type', type);
            },
            isMsg: true
        });
    });
}