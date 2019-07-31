package web

import (
	"github.com/pelletier/go-toml"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
)

var (
	srv *service.Service
)

func Init(c *toml.Tree, app *boot.Bootstrapper) {
	srv = service.New(c, app)
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