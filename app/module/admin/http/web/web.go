package web

import (
	"github.com/kataras/iris"
	"github.com/pelletier/go-toml"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
)

var (
	srv *service.Service
)

func Init(conf *toml.Tree, app *boot.Bootstrapper) {

	app.Use(func(ctx iris.Context) {
		//ctx.ViewLayout("./shared/layout.html")
		appTitle := conf.Get("setting.appTitle").(string)
		poweredBy := conf.Get("setting.poweredBy").(string)
		ctx.ViewData("appTitle", appTitle)
		ctx.ViewData("poweredBy", poweredBy)
		ctx.Next()
	})

	srv = service.New(conf, app)
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