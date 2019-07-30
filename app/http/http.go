package http

import (
	"github.com/pelletier/go-toml"
	"trensy/app/service"
	"trensy/boot"
)

var (
	srv *service.Service
)

func Init(c *toml.Tree, app *boot.Bootstrapper) {
	srv = service.New(c, app)
	initRoute(app)
}

func initRoute(app *boot.Bootstrapper)  {
	app.Get("/", test)
}