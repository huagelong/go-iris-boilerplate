package controllers

import (
	"gitee.com/trensy/duocaiCRM/boot"
	"github.com/kataras/iris"
)

func NewArc(app *boot.Bootstrapper)  {
	app.Get("/", test)
}

func test(ctx iris.Context) {
	ctx.ViewLayout("shared/layout.html")
	ctx.ViewData("title", "测试")
	ctx.ViewData("content", "hello world")
    ctx.View("arc/test.html")
}

