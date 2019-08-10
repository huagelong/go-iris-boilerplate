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
    // 定义 PDF 嵌入字体
    kendo.pdf.defineFont({
        'Microsoft YaHei': 'fonts/msyh.ttf',
        'Microsoft YaHei|Bold': 'fonts/msyhbd.ttf'
    });
    // 普通日程表
    $('#generalScheduler').kendoScheduler({
        dataSource: {
            transport: {
                create: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            // $('#generalScheduler').data('kendoScheduler').dataSource.read();
                            $('#generalScheduler').data('kendoScheduler').refresh();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                destroy: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: {'id': options.data.id},
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            // $('#generalScheduler').data('kendoScheduler').dataSource.read();
                            $('#generalScheduler').data('kendoScheduler').refresh();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                update: function (options) {
                    $('#loading').show();
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/response.json',
                        finished: function () {
                            $('#loading').hide();
                        },
                        succeed: function (res) {
                            options.success(res);
                            // $('#generalScheduler').data('kendoScheduler').dataSource.read();
                            $('#generalScheduler').data('kendoScheduler').refresh();
                        },
                        failed: function (res) {
                            options.error(res);
                        },
                        isMsg: true
                    });
                },
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxData: options.data,
                        ajaxUrl: 'json/scheduler.json',
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
                    id: 'taskId',
                    fields: {
                        taskId: { from: 'TaskID', type: 'number' },
                        ownerId: { from: 'OwnerID',
                            defaultValue: 'saint'
                        },
                        avatar: { from: 'Avatar',
                            defaultValue: 'img/avatar.png'
                        },
                        title: { from: 'Title',
                            defaultValue: '无标题',
                            validation: {
                                required: true
                            }
                        },
                        description: { from: 'Description' },
                        start: { from: 'Start', type: 'date',
                            parse: function (e) {
                                return kendo.parseDate(e);
                            }
                        },
                        end: { from: 'End', type: 'date',
                            parse: function (e) {
                                return kendo.parseDate(e);
                            }
                        },
                        startTimezone: { from: 'StartTimezone' },
                        endTimezone: { from: 'EndTimezone' },
                        recurrenceId: { from: 'RecurrenceID' },
                        recurrenceRule: { from: 'RecurrenceRule' },
                        recurrenceException: { from: 'RecurrenceException' },
                        isAllDay: { from: 'IsAllDay', type: 'boolean' }
                    }
                }
            }
        },
        resources: [
            {
                field: 'ownerId',
                name: 'saint',
                title: '圣斗士',
                dataSource: [
                    { text: '穆', value: 'Aries', color: '#c39b8f' },
                    { text: '阿鲁迪巴', value: 'Taurus', color: '#d770ad' },
                    { text: '撒加', value: 'Gemini', color: '#da4453' },
                    { text: '迪斯马斯克', value: 'Cancer', color: '#ff9800' },
                    { text: '艾欧里亚', value: 'Leo', color: '#f6bb42' },
                    { text: '沙加', value: 'Virgo', color: '#8cc152' },
                    { text: '童虎', value: 'Libra', color: '#37bc9b' },
                    { text: '米罗', value: 'Scorpion', color: '#3bafda' },
                    { text: '艾俄洛斯', value: 'Sagittarius', color: '#4a89dc' },
                    { text: '修罗', value: 'Capricorn', color: '#967adc' },
                    { text: '卡妙', value: 'Aquarius', color: '#434a54' },
                    { text: '阿布罗狄', value: 'Picses', color: '#aab2bd' },
                    { text: '星矢', value: 'Pegasus', color: '#007bff' },
                    { text: '紫龙', value: 'Dragon', color: '#28a745' },
                    { text: '冰河', value: 'Cygnus', color: '#17a2b8' },
                    { text: '瞬', value: 'Andromeda', color: '#dc3545' },
                    { text: '一辉', value: 'Phoenix', color: '#ffc107' },
                    { text: '雅典娜', value: 'Goddess', color: '#6c757d' }
                ]
            }
        ],
        toolbar: ['pdf'],
        views: [
            { type: 'day',
                selected: true,
                group: {
                    resources: ['saint'],
                    date: true
                },
                dateHeaderTemplate:
                    '# var lunar = lunarData.solar2lunar(date.getFullYear(), (date.getMonth() + 1), date.getDate()) #' +
                    '<strong>公历：#= kendo.toString(date, "yyyy年MM月dd日 dddd") # —— 农历：[#= lunar.zodiac #年] #= lunar.lunarMonthCn ##= lunar.lunarDayCn #（#= lunar.gzYear #年 #= lunar.gzMonth #月 #= lunar.gzDay #日）</strong>',
                allDaySlotTemplate: '<span class="d-block text-center">无</span>',
                eventTemplate: '<img class="img-s mt-1" src="#: avatar #" alt="#: ownerId #"><p class="mb-0 pl-2"><small>#: title #</small></p>'
            },
            { type: 'week',
                eventTemplate: '<img class="img-s mt-1 ml-2" src="#: avatar #" alt="#: ownerId #"><p class="mb-0 pl-2"><small>#: title #</small></p>'
            },
            { type: 'workWeek',
                eventTemplate: '<img class="img-s mt-1 ml-2" src="#: avatar #" alt="#: ownerId #"><p class="mb-0 pl-2"><small>#: title #</small></p>'
            },
            { type: 'month',
                eventHeight: 24,
                dayTemplate:
                    '# var lunar = lunarData.solar2lunar(date.getFullYear(), (date.getMonth() + 1), date.getDate()) #' +
                    '<div class="d-flex flex-column">' +
                        '<div>' +
                            '# if (lunar.lunarDay === 1) { #' +
                                '<span class="theme-s float-left">#= lunar.lunarMonthCn #</span>' +
                            '# } else { #' +
                                '<span class="float-left">#= lunar.lunarDayCn #</span>' +
                            '# } #' +
                            '<span class="lead float-right">#= kendo.toString(date, "dd") #</span>' +
                        '</div>' +
                        '# if (lunar.lunarFestival) { #' +
                            '<span class="festival text-left">#= lunar.lunarFestival #</span>' +
                        '# } #' +
                        '# if (lunar.solarFestival) { #' +
                            '<span class="festival text-left">#= lunar.solarFestival #</span>' +
                        '# } #' +
                        '# if (lunar.isTerm) { #' +
                            '<span class="theme-m text-left">#= lunar.term #</span>' +
                        '# } #' +
                    '</div>',
                eventTemplate: '<img class="img-s mr-2" src="#: avatar #" alt="#: ownerId #"><small>#: title #</small>'
            },
            { type: 'agenda',
                eventDateTemplate:
                    '# var lunar = lunarData.solar2lunar(date.getFullYear(), (date.getMonth() + 1), date.getDate()) #' +
                    '<strong class="k-scheduler-agendaday theme-m">#= kendo.toString(date, "dd") #</strong>' +
                    '<em class="k-scheduler-agendaweek">#= kendo.toString(date, "dddd") #</em>' +
                    '<span class="k-scheduler-agendadate">#= kendo.toString(date, "yyyy年MM月") #</span>' +
                    '<br><br>' +
                    '<span class="text-black-50">#= lunar.lunarMonthCn ##= lunar.lunarDayCn #</span>' +
                    '<br>' +
                    '# if (lunar.lunarFestival) { #' +
                        '<span class="festival">#= lunar.lunarFestival #</span>' +
                    '# } #' +
                    '# if (lunar.solarFestival) { #' +
                        '<span class="festival">#= lunar.solarFestival #</span>' +
                    '# } #' +
                    '# if (lunar.isTerm) { #' +
                        '<span class="theme-m">#= lunar.term #</span>' +
                    '# } #',
                eventTimeTemplate:
                    '# if (isAllDay) { #' +
                        '<span class="theme-m">全天</span>' +
                    '# } else { #' +
                        '#= kendo.toString(start, "HH:mm") # 至 #= kendo.toString(end, "HH:mm") #' +
                    '# } #',
                eventTemplate: '<img class="img-m ml-2 mr-3" src="#: avatar #" alt="#: ownerId #">#: title #'
            },
            { type: 'timeline',
                group: {
                    resources: ['saint'],
                    date: true,
                    orientation: 'vertical'
                },
                eventTemplate: '<img class="img-s mr-2" src="#: avatar #" alt="#: ownerId #"><small>#: title #</small>'
            },
            { type: 'timelineWeek',
                eventTemplate: '<img class="img-s mr-2" src="#: avatar #" alt="#: ownerId #"><small>#: title #</small>'
            },
            { type: 'timelineWorkWeek',
                eventTemplate: '<img class="img-s mr-2" src="#: avatar #" alt="#: ownerId #"><small>#: title #</small>'
            },
            { type: 'timelineMonth',
                columnWidth: 128,
                eventHeight: 50,
                group: {
                    resources: ['saint'],
                    orientation: 'vertical'
                },
                eventTemplate: '<img class="img-s mr-2" src="#: avatar #" alt="#: ownerId #"><small>#: title #</small>'
            }
        ],
        pdf: {
            fileName: 'Scheduler.pdf',
            creator: 'IKKI Studio',
            author: 'IKKI & Amikoko',
            title: '日程表展示',
            subject: '黄金十二宫',
            keywords: 'Gold Saint',
            landscape: true,
            avoidLinks: true
        },
        date: new Date('2019/8/15'),
        startTime: new Date('2019/8/15 00:00'),
        endTime: new Date('2019/8/15 24:00'),
        workDayStart: new Date('2019/8/15 11:00 AM'),
        workDayEnd: new Date('2019/8/15 11:00 PM'),
        selectable: true,
        showWorkHours: true,
        dateHeaderTemplate: '<strong>#= kendo.toString(date, "MM月dd日 dddd") #</strong>',
        groupHeaderTemplate: '<strong style="color: #= color #">#= text #</strong>',
        allDayEventTemplate: '<img class="img-s mt-1" src="#: avatar #" alt="#: ownerId #"><p class="mb-0 pl-2"><small>#: title #<br>#: description #</small></p>',
        majorTimeHeaderTemplate: '<strong>#= kendo.toString(date, "HH:mm") #</strong>',
        editable: {
            template: kendo.template($('#editTemplate').html())
        },
        edit: function (e) {
            // 开始时间
            $('#startEdit').kendoDateTimePicker({
                format: 'yyyy-MM-dd HH:mm'
            });
            // 结束时间
            $('#endEdit').kendoDateTimePicker({
                format: 'yyyy-MM-dd HH:mm'
            });
            // 重复
            $('#recurrenceRuleEdit').kendoDropDownList({
                dataSource: {
                    data: [
                        { text: '每天', value: 'FREQ=DAILY' },
                        { text: '每周', value: 'FREQ=WEEKLY' },
                        { text: '每月', value: 'FREQ=MONTHLY' },
                        { text: '每年', value: 'FREQ=YEARLY' }
                    ]
                },
                optionLabel: '从不',
                dataValueField: 'value',
                dataTextField: 'text'
            });
            // 圣斗士
            $('#ownerIdEdit').kendoDropDownList({
                dataSource: {
                    data: [
                        { text: '穆', value: 'Aries', url: 'img/temp/Aries.png', color: '#c39b8f' },
                        { text: '阿鲁迪巴', value: 'Taurus', url: 'img/temp/Taurus.png', color: '#d770ad' },
                        { text: '撒加', value: 'Gemini', url: 'img/temp/Gemini.png', color: '#da4453' },
                        { text: '迪斯马斯克', value: 'Cancer', url: 'img/temp/Cancer.png', color: '#ff9800' },
                        { text: '艾欧里亚', value: 'Leo', url: 'img/temp/Leo.png', color: '#f6bb42' },
                        { text: '沙加', value: 'Virgo', url: 'img/temp/Virgo.png', color: '#8cc152' },
                        { text: '童虎', value: 'Libra', url: 'img/temp/Libra.png', color: '#37bc9b' },
                        { text: '米罗', value: 'Scorpion', url: 'img/temp/Scorpion.png', color: '#3bafda' },
                        { text: '艾俄洛斯', value: 'Sagittarius', url: 'img/temp/Sagittarius.png', color: '#4a89dc' },
                        { text: '修罗', value: 'Capricorn', url: 'img/temp/Capricorn.png', color: '#967adc' },
                        { text: '卡妙', value: 'Aquarius', url: 'img/temp/Aquarius.png', color: '#434a54' },
                        { text: '阿布罗狄', value: 'Picses', url: 'img/temp/Picses.png', color: '#aab2bd' },
                        { text: '星矢', value: 'Pegasus', url: 'img/temp/Pegasus.png', color: '#007bff' },
                        { text: '紫龙', value: 'Dragon', url: 'img/temp/Dragon.png', color: '#28a745' },
                        { text: '冰河', value: 'Cygnus', url: 'img/temp/Cygnus.png', color: '#17a2b8' },
                        { text: '瞬', value: 'Andromeda', url: 'img/temp/Andromeda.png', color: '#dc3545' },
                        { text: '一辉', value: 'Phoenix', url: 'img/temp/Phoenix.png', color: '#ffc107' },
                        { text: '雅典娜', value: 'Goddess', url: 'img/temp/Goddess.png', color: '#6c757d' }
                    ]
                },
                dataValueField: 'value',
                dataTextField: 'text',
                height: 520,
                template: '<span class="dot-color" style="background: #: color #;"></span><img class="w-5 rounded-circle mx-2" src="#: url #" alt="#: value #">#: text #',
                valueTemplate: '<span class="dot-color" style="background: #: color #;"></span><img class="w-5 border rounded-circle mx-2" src="#: url #" alt="#: value #">#: text #'
            });
        },
        save: function (e) {
            e.event.set('avatar', 'img/temp/' + e.event.ownerId + '.png');
        }
    });
    // 联动显示
    $('#saint :checkbox').change(function (e) {
        var checked = $.map($('#saint :checked'), function (checkbox) {
            return $(checkbox).val();
        });
        $('#generalScheduler').data('kendoScheduler').dataSource.filter({
            logic: 'or',
            filters: $.map(checked, function (value) {
                return {
                    operator: 'eq',
                    field: 'ownerId',
                    value: value
                };
            })
        });
    });
});