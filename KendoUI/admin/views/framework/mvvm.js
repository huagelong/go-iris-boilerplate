$(function () {
    // 创建视图模型
    var viewModel = kendo.observable({
        // ID
        id: "uid005",
        // 用户名
        userName: 'user005',
        // 姓名
        realName: '艾欧里亚',
        // 昵称
        nickName: 'Aiolia',
        // 密码
        password: '050505050505',
        // 确认密码
        confirmPassword: '050505050505',
        // 状态
        online: true,
        // 性别
        gender: '1',
        // 年龄
        age: 50,
        // 身高
        height: 1.5,
        // 血型
        bloodTypeData: [
            { text: 'A 型', value: '1' },
            { text: 'B 型', value: '2' },
            { text: 'O 型', value: '3' },
            { text: 'AB 型', value: '4' },
            { text: '其他', value: '5' }
        ],
        bloodType: '5',
        // 生日
        birthday: '2005-05-05',
        birthdayParse: function () {
            return kendo.toString(kendo.parseDate(this.get('birthday')), 'yyyy-MM-dd');
        },
        // 配偶生日
        mateBirthday: '2005-05-05',
        mateBirthdayParse: function () {
            return kendo.toString(kendo.parseDate(this.get('mateBirthday')), 'yyyy-MM-dd');
        },
        // 银行卡
        creditCard: '6225000000000005',
        creditCardParse: function () {
            return this.get('creditCard').replace(/\s*/g, '');
        },
        // 资产
        asset: 50000000,
        // 籍贯
        provinceData: new kendo.data.DataSource({
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
                data: 'data',
                model: {
                    id: 'province'
                }
            }
        }),
        cityData: new kendo.data.DataSource({
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
                data: 'data',
                model: {
                    id: 'city'
                }
            }
        }),
        areaData: new kendo.data.DataSource({
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
                data: 'data',
                model: {
                    id: 'area'
                }
            }
        }),
        nativePlace: {
            province: '150000',
            provinceName: '内蒙古自治区',
            city: '150100',
            cityName: '呼和浩特市',
            area: '150102',
            areaName: '新城区'
        },
        provinceParse: function () {
            this.set('nativePlace.provinceName', this.provinceData.get(this.nativePlace.province).provinceName);
        },
        cityParse: function () {
            this.set('nativePlace.cityName', this.cityData.get(this.nativePlace.city).cityName);
        },
        areaParse: function () {
            this.set('nativePlace.areaName', this.areaData.get(this.nativePlace.area).areaName);
        },
        // 居住地
        domicileData: new kendo.data.HierarchicalDataSource({
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
        }),
        domicile: {
            code: '1501',
            name: '呼和浩特市'
        },
        domicileParse: function () {
            var obj = {};
            obj.code = this.get('domicile').code;
            obj.name = this.get('domicile').name;
            return JSON.stringify(obj)
                .replace(/{/g, '{\n' + tab + tab)
                .replace(/:/g, ':\u0020')
                .replace(/,/g, ',\n' + tab + tab)
                .replace(/}/g, '\n' + tab + '}');
        },
        // 民族
        nationData: new kendo.data.DataSource({
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
        }),
        nation: {
            nation: '20',
            nationName: '汉族'
        },
        nationParse: function () {
            return JSON.stringify(this.get('nation'))
                .replace(/{/g, '{\n' + tab + tab)
                .replace(/:/g, ':\u0020')
                .replace(/,/g, ',\n' + tab + tab)
                .replace(/}/g, '\n' + tab + '}');
        },
        // 生肖
        zodiacData: new kendo.data.DataSource({
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
        }),
        zodiac: {
            zodiac: '05',
            zodiacName: '龙'
        },
        zodiacParse: function () {
            var obj = {};
            obj.zodiac = this.get('zodiac').zodiac;
            obj.zodiacName = this.get('zodiac').zodiacName;
            return JSON.stringify(obj)
                .replace(/{/g, '{\n' + tab + tab)
                .replace(/:/g, ':\u0020')
                .replace(/,/g, ',\n' + tab + tab)
                .replace(/}/g, '\n' + tab + '}');
        },
        // 语言
        languageData: new kendo.data.DataSource({
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
        }),
        language: '俄语 日语 朝鲜语',
        languageParse: function () {
            return $.trim(this.get('language'));
        },
        // 教育程度
        education: [
            '5',
            '6',
            '7'
        ],
        educationParse: function () {
            return JSON.stringify(this.get('education'))
                .replace(/\[/g, '[\n' + tab + tab)
                .replace(/,/g, ',\n' + tab + tab)
                .replace(/]/g, '\n' + tab + ']');
        },
        // 毕业年份
        graduation: '2005',
        graduationParse: function () {
            return kendo.toString(new Date(this.get('graduation')), 'yyyy');
        },
        // 参加工作年月
        firstJob: '2005-05',
        firstJobParse: function () {
            return kendo.toString(new Date(this.get('firstJob')), 'yyyy-MM');
        },
        // 手机
        mobile: '13800138555',
        // 电子邮件
        email: '050505@050505.com',
        // 个人主页
        homepage: 'http://www.050505.com',
        // 起床时间
        getUp: '05:05',
        getUpParse: function () {
            return kendo.toString(kendo.parseDate(this.get('getUp')), 'HH:mm');
        },
        // 最有意义的时刻
        importantMoment: '2005-05-05 05:05',
        importantMomentParse: function () {
            return kendo.toString(kendo.parseDate(this.get('importantMoment')), 'yyyy-MM-dd HH:mm');
        },
        // 性格
        character: 8,
        // 颜色喜好
        color: 'rgba(246, 187, 66, 1)',
        // 相配的星座
        constellationData: [
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
        ],
        constellation: [
            '4',
            '5',
            '6'
        ],
        constellationParse: function () {
            var arr = [];
            for (var i = 0; i < this.get('constellation').length; i++) {
                if (this.get('constellation')[i].value) {
                    arr.push(this.get('constellation')[i].value);
                } else {
                    arr.push(this.get('constellation')[i]);
                }
            }
            return JSON.stringify(arr)
                .replace(/\[/g, '[\n' + tab + tab)
                .replace(/,/g, ',\n' + tab + tab)
                .replace(/]/g, '\n' + tab + ']');
        },
        // 旅游足迹
        tourismData: new kendo.data.HierarchicalDataSource({
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
        }),
        tourism: [
            {
                code: '1501',
                name: '呼和浩特市'
            },
            {
                code: '4201',
                name: '武汉市'
            },
            {
                code: '4202',
                name: '黄石市'
            }
        ],
        tourismParse: function () {
            var arr = [];
            for (var i = 0; i < this.get('tourism').length; i++) {
                arr.push({
                    code: this.get('tourism')[i].code,
                    name: this.get('tourism')[i].name
                });
            }
            return JSON.stringify(arr)
                .replace(/\[/g, '[\n' + tab + tab)
                .replace(/{/g, '{\n' + tab + tab + tab)
                .replace(/:/g, ':\u0020')
                .replace(/,"/g, ',\n' + tab + tab + tab + '"')
                .replace(/,{/g, ',\n' + tab + tab + '{')
                .replace(/}/g, '\n' + tab + tab + '}')
                .replace(/]/g, '\n' + tab + ']');
        },
        // 自我介绍
        summary: '\uD83C\uDF38我叫艾欧里亚！这里是我的自我介绍哦~',
        // 头像
        photo: {
            url: 'img/temp/Leo.png',
            name: 'Leo',
            extension: '.png',
            size: 32804
        },
        photoData: function (e) {
            this.set('photo.url', e.response.data.url);
            this.set('photo.name', e.response.data.name);
            this.set('photo.extension', e.response.data.extension);
            this.set('photo.size', e.response.data.size);
            this.set('photoParse', function () {
                return JSON.stringify(this.get('photo'))
                    .replace(/{/g, '{\n' + tab + tab)
                    .replace(/:/g, ':\u0020')
                    .replace(/,/g, ',\n' + tab + tab)
                    .replace(/}/g, '\n' + tab + '}');
            });
        },
        photoParse: function () {
            return JSON.stringify(this.get('photo'))
                .replace(/{/g, '{\n' + tab + tab)
                .replace(/:/g, ':\u0020')
                .replace(/,/g, ',\n' + tab + tab)
                .replace(/}/g, '\n' + tab + '}');
        },
        // 签名
        sign: '\uD83C\uDF0C<strong><span style="color: rgb(0, 0, 0); background-color: rgb(255, 206, 84, .8);">我叫艾欧里亚！这里是我的自我介绍哦~</span></strong>'
    }),
        tab = '\u0020\u0020\u0020\u0020';
    // 绑定视图模型
    kendo.bind($('#mvvm'), viewModel);
});