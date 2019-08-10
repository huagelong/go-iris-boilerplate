$(function () {
    // DOM 颜色框
    $('#domColorPicker').kendoColorPicker();
    // 普通颜色框
    $('#generalColorPicker').kendoColorPicker();
    // 普通颜色板
    $('#generalColorPalette').kendoColorPalette();
    // 禁用颜色框
    $('#disabledColorPicker').kendoColorPicker().data('kendoColorPicker').enable(false);
    // 禁用颜色板
    $('#disabledColorPalette').kendoColorPalette().data('kendoColorPalette').enable(false);
    // 默认值颜色框
    $('#defaultValueColorPicker').kendoColorPicker({
        value: '#f35800'
    });
    // 默认值颜色板
    $('#defaultValueColorPalette').kendoColorPalette({
        value: '#ff7f27'
    });
    // 透明度颜色框
    $('#opacityColorPicker').kendoColorPicker({
        opacity: true,
        value: 'rgba(243, 88, 0, .5)'
    });
    // 无按钮颜色框
    $('#noButtonColorPicker').kendoColorPicker({
        buttons: false
    });
    // 带清除按钮颜色框
    $('#clearButtonColorPicker').kendoColorPicker({
        clearButton: true
    });
    // 无预览颜色框
    $('#previewColorPicker').kendoColorPicker({
        preview: false
    });
    // 图标颜色框
    $('#toolIconColorPicker').kendoColorPicker({
        toolIcon: 'k-i-paint'
    });
    // 网页安全色颜色框
    $('#webSafeColorPicker').kendoColorPicker({
        palette: 'websafe'
    });
    // 展平颜色框
    $('#flatColorPicker').kendoFlatColorPicker({
        preview: false,
        opacity: true
    });
    // 自定义色块颜色框
    $('#customColorPicker').kendoColorPicker({
        palette: ['#c39b8f', '#d770ad', '#da4453', '#ff9800', '#f6bb42', '#aab2bd', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#434a54'],
        columns: 6,
        tileSize: 32
    });
    // 自定义色块颜色板
    $('#customColorPalette').kendoColorPalette({
        palette: ['#c39b8f', '#d770ad', '#da4453', '#ff9800', '#f6bb42', '#aab2bd', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#434a54'],
        columns: 6,
        tileSize: 32
    });
    // 等宽颜色框
    $('#widthColorPicker').kendoColorPicker();
    // 等宽颜色板
    $('#widthColorPalette').kendoColorPalette();
});