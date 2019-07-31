package admin

import (
	"github.com/pelletier/go-toml"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/web"
	"trensy/lib/boot"
)

func Init(conf *toml.Tree, app *boot.Bootstrapper)  {
	web.Init(conf, app)
	api.Init(conf, app)
}
