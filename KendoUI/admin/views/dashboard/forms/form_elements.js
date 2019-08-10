$(function () {
    // 月份
    $('#monthNormal, #monthReadonly, #monthDisabled').kendoDatePicker({
        start: 'year',
        depth: 'year',
        format: 'yyyy/MM'
    });
    // 星期
    $('#weekNormal, #weekReadonly, #weekDisabled').kendoDatePicker({
        weekNumber: true
    });
    // 日期
    $('#dateNormal, #dateReadonly, #dateDisabled').kendoDatePicker();
    // 时间
    $('#timeNormal, #timeReadonly, #timeDisabled').kendoTimePicker();
    // 时日
    $('#datetimeNormal, #datetimeReadonly, #datetimeDisabled').kendoDateTimePicker();
    // 数字
    $('#numberNormal, #numberReadonly, #numberDisabled').kendoNumericTextBox();
    // 范围
    $('#rangeNormal, #rangeDisabled').kendoSlider();
    // 颜色
    $('#colorNormal, #colorDisabled').kendoColorPicker();
    $('#paletteNormal').kendoColorPalette();
    $('#paletteDisabled').kendoColorPalette().data('kendoColorPalette').enable(false);
    // 复选框
    $('.indeterminate').prop('indeterminate', true);
    // 选择框
    $('#selectNormal, #selectDisabled').kendoDropDownList();
    $('#selectReadonly').kendoDropDownList().data('kendoDropDownList').readonly();
    // 多选框
    $('#multipleNormal').kendoMultiSelect({
        placeholder: '正常'
    });
    $('#multipleReadonly').kendoMultiSelect({
        placeholder: '只读'
    }).data('kendoMultiSelect').readonly();
    $('#multipleDisabled').kendoMultiSelect({
        placeholder: '禁用'
    });
    // 文件域
    $('#fileNormal').kendoUpload();
    $('#fileDisabled').kendoUpload().data('kendoUpload').disable();
});