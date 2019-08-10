// 定义变量
var dataviz = kendo.dataviz,
    geom = kendo.geometry,
    Point = geom.Point,
    draw = kendo.drawing,
    Circle = draw.Circle,
    Group = draw.Group,
    Path = draw.Path,
    Text = draw.Text,
    points = 15,
    distance = 20;

// 定义时钟
var Clock = kendo.Class.extend({
    init: function (container, options) {
        this.options = $.extend({}, this.options, options);
        this._center = Point.create(this.options.center);
        this._render(container);
        this.set(new Date());
    },
    options: {
        center: [0, 0],
        size: 100,
        offset: 0,
        title: ''
    },
    set: function (date) {
        var center = this._center;
        var seconds = date.getMilliseconds() / 1000;
        seconds += date.getSeconds();
        seconds += date.getMinutes() * 60;
        seconds += (this.options.offset + date.getHours()) * 60 * 60;
        var angle = (360 / 60) * seconds;
        this._seconds.transform(geom.transform().rotate(angle, center));
        angle = (360 / (60 * 60)) * seconds;
        this._minutes.transform(geom.transform().rotate(angle, center));
        angle = (360 / (12 * 60 * 60)) * seconds;
        this._hours.transform(geom.transform().rotate(angle, center));
    },
    _render: function (container) {
        var root = new Group();
        root.append(
            this._renderFrame(),
            this._renderTicks(),
            this._renderHands(),
            this._renderLabels(),
            this._renderTitle()
        );
        container.append(root);
    },
    _renderHands: function () {
        var center = this._center;
        this._seconds = new Path()
            .stroke(minorColor, 1)
            .moveTo(center).lineTo(center.x, this._fromTop(0.05));
        this._minutes = new Path({
            stroke: {
                color: accentColor,
                width: 3,
                lineCap: 'round',
                opacity: 0.8
            }
        }).moveTo(center).lineTo(center.x, this._fromTop(0.04));
        this._hours = new Path({
            stroke: {
                color: accentColor,
                width: 6,
                lineCap: 'round',
                opacity: 0.8
            }
        }).moveTo(center).lineTo(center.x, this._fromTop(0.25));
        var hands = new Group();
        hands.append(this._seconds, this._minutes, this._hours);
        return hands;
    },
    _renderTicks: function () {
        var center = this._center;
        var ticks = new Group();
        for (var i = 0; i < 360; i += 30) {
            var p1 = new Point(center.x, this._fromTop(0.03)).rotate(i, center);
            var p2 = new Point(center.x, this._fromTop(0.055)).rotate(i, center);
            ticks.append(new Path({
                stroke: {
                    color: '#000',
                    width: 1
                }
            }).moveTo(p1).lineTo(p2));
        }
        return ticks;
    },
    _renderLabels: function () {
        var center = this._center;
        var labels = new Group();
        var font = 'bold ' + this.options.size * 0.08 + 'px arial, helvetica, sans-serif';
        var hours = 12;
        for (var i = 0; i < 360; i += 90) {
            var pos = new Point(center.x, this._fromTop(0.12)).rotate(i, center);
            var text = new Text(hours, pos, {
                font: font,
                fill: {
                    color: '#000'
                }
            });
            this._centerText(text);
            hours = (hours + 3) % 12;
            labels.append(text);
        }
        return labels;
    },
    _renderFrame: function () {
        var frame = new Group();
        var size = this.options.size;
        var outerCircle = new geom.Circle(this._center, (size / 2) - 4);
        var innerCircle = new geom.Circle(this._center, size * 0.01);
        frame.append(
            new Circle(outerCircle, {
                stroke: {
                    color: '#000',
                    width: 3
                }
            }),
            new Circle(innerCircle).fill('black')
        );
        return frame;
    },
    _renderTitle: function () {
        var group = new Group();
        var title = this.options.title;
        if (title) {
            var pos = [this._center.x, this._fromTop(-0.1)];
            var text = new Text(title, pos, {
                font: 'bold 16px arial',
                fill: {
                    color: '#000'
                }
            });
            this._centerText(text);
            group.append(text);
        }
        return group;
    },
    _centerText: function (text) {
        var bbox = text.bbox();
        text.position().translate(-bbox.width() / 2, -bbox.height() / 2);
    },
    _fromTop: function (ratio) {
        var size = this.options.size;
        var top = this._center.y - size / 2;
        return top + size * ratio;
    }
});

$(function () {
    // 定义画布、时钟和路径
    var surfaceClock = initSurfaceClock(),
        root = new Group(),
        clocks = initClock(root),
        surfacePath = initSurfacePath(),
        path = initPath();
    // 渲染时钟
    surfaceClock.draw(root);
    (function loop() {
        clocks.set(new Date());
        kendo.animationFrame(loop);
    })();
    // 渲染路径
    surfacePath.draw(path);
    $('#surfacePath')
        .on('mousemove', function(e) {
            var offset = $(this).offset();
            path.segments[0].anchor().move(e.pageX - offset.left, e.pageY - offset.top);
            for (var i = 0; i < points - 1; i++) {
                var point = path.segments[i].anchor();
                var nextPoint = path.segments[i + 1].anchor();
                var vector = point.clone().translate(-nextPoint.x, -nextPoint.y);
                vector.scale(distance / vector.distanceTo(Point.ZERO));
                nextPoint.move(point.x - vector.x, point.y - vector.y);
            }
        })
        .on('mousedown', function(e) {
            path.options.stroke.set('width', 2);
        })
        .on('mouseup', function(e) {
            path.options.stroke.set('width', 10);
        });
    // 选择绘图类型
    $('#drawingType li').each(function () {
        if (!kendo.support[$(this).text().toLowerCase()]) {
            $(this).addClass('k-state-disabled');
        }
    });
    $('#drawingType').kendoButtonGroup({
        select: function () {
            // 重绘时钟
            surfaceClock.destroy();
            surfaceClock = initSurfaceClock(this.current().text().toLowerCase());
            surfaceClock.draw(root);
            // 重绘路径
            surfacePath.destroy();
            surfacePath = initSurfacePath(this.current().text().toLowerCase());
            surfacePath.draw(path);
            alertMsgNoBtn('当前处于 <strong class="theme-m">' + this.current().text() + '</strong> 渲染模式~', 'info');
        },
        index: $('#drawingType li:not(.k-state-disabled)').index()
    });
});

// 初始化时钟画布
function initSurfaceClock(type) {
    return draw.Surface.create($('#surfaceClock'), { type: type });
}

// 初始化时钟
function initClock(container) {
    var local = new Clock(container, {
        center: [150, 150],
        size: 300
    });
    return local;
}

// 初始化路径画布
function initSurfacePath(type) {
    return draw.Surface.create($('#surfacePath'), { type: type });
}

// 初始化路径
function initPath() {
    var path = new Path({
        stroke: {
            color: accentColor,
            width: 10,
            lineCap: 'round',
            lineJoin: 'round'
        }
    });
    var start = new Point(100, 150);
    for (var i = 0; i < points; i++) {
        path.lineTo(start.clone().translate(i * distance, 0));
    }
    return path;
}