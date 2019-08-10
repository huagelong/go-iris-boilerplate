$(function () {
    // DOM 时间框
    $('#domTimePicker').kendoTimePicker();
    // 普通时间框
    $('#generalTimePicker').kendoTimePicker({
        format: 'HH:mm',
        min: new Date(1949, 9, 1, 8, 0),
        max: '17:00'
    });
    // 只读时间框
    $('#readonlyTimePicker').kendoTimePicker({
        format: 'HH:mm',
        value: '19:00'
    }).data('kendoTimePicker').readonly();
    // 禁用时间框
    $('#disabledTimePicker').kendoTimePicker().data('kendoTimePicker').enable(false);
    // 默认值时间框
    $('#defaultValueTimePicker').kendoTimePicker({
        format: 'HH:mm',
        value: '19:00'
    });
    // 十二小时时间框
    $('#ampmTimePicker').kendoTimePicker({
        format: 'hh:mm:ss tt',
        value: '07:00:00 下午'
    });
    // 毫秒时间框
    $('#millisecondTimePicker').kendoTimePicker({
        format: 'HH:mm:ss fff',
        value: '19:00:00 000'
    });
    // 秒钟时间框
    $('#secondTimePicker').kendoTimePicker({
        format: 'HH:mm:ss',
        value: '19:00:00'
    });
    // 分钟时间框
    $('#minuteTimePicker').kendoTimePicker({
        format: 'HH:mm',
        value: '19:00'
    });
    // 小时时间框
    $('#hourTimePicker').kendoTimePicker({
        format: 'HH 点',
        interval: 60,
        value: '19 点'
    });
    // 掩码时间框
    $('#maskedTimePicker').kendoTimePicker({
        format: 'HH:mm:ss',
        dateInput: true
    });
    // 固定时间框
    $('#fixedTimePicker').kendoTimePicker({
        format: 'HH:mm',
        dates: [
            '06:00',
            '08:30',
            '11:30',
            '13:00',
            '17:00',
            '22:00'
        ]
    });
    // 格式转换时间框
    $('#parseTimePicker').kendoTimePicker({
        format: 'hh:mm:ss tt',
        parseFormats: [
            'h:m:s',
            'h:m:s tt',
            'hh:mm:ss',
            'hh:mm:ss tt',
            'H:m:s',
            'h.m.s',
            'h.m.s tt',
            'hh.mm.ss',
            'hh.mm.ss tt',
            'H.m.s',
            'HH.mm.ss',
            'h时m分s秒',
            'h时m分s秒 tt',
            'hh时mm分ss秒',
            'hh时mm分ss秒 tt',
            'H时m分s秒',
            'HH时mm分ss秒',
            'h点m分s秒',
            'h点m分s秒 tt',
            'hh点mm分ss秒',
            'hh点mm分ss秒 tt',
            'H点m分s秒',
            'HH点mm分ss秒'
        ]
    });
    // 自定义间隔时间框
    $('#intervalTimePicker').kendoTimePicker({
        format: 'HH:mm',
        min: '19:00',
        max: '19:30',
        interval: 1
    });
    // 等宽时间框
    $('#widthTimePicker').kendoTimePicker();
});