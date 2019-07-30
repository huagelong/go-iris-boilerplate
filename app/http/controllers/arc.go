package controllers

import (
	"trensy/app/service"
	"trensy/boot"
	"trensy/g"
	"github.com/kataras/iris"
)
var appInstance *boot.Bootstrapper

func NewArc(app *boot.Bootstrapper)  {
	appInstance = app
	app.Get("/", test)
}

func test(ctx iris.Context) {
	sess := appInstance.Sessions.Start(ctx)
	sess.Set("test", "helloworld!")
	str := sess.Get("test")
	g.Log.Debug(str)
	arcService := &service.ArticleService{}

	arcService.Add("测试")

	arc := arcService.Get(5)

	ctx.ViewLayout("shared/layout.html")
	ctx.ViewData("title", "测试")
	ctx.ViewData("content", "hello world"+arc.Title)
    ctx.View("arc/test.html")
}

