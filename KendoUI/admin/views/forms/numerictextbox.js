$(function () {
    // DOM 数字框
    $('#domNumericTextBox').kendoNumericTextBox();
    // 普通数字框
    $('#generalNumericTextBox').kendoNumericTextBox({
        min: 1,
        max: 10,
        step: 1,
        placeholder: '数字框'
    });
    // 只读数字框
    $('#readonlyNumericTextBox').kendoNumericTextBox({
        value: 8
    }).data('kendoNumericTextBox').readonly();
    // 禁用数字框
    $('#disabledNumericTextBox').kendoNumericTextBox().data('kendoNumericTextBox').enable(false);
    // 默认值数字框
    $('#defaultValueNumericTextBox').kendoNumericTextBox({
        value: 8
    });
    // 四舍五入小数数字框
    $('#decimalNumericTextBox').kendoNumericTextBox({
        format: 'n4',
        decimals: 4,
        value: 3.1415926
    });
    // 单位数字框
    $('#formatNumericTextBox').kendoNumericTextBox({
        format: '0.00 光年',
        step: 0.01,
        value: 4.22
    });
    // 百分比数字框
    $('#percentageNumericTextBox').kendoNumericTextBox({
        format: 'p1',
        decimals: 3,
        value: 0.886
    });
    // 金融数字框
    $('#financeNumericTextBox').kendoNumericTextBox({
        format: 'c1',
        value: 1234567890
    });
    // 科学计数数字框
    $('#scientificNumericTextBox').kendoNumericTextBox({
        format: 'e1',
        value: 1234567890
    });
    // 因子倍数数字框
    $('#factorNumericTextBox').kendoNumericTextBox({
        format: 'p1',
        factor: 100,
        decimals: 3,
        placeholder: '直接输入百分比值'
    });
    // 直接截取数字框
    $('#truncateNumericTextBox').kendoNumericTextBox({
        format: 'n4',
        decimals: 4,
        round: false,
        value: 3.1415926
    });
    // 小数位数输入限制数字框
    $('#restrictNumericTextBox').kendoNumericTextBox({
        decimals: 2,
        restrictDecimals: true,
        value: 3.14
    });
    // 无箭头数字框
    $('#spinnerNumericTextBox').kendoNumericTextBox({
        spinners: false,
        value: 3.14
    });
    // 等宽数字框
    $('#widthNumericTextBox').kendoNumericTextBox();
});