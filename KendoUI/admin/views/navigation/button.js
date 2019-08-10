$(function () {
    // 样式按钮
    $('#cssButton').kendoButton({
        iconClass: 'fas fa-yin-yang mr-1'
    });
    // 图标按钮
    $('#iconButton').kendoButton({
        icon: 'star'
    });
    // 图片按钮
    $('#imageButton').kendoButton({
        imageUrl: 'img/IKKI.png'
    });
    // 禁用按钮
    $('#disabledButton').kendoButton({
        enable: false
    });
});