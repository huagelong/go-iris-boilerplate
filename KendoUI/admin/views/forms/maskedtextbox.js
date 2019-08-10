$(function () {
    // DOM 掩码框
    $('#domMaskedTextBox').kendoMaskedTextBox({
        mask: '(000)-00000000'
    });
    // 普通掩码框
    $('#generalMaskedTextBox').kendoMaskedTextBox({
        mask: '(000)-00000000'
    });
    // 只读掩码框
    $('#readonlyMaskedTextBox').kendoMaskedTextBox({
        mask: '(000)-00000000',
        value: '(021)-88888888'
    }).data('kendoMaskedTextBox').readonly();
    // 禁用掩码框
    $('#disabledMaskedTextBox').kendoMaskedTextBox().data('kendoMaskedTextBox').enable(false);
    // 默认值掩码框
    $('#defaultValueMaskedTextBox').kendoMaskedTextBox({
        mask: '(000)-00000000',
        value: '(021)-88888888'
    });
    // 货币掩码框
    $('#currencyMaskedTextBox').kendoMaskedTextBox({
        mask: '$ 00,000.00'
    });
    // 自定义提示符掩码框
    $('#promptMaskedTextBox').kendoMaskedTextBox({
        mask: '(000)-00000000',
        promptChar: '#'
    });
    // 汉字掩码框
    $('#characterCNMaskedTextBox').kendoMaskedTextBox({
        mask: '********',
        rules: {
            '*': /[\u4E00-\u9FA5]/
        },
        clearPromptChar: true
    });
    // 简易手机掩码框
    $('#mobileMaskedTextBox').kendoMaskedTextBox({
        mask: '~@0 0000 0000',
        rules: {
            '~': function (char) {
                return char === '1';
            },
            '@': /[3-9]/
        }
    });
    // 简易身份证掩码框
    $('#idCardMaskedTextBox').kendoMaskedTextBox({
        mask: '000000~!00@0#0000*',
        rules: {
            '~': /[12]/,
            '!': /[90]/,
            '@': /[01]/,
            '#': /[123]/,
            '*': /[0-9xX]/
        }
    });
    // 等宽掩码框
    $('#widthMaskedTextBox').kendoMaskedTextBox({
        mask: '0000 0000 0000 0000'
    });
});