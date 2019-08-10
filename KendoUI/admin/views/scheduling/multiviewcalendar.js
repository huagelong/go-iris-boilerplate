// 农历
var lunarData = {
    lunarInfo: [
        0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
        0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
        0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
        0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
        0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
        0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
        0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
        0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
        0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
        0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
        0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
        0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
        0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
        0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
        0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
        0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
        0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
        0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
        0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
        0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
        0x0d520
    ],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    tianGan: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
    diZhi: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
    zodiac: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
    solarTerm: ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'],
    sTermInfo: [
        '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
        '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
        'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
        '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
        '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
        '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
        '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
        '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
        '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
        '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
        '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
        '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
        '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
        '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
        '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
        '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
        '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
        '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
        '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'
    ],
    lunarFestival: [
        '0101 春节',
        '0115 元宵节',
        '0202 龙头节',
        '0303 上巳节',
        '0505 端午节',
        '0707 七夕节',
        '0715 中元节',
        '0815 中秋节',
        '0909 重阳节',
        '1001 寒衣节',
        '1015 下元节',
        '1208 腊八节',
        '1223 北小年',
        '1224 南小年'
    ],
    solarFestival: [
        '0101 元旦',
        '0214 情人节',
        '0308 妇女节',
        '0312 植树节',
        '0401 愚人节',
        '0501 劳动节',
        '0504 青年节',
        '0601 儿童节',
        '0701 建党节',
        '0801 建军节',
        '0910 教师节',
        '1001 国庆节',
        '1101 万圣节',
        '1213 国家公祭',
        '1225 圣诞节',
        '1226 主席诞辰'
    ],
    dayChina: ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
    tenDayChina: ['初', '十', '廿', '卅'],
    monthChina: ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'],
    lunarYearDays: function (y) {
        var i,
            sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) {
            sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0;
        }
        return (sum + this.leapDays(y));
    },
    leapMonth: function (y) {
        return (this.lunarInfo[y - 1900] & 0xf);
    },
    leapDays: function (y) {
        if (this.leapMonth(y)) {
            return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
        }
        return 0;
    },
    lunarMonthDays: function (y, m) {
        if (m > 12 || m < 1) {
            return -1;
        } else if (y === 1899) {
            return 30;
        }
        return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29 );
    },
    solarMonthDays: function (y, m) {
        if (m > 12 || m < 1) {
            return -1;
        }
        var ms = m - 1;
        if (ms === 1) {
            return (((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) ? 29 : 28);
        } else {
            return (this.solarMonth[ms]);
        }
    },
    toGanZhiYear: function (lYear) {
        var ganKey = (lYear - 3) % 10;
        var zhiKey = (lYear - 3) % 12;
        if (ganKey === 0) ganKey = 10;
        if (zhiKey === 0) zhiKey = 12;
        return this.tianGan[ganKey - 1] + this.diZhi[zhiKey - 1];
    },
    toGanZhi: function (offset) {
        return this.tianGan[offset % 10] + this.diZhi[offset % 12];
    },
    toChinaMonth: function (m) {
        if (m > 12 || m < 1) {
            return -1;
        }
        var s = this.monthChina[m - 1];
        s += '月';
        return s;
    },
    toChinaDay: function (d) {
        var s;
        switch (d) {
            case 10:
                s = '初十';
                break;
            case 20:
                s = '二十';
                break;
            case 30:
                s = '三十';
                break;
            default:
                s = this.tenDayChina[Math.floor(d / 10)];
                s += this.dayChina[d % 10];
        }
        return s;
    },
    getZodiac: function (y) {
        return this.zodiac[(y - 4) % 12];
    },
    toConstellation: function (cMonth, cDay) {
        var s = '山羊水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手山羊';
        var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '座';
    },
    getTerm: function (y, n) {
        if (y < 1900 || y > 2100) {
            return -1;
        }
        if (n < 1 || n > 24) {
            return -1;
        }
        var _table = this.sTermInfo[y - 1900];
        var _info = [
            parseInt('0x' + _table.substr(0, 5)).toString(),
            parseInt('0x' + _table.substr(5, 5)).toString(),
            parseInt('0x' + _table.substr(10, 5)).toString(),
            parseInt('0x' + _table.substr(15, 5)).toString(),
            parseInt('0x' + _table.substr(20, 5)).toString(),
            parseInt('0x' + _table.substr(25, 5)).toString()
        ];
        var _calday = [
            _info[0].substr(0, 1),
            _info[0].substr(1, 2),
            _info[0].substr(3, 1),
            _info[0].substr(4, 2),
            _info[1].substr(0, 1),
            _info[1].substr(1, 2),
            _info[1].substr(3, 1),
            _info[1].substr(4, 2),
            _info[2].substr(0, 1),
            _info[2].substr(1, 2),
            _info[2].substr(3, 1),
            _info[2].substr(4, 2),
            _info[3].substr(0, 1),
            _info[3].substr(1, 2),
            _info[3].substr(3, 1),
            _info[3].substr(4, 2),
            _info[4].substr(0, 1),
            _info[4].substr(1, 2),
            _info[4].substr(3, 1),
            _info[4].substr(4, 2),
            _info[5].substr(0, 1),
            _info[5].substr(1, 2),
            _info[5].substr(3, 1),
            _info[5].substr(4, 2)
        ];
        return parseInt(_calday[n - 1]);
    },
    getFestival: function (y, m, d, type) {
        var festival;
        if (type === 'lunar') {
            festival = this.lunarFestival;
            if (m === 12 && d === this.lunarMonthDays(y, m)) {
                return '除夕';
            }
        } else if (type === 'solar') {
            festival = this.solarFestival;
        }
        for (var i = 0; i < festival.length; i++) {
            if (m === parseInt(festival[i].substr(0, 2)) && d === parseInt(festival[i].substr(2, 2))) {
                return festival[i].substr(5);
            }
        }
        return null;
    },
    solar2lunar: function (y, m, d) {
        if (y < 1900 || y > 2100) {
            return -1;
        }
        if (!y) {
            var objDate = new Date();
        } else {
            var objDate = new Date(y, parseInt(m) - 1, d);
        }
        var i,
            leap = 0,
            temp = 0;
        var y = objDate.getFullYear(),
            m = objDate.getMonth() + 1,
            d = objDate.getDate();
        if (y === 1900 && m === 1 && d < 31) {
            var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 1)) / 86400000;
        } else {
            var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
        }
        for (i = 1900; i < 2101 && offset > 0; i++) {
            temp = this.lunarYearDays(i);
            offset -= temp;
        }
        if (offset < 0) {
            offset += temp;
            i--;
        }
        var isTodayObj = new Date(),
            isToday = false;
        if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
            isToday = true;
        }
        var nWeek = objDate.getDay(),
            cWeek = this.dayChina[nWeek];
        if (nWeek === 0) {
            nWeek = 7;
        }
        if (y === 1900 && m === 1 && d < 31) {
            var year = 1899;
        } else {
            var year = i;
        }
        var leap = this.leapMonth(i);
        var isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i === (leap + 1) && isLeap === false) {
                --i;
                isLeap = true;
                temp = this.leapDays(year);
            } else {
                temp = this.lunarMonthDays(year, i);
            }
            if (isLeap === true && i === (leap + 1)) {
                isLeap = false;
            }
            offset -= temp;
        }
        if (offset === 0 && leap > 0 && i === leap + 1) {
            if (isLeap) {
                isLeap = false;
            } else {
                isLeap = true;
                --i;
            }
        }
        if (offset < 0) {
            offset += temp;
            --i;
        }
        if (y === 1900 && m === 1 && d < 31) {
            var month = 12;
        } else {
            var month = i;
        }
        if (y === 1900 && m === 1 && d === 30) {
            var day = 30;
        } else {
            var day = offset + 1;
        }
        var sm = m - 1;
        var gzY = this.toGanZhiYear(year);
        var firstNode = this.getTerm(y, (m * 2 - 1));
        var secondNode = this.getTerm(y, (m * 2));
        var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
        if (d >= firstNode) {
            gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
        }
        var isTerm = false;
        var Term = null;
        if (firstNode === d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 2];
        }
        if (secondNode === d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 1];
        }
        var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
        var gzD = this.toGanZhi(dayCyclical + d - 1);
        var constellation = this.toConstellation(m, d);
        var isFestival = false;
        if (this.getFestival(y, m, d, 'solar') || this.getFestival(year, month, day, 'lunar')) {
            isFestival = true;
        }
        return {
            'solarYear': y,
            'solarMonth': m,
            'solarDay': d,
            'week': nWeek,
            'weekCn': '星期' + cWeek,
            'gzYear': gzY,
            'gzMonth': gzM,
            'gzDay': gzD,
            'lunarYear': year,
            'lunarMonth': month,
            'lunarDay': day,
            'lunarMonthCn': (isLeap ? '闰' : '') + this.toChinaMonth(month),
            'lunarDayCn': this.toChinaDay(day),
            'zodiac': this.getZodiac(year),
            'constellation': constellation,
            'isToday': isToday,
            'isLeap': isLeap,
            'isTerm': isTerm,
            'term': Term,
            'isFestival': isFestival,
            'lunarFestival': this.getFestival(year, month, day, 'lunar'),
            'solarFestival': this.getFestival(y, m, d, 'solar')
        };
    },
    lunar2solar: function (y, m, d, isLeapMonth) {
        var isLeapMonth = !!isLeapMonth;
        var leapOffset = 0;
        var leapMonth = this.leapMonth(y);
        var leapDay = this.leapDays(y);
        if (isLeapMonth && (leapMonth !== m)) {
            return -1;
        }
        if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
            return -1;
        }
        var day = this.lunarMonthDays(y, m);
        var _day = day;
        if (isLeapMonth) {
            _day = this.leapDays(y, m);
        }
        if (y < 1900 || y > 2100 || d > _day) {
            return -1;
        }
        var offset = 0;
        for (var i = 1900; i < y; i++) {
            offset += this.lunarYearDays(i);
        }
        var leap = 0,
            isAdd = false;
        for(var i = 1; i < m; i++) {
            leap = this.leapMonth(y);
            if (!isAdd) {
                if (leap <= i && leap > 0) {
                    offset += this.leapDays(y);
                    isAdd = true;
                }
            }
            offset += this.lunarMonthDays(y, i);
        }
        if (isLeapMonth) {
            offset += day;
        }
        var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
        var calObj = new Date((offset + d - 31) * 86400000 + stmap);
        var cY = calObj.getUTCFullYear();
        var cM = calObj.getUTCMonth() + 1;
        var cD = calObj.getUTCDate();
        return this.solar2lunar(cY, cM, cD);
    }
};

