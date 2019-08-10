$(function () {
    // DOM 验证
    $('#domValidator').kendoValidator();
    // 普通验证
    $('#generalValidator').kendoValidator({
        rules: {
            required: function (input) {
                if (!input.is('#generalValidator')) {
                    return true;
                }
                return input.val() !== '';
            },
            pattern: function (input) {
                if (!input.is('#generalValidator')) {
                    return true;
                }
                return input.val().match(/^[\u4E00-\u9FA5]{1,10}$/) !== null;
            }
        },
        messages: {
            required: '请输入姓名！',
            pattern: '请输入1-10个汉字！'
        }
    });
    // 自定义提示位置验证
    $('#msgValidator').kendoDatePicker({
        format: 'yyyy-MM-dd',
        footer: '今天：#= kendo.toString(data, "yyyy年MM月dd日") #',
        min: new Date(1920, 0, 1),
        max: new Date()
    }).parents('.card').kendoValidator({
        rules: {
            birthday: function (input) {
                if (!input.is('#msgValidator')) {
                    return true;
                }
                return kendo.parseDate(input.val(), 'yyyy-MM-dd') instanceof Date;
            }
        },
        messages: {
            birthday: '日期格式不正确！'
        }
    });
    // 自定义提示验证
    $('#customValidator').kendoValidator({
        rules: {
            required: function (input) {
                if (!input.is('#customValidator')) {
                    return true;
                }
                input.attr('data-required-msg', '请输入姓名！');
                return input.val() !== '';
            },
            pattern: function (input) {
                if (!input.is('#customValidator')) {
                    return true;
                }
                input.attr('data-pattern-msg', '请输入1-10个汉字！');
                return input.val().match(/^[\u4E00-\u9FA5]{1,10}$/) !== null;
            }
        },
        errorTemplate:
            '<div class="k-tooltip mt-2">' +
                '<div class="k-tooltip-content">' +
                    '<i class="fas fa-exclamation-triangle mr-2"></i>#= message #' +
                '</div>' +
                '<div class="k-callout k-callout-n"></div>' +
            '</div>'
    });
});