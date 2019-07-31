package api

import (
	"github.com/pelletier/go-toml"
	"trensy/app/admin/service"
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
	apiApp := app.Party("/api")
	{
		apiApp.Post("/navjson", navJson)
		apiApp.Post("/menujson", menuJson)
		apiApp.Post("/homejson", homeJson)

		apiApp.Post("/checkLogin", checkLogin)
		apiApp.Post("/login", login)

	}
}
