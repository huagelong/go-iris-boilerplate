/*!
 * Kendo UI Admin v1.0.0 by IKKI & Amikoko - https://ikki2000.github.io/
 * Copyright 2018-2019 IKKI Studio
 * Released under the MIT License - https://ikki2000.github.io/KendoUI-Admin-Site/LICENSE
 */

/* JS for Website | Written by IKKI | 2018-02-03 */

// 配置路径
var path = $('base').attr('href'),
    webType = $('base').attr('type'),
    accentColor,
    minorColor,
    tokenUrl = 'json/logout.json',
    loginMenuUrl = 'json/site_login.json',
    logoutMenuUrl = 'json/site_logout.json';

/* 初始化 ****************************************************************************/
$(function () {
    // 颜色
    if (localStorage.hasOwnProperty('colorName')) {
        accentColor = localStorage.getItem('accentColor');
        minorColor = localStorage.getItem('minorColor');
        changeColor(localStorage.getItem('colorName'), accentColor, minorColor);
    } else {
        accentColor = '#1890ff';
        minorColor = '#69c0ff';
        changeColor('default', accentColor, minorColor);
    }
    // 语言
    kendo.culture('zh-CN');
});

// 发送 Token 验证
function tokenAuth() {
    $.fn.ajaxPost({
        ajaxAsync: false,
        ajaxData: {
            userId: sessionStorage.getItem('userId')
        },
        ajaxUrl: tokenUrl,
        succeed: function (res) {
            // 已登录导航数据获取
            $.fn.ajaxPost({
                ajaxUrl: loginMenuUrl,
                succeed: function (res) {
                    showNav(res);
                }
            });
        },
        failed: function (res) {
            logout();
        }
    });
}

// 导航显示
function showNav(res) {
    $('#navPanelBar').kendoPanelBar({
        dataSource: res.data
    });
    $('#menuH').kendoMenu({
        dataSource: res.data
    });
}

// 面包屑导航
function showPath(hash) {
    $('#path').html('');
    $.each($('#menuH').find('.links-'+ hash).children('.k-link').parents('.k-item'), function (i, doms) {
        $('#path').prepend('<span><i class="fas fa-angle-double-right"></i>' + $(doms).children('.k-link').html() + '</span>');
    });
    if (hash === '404') {
        $('#path').prepend('<span><i class="fas fa-angle-double-right"></i><i class="fas fa-info-circle"></i>404<small>Error</small></span>');
    }
    $('#path').prepend('<a href="' + webType + '/#/home' + '"><i class="fas fa-home"></i>首页<span><small>Home</small></span></a>');
}

// 配色
function changeColor(color, accent, minor) {
    $('#Amikoko').attr('href', 'css/themes/theme_' + color + '.min.css');
    if ($('#hasChart').length > 0) {
        setTimeout(function () {
            kendo.dataviz.autoTheme(true);
            refresh();
        }, 100);
    }
    localStorage.setItem('colorName', color);
    localStorage.setItem('accentColor', accent);
    accentColor = accent;
    localStorage.setItem('minorColor', minor);
    minorColor = minor;
}

// 语言
function changeLang(lang) {
    $.getScript('js/global/kendo.' + lang + '.js', function () {
        kendo.culture(lang);
        refresh();
    });
}

// 退出登录
function logout() {
    sessionStorage.clear();
    // 未登录导航数据获取
    $.fn.ajaxPost({
        ajaxUrl: logoutMenuUrl,
        succeed: function (res) {
            showNav(res);
        }
    });
}