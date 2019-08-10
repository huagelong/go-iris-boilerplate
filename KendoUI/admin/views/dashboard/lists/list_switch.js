$(function () {
    // 生成工具条
    $('#toolbar').kendoToolBar({
        resizable: false,
        items: [
            { type: 'spacer' },
            { template: '<a class="k-button k-button-icontext theme-m-box" href="javascript:;" onclick="switchView(\'pic\', this);"><span class="k-icon k-i-group"></span>大图</a>' },
            { template: '<a class="k-button k-button-icontext" href="javascript:;" onclick="switchView(\'list\', this)"><span class="k-icon k-i-grid-layout"></span>列表</a>' }
        ]
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
});

// 切换
function switchView(type, dom) {
    if (type === 'list') {
        $('.picArea').hide();
        $('#listView').removeClass('row mx-0 d-flex');
        $('.listArea').show();
        $('#toolbar .k-button').removeClass('theme-m-box');
        $(dom).addClass('theme-m-box');
    } else if (type === 'pic') {
        $('.listArea').hide();
        $('#listView').addClass('row mx-0 d-flex');
        $('.picArea').show();
        $('#toolbar .k-button').removeClass('theme-m-box');
        $(dom).addClass('theme-m-box');
    }
}