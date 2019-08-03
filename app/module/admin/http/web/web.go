package web

import (
	"github.com/kataras/iris"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
)

var (
	srv *service.Service
)

func New(app *boot.Bootstrapper) {
	app.Use(func(ctx iris.Context) {
		appTitle := app.Conf.Get("setting.appTitle").(string)
		poweredBy := app.Conf.Get("setting.poweredBy").(string)
		ctx.ViewData("appTitle", appTitle)
		ctx.ViewData("poweredBy", poweredBy)
		ctx.Next()
	})

	srv = service.New(app)
	initRoute(app)
}

func initRoute(app *boot.Bootstrapper)  {

	app.Get("/", index)
	app.Get("/login", login)

	pageApp := app.Party("/page")
	{
		pageApp.Get("/404", page404)
		pageApp.Get("/home", pageHome)
	}
}