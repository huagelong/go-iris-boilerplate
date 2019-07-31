$(function () {
    // 返回首页
    var sec = 3,
        intervalID = setInterval(function () {
            if (sec > 1) {
                sec = sec - 1;
                $('time').text(sec);
            } else {
                clearInterval(intervalID);
                linkTo('/', 'home');
            }
        }, 1000);
    $('time').text(sec);
});