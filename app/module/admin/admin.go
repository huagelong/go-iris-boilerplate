package admin

import (
	"github.com/kataras/iris"
	"github.com/pelletier/go-toml"
	"time"
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

	//后置中间件
	app.Use(func(ctx iris.Context) {
		ctx.Values().Set("startTime", time.Now().UnixNano())
		ctx.Next()
	})

	web.Init(conf, app)
	api.Init(conf, app)
	return true
}
