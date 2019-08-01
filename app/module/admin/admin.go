package admin

import (
	"github.com/pelletier/go-toml"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/web"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
)

func Init(conf *toml.Tree, app *boot.Bootstrapper, isInstall bool) bool {
	//安装
	if(isInstall){
		srv := service.New(conf, app)
		srv.Install()
		return false
	}
	web.Init(conf, app)
	api.Init(conf, app)
	return true
}
