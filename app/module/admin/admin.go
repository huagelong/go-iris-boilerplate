package admin

import (
	"github.com/kataras/iris"
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

	//后置中间件
	app.Done(func(ctx iris.Context) {
		//获取到的Authorization传递回去
		authorization := ctx.GetHeader("Authorization")
		if authorization != "" {
			ctx.Header("Authorization", authorization)
		}

	})

	web.Init(conf, app)
	api.Init(conf, app)
	return true
}
