package http

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris"
)

func test(ctx iris.Context) {
	sess := srv.Session.Start(ctx)
	//sess.Set("test", "dasdasdasda!")
	//sess.Set("test2222", "asdasdasdasdadasd!")
	str := sess.Get("test")
	golog.Debug(str)

	srv.AddArc("测试")

	arc := srv.GetArc(5)

	srv.Dao.Redis.SetString("test", "hello", "3123123123")
	//
	cache, _:=srv.Dao.Redis.GetString("test")
	golog.Debug(cache)

	ctx.ViewLayout("shared/layout.html")
	ctx.ViewData("title", "测试")
	ctx.ViewData("content", "hello world"+arc.Title)
    ctx.View("arc/test.html")
}