$(function () {
    // 普通多重日历
    $('#generalMultiViewCalendar').kendoMultiViewCalendar({
        footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #',
        disableDates: [
            'sa',
            'su'
        ],
        value: new Date()
    });
    // 星期多重日历
    $('#weekMultiViewCalendar').kendoMultiViewCalendar({
        weekNumber: true,
        footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日 dddd") #',
        month: {
            weekNumber: '<small>#= data.weekNumber #周</small>'
        },
        value: new Date()
    });
    // 月份多重日历
    $('#monthMultiViewCalendar').kendoMultiViewCalendar({
        start: 'year',
        depth: 'year',
        footer: '当月：#= kendo.toString(data, "yyyy年MM月") #',
        value: new Date()
    });
    // 年份多重日历
    $('#yearMultiViewCalendar').kendoMultiViewCalendar({
        start: 'decade',
        depth: 'decade',
        footer: '今年：#= kendo.toString(data, "yyyy年") #',
        value: new Date()
    });
    // 世纪多重日历
    $('#centuryMultiViewCalendar').kendoMultiViewCalendar({
        start: 'century',
        depth: 'decade',
        footer: '今年：#= kendo.toString(data, "yyyy年") #'
    });
    // 节假日多重日历
    $('#holidayMultiViewCalendar').kendoMultiViewCalendar({
        dates: [
            new Date(2000, 0, 1),
            new Date(2000, 1, 14),
            new Date(2000, 2, 5),
            new Date(2000, 2, 8),
            new Date(2000, 2, 12),
            new Date(2000, 2, 15),
            new Date(2000, 3, 1),
            new Date(2000, 4, 1),
            new Date(2000, 4, 4),
            new Date(2000, 5, 1),
            new Date(2000, 6, 1),
            new Date(2000, 6, 7),
            new Date(2000, 7, 1),
            new Date(2000, 7, 15),
            new Date(2000, 8, 3),
            new Date(2000, 8, 10),
            new Date(2000, 9, 1),
            new Date(2000, 10, 1),
            new Date(2000, 11, 13),
            new Date(2000, 11, 25),
            new Date(2000, 11, 26)
        ],
        month: {
            content: '#= data.value #<i class="#= isHoliday(data.date, data.dates) ? \'fas fa-star\' : \'\' #"></i>'
        },
        value: new Date()
    });
    // 农历多重日历
    $('#lunarMultiViewCalendar').kendoMultiViewCalendar({
        footer:
            '# var lunar = lunarData.solar2lunar(data.getFullYear(), (data.getMonth() + 1), data.getDate()) #' +
            '今天：#= kendo.toString(data, "yyyy年MM月dd日 dddd") #<br>' +
            '农历：[#= lunar.zodiac #年] #= lunar.lunarMonthCn ##= lunar.lunarDayCn #（#= lunar.gzYear #年 #= lunar.gzMonth #月 #= lunar.gzDay #日）',
        month: {
            content:
                '# var lunar = lunarData.solar2lunar(data.date.getFullYear(), (data.date.getMonth() + 1), data.date.getDate()) #' +
                '<div class="d-flex flex-column">' +
                    '#= data.value #' +
                    '<small class="text-nowrap">' +
                    '# if (lunar.lunarFestival) { #' +
                        '<span class="festival rounded px-1">#= lunar.lunarFestival #</span>' +
                    '# } else if (lunar.solarFestival) { #' +
                        '<span class="festival rounded px-1">#= lunar.solarFestival #</span>' +
                    '# } else if (lunar.isTerm) { #' +
                        '<span class="theme-m-box rounded px-1">#= lunar.term #</span>' +
                    '# } else if (lunar.lunarDay === 1) { #' +
                        '<span class="theme-s-box rounded px-1">#= lunar.lunarMonthCn #</span>' +
                    '# } else { #' +
                        '#= lunar.lunarDayCn #' +
                    '# } #' +
                    '</small>' +
                '</div>'
        },
        value: new Date()
    });
    // 自定义多重日历
    $('#customMultiViewCalendar').kendoMultiViewCalendar({
        views: 4,
        value: new Date()
    });
    // 中国年历多重日历
    $('#chinaMultiViewCalendar').kendoMultiViewCalendar({
        showViewHeader: true,
        footer: false,
        month: {
            content:
                '# var lunar = lunarData.solar2lunar(data.date.getFullYear(), (data.date.getMonth() + 1), data.date.getDate()) #' +
                '<div class="d-flex flex-column">' +
                    '#= data.value #' +
                    '<small class="text-nowrap">' +
                    '# if (lunar.lunarFestival) { #' +
                        '<span class="festival rounded px-1">#= lunar.lunarFestival #</span>' +
                    '# } else if (lunar.solarFestival) { #' +
                        '<span class="festival rounded px-1">#= lunar.solarFestival #</span>' +
                    '# } else if (lunar.isTerm) { #' +
                        '<span class="theme-m-box rounded px-1">#= lunar.term #</span>' +
                    '# } else if (lunar.lunarDay === 1) { #' +
                        '<span class="theme-s-box rounded px-1">#= lunar.lunarMonthCn #</span>' +
                    '# } else { #' +
                        '#= lunar.lunarDayCn #' +
                    '# } #' +
                    '</small>' +
                '</div>'
        },
        views: 12,
        min: new Date(2019, 0, 1),
        max: new Date(2019, 11, 31),
        value: new Date()
    });
});

// 是否节假日
function isHoliday(date, dates) {
    for (var i = 0; i < dates.length; i++) {
        if (date.getMonth() === dates[i].getMonth() && date.getDate() === dates[i].getDate()) {
            return true;
        }
    }
    return false;
}