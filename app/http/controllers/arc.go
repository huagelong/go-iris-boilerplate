package controllers

import (
	"trensy/app/service"
	"trensy/boot"
	"trensy/g"
	"github.com/kataras/iris"
)

func NewArc(app *boot.Bootstrapper)  {
	app.Get("/", test)
}

func test(ctx iris.Context) {
	sess := g.Session.Start(ctx)
	//sess.Set("test", "dasdasdasda!")
	//sess.Set("test2222", "asdasdasdasdadasd!")
	str := sess.Get("test")
	g.Log.Debug(str)
	arcService := &service.ArticleService{}

	arcService.Add("测试")

	arc := arcService.Get(5)

	//g.Redis.SetString("test", "hello", "3123123123")
	//
	//cache, _:=g.Redis.GetString("test")
	//g.Log.Debug(cache)

	ctx.ViewLayout("shared/layout.html")
	ctx.ViewData("title", "测试")
	ctx.ViewData("content", "hello world"+arc.Title)
    ctx.View("arc/test.html")
}

