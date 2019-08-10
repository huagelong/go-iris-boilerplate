$(function () {
    // DOM 滑块框
    $('#domSlider').kendoSlider();
    // 普通滑块框
    $('#generalSlider').kendoSlider({
        min: -10,
        max: 10
    });
    // 禁用滑块框
    $('#disabledSlider').kendoSlider().data('kendoSlider').enable(false);
    // 默认值滑块框
    $('#defaultValueSlider').kendoSlider({
        value: 8
    });
    // 自定义步进滑块框
    $('#stepSlider').kendoSlider({
        max: 24,
        smallStep: 3,
        largeStep: 6
    });
    // 无数值滑块框
    $('#noNumSlider').kendoSlider({
        largeStep: 0
    });
    // 无按钮滑块框
    $('#noButtonSlider').kendoSlider({
        showButtons: false
    });
    // 无提示滑块框
    $('#noTipSlider').kendoSlider({
        tooltip: {
            enabled: false
        }
    });
    // 自定义格式滑块框
    $('#formatSlider').kendoSlider({
        min: 0,
        max: 1,
        smallStep: 0.05,
        largeStep: 0.5,
        precision: 2,
        tooltip: {
            format: '{0:p0}'
        }
    });
    // 自定义滑块框
    $('#customSlider').kendoSlider({
        decreaseButtonTitle: '讨厌',
        increaseButtonTitle: '喜欢',
        min: -10,
        max: 10,
        smallStep: 2,
        largeStep: 0,
        value: 0,
        tooltip: {
            template:
                '# if (value === 10) { #' +
                    '超级喜欢' +
                '# } else if (value === 8) { #' +
                    '非常喜欢' +
                '# } else if (value === 6) { #' +
                    '很喜欢' +
                '# } else if (value === 4) { #' +
                    '比较喜欢' +
                '# } else if (value === 2) { #' +
                    '有点喜欢' +
                '# } else if (value === 0) { #' +
                    '一般' +
                '# } else if (value === -2) { #' +
                    '有点讨厌' +
                '# } else if (value === -4) { #' +
                    '比较讨厌' +
                '# } else if (value === -6) { #' +
                    '很讨厌' +
                '# } else if (value === -8) { #' +
                    '非常讨厌' +
                '# } else if (value === -10) { #' +
                    '超级讨厌' +
                '# } #'
        }
    });
    // 上刻度滑块框
    $('#topSlider').kendoSlider({
        tickPlacement: 'topLeft'
    });
    // 下刻度滑块框
    $('#bottomSlider').kendoSlider({
        tickPlacement: 'bottomRight'
    });
    // 左刻度滑块框
    $('#leftSlider').kendoSlider({
        orientation: 'vertical',
        tickPlacement: 'topLeft'
    });
    // 右刻度滑块框
    $('#rightSlider').kendoSlider({
        orientation: 'vertical',
        tickPlacement: 'bottomRight'
    });
    // 无刻度滑块框
    $('#noTickSlider').kendoSlider({
        tickPlacement: 'none'
    });
    // 垂直滑块框
    $('#verticalSlider').kendoSlider({
        orientation: 'vertical',
        min: -10,
        max: 10
    });
    // 等宽滑块框
    $('#widthSlider').kendoSlider({
        min: -50,
        max: 50
    });
});