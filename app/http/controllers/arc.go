package controllers

import (
	"gitee.com/trensy/duocaiCRM/app/service"
	"gitee.com/trensy/duocaiCRM/boot"
	"github.com/kataras/iris"
)

func NewArc(app *boot.Bootstrapper)  {
	app.Get("/", test)
}

func test(ctx iris.Context) {


	arcService := &service.ArticleService{}

	arcService.Add("测试")

	arc := arcService.Get(5)

	ctx.ViewLayout("shared/layout.html")
	ctx.ViewData("title", "测试")
	ctx.ViewData("content", "hello world"+arc.Title)
    ctx.View("arc/test.html")
}

