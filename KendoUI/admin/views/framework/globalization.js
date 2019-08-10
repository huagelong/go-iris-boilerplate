$.getScript('js/global/kendo.zh-CHS.js');
$.getScript('js/global/kendo.zh-CHT.js');
$.getScript('js/global/kendo.en-US.js');
$.getScript('js/global/kendo.ru-RU.js');
$.getScript('js/global/kendo.fr-FR.js');
$.getScript('js/global/kendo.de-DE.js');
$.getScript('js/global/kendo.it-IT.js');
$.getScript('js/global/kendo.pt-PT.js');
$.getScript('js/global/kendo.es-ES.js');
$.getScript('js/global/kendo.ar-SA.js');
$.getScript('js/global/kendo.ja-JP.js');
$.getScript('js/global/kendo.ko-KR.js');
$(function () {
    // 选择语言
    $('#langList').kendoDropDownList({
        dataSource: {
            data: [
                { id: 'cn', text: '中文简体', value: 'zh-CHS' },
                { id: 'hk', text: '中文繁體', value: 'zh-CHT' },
                { id: 'us', text: 'English', value: 'en-US' },
                { id: 'ru', text: 'Русский', value: 'ru-RU' },
                { id: 'fr', text: 'Français', value: 'fr-FR' },
                { id: 'de', text: 'Deutsch', value: 'de-DE' },
                { id: 'it', text: 'Italiano', value: 'it-IT' },
                { id: 'pt', text: 'Português', value: 'pt-PT' },
                { id: 'es', text: 'Español', value: 'es-ES' },
                { id: 'sa', text: 'العربية', value: 'ar-SA' },
                { id: 'jp', text: '日本語', value: 'ja-JP' },
                { id: 'kr', text: '한국어', value: 'ko-KR' }
            ]
        },
        dataValueField: 'value',
        dataTextField: 'text',
        template: '<i class="flag-icon flag-icon-#: id # shadow mr-2"></i>#: text #',
        height: 330,
        change: function () {
            kendo.culture(this.value());
            $('#numericTextBox').data('kendoNumericTextBox').value($('#numericTextBox').data('kendoNumericTextBox').value());
            $('#calendar').data('kendoCalendar').setOptions({
                format: kendo.culture().calendar.patterns.d
            });
            $('#multiViewCalendar').data('kendoMultiViewCalendar').setOptions({
                format: kendo.culture().calendar.patterns.d
            });
        }
    });
    // 数字框
    $('#numericTextBox').kendoNumericTextBox({
        format: 'c',
        decimals: 2,
        step: 100
    });
    // 日历
    $('#calendar').kendoCalendar();
    // 多重日历
    $('#multiViewCalendar').kendoMultiViewCalendar();
});