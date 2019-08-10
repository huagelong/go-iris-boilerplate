$(function () {
    // DOM 时日掩码框
    $('#domDateInput').kendoDateInput();
    // 普通时日掩码框
    $('#generalDateInput').kendoDateInput({
        format: 'yyyy-MM-dd HH:mm:ss',
        min: new Date(1949, 9, 1),
        max: new Date()
    });
    // 只读时日掩码框
    $('#readonlyDateInput').kendoDateInput({
        format: 'yyyy-MM-dd HH:mm:ss',
        value: '1949-10-01 19:00:00'
    }).data('kendoDateInput').readonly();
    // 禁用时日掩码框
    $('#disabledDateInput').kendoDateInput().data('kendoDateInput').enable(false);
    // 默认值时日掩码框
    $('#defaultValueDateInput').kendoDateInput({
        format: 'yyyy-MM-dd HH:mm:ss',
        value: '1949-10-01 19:00:00'
    });
    // 星期时日掩码框
    $('#weekDateInput').kendoDateInput({
        format: 'yyyy-MM-dd dddd',
        value: '1949-10-01 星期六'
    });
    // 月份时日掩码框
    $('#monthDateInput').kendoDateInput({
        format: 'yyyy-MM',
        value: '1949-10'
    });
    // 年份时日掩码框
    $('#yearDateInput').kendoDateInput({
        format: 'yyyy',
        value: '1949'
    });
    // 十二小时时日掩码框
    $('#ampmDateInput').kendoDateInput({
        format: 'yyyy-MM-dd hh:mm tt',
        value: '1949-10-01 07:00 下午'
    });
    // 秒钟时日掩码框
    $('#secondDateInput').kendoDateInput({
        format: 'yyyy-MM-dd HH:mm:ss',
        value: '1949-10-01 19:00:00'
    });
    // 分钟时日掩码框
    $('#minuteDateInput').kendoDateInput({
        format: 'yyyy-MM-dd HH:mm',
        value: '1949-10-01 19:00'
    });
    // 小时时日掩码框
    $('#hourDateInput').kendoDateInput({
        format: 'yyyy-MM-dd HH 点',
        interval: 60,
        value: '1949-10-01 19 点'
    });
    // 等宽时日掩码框
    $('#widthDateInput').kendoDateInput();
});