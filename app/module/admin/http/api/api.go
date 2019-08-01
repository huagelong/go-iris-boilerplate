package api

import (
	"github.com/kataras/iris"
	"github.com/pelletier/go-toml"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
	"trensy/lib/support"
)

var (
	srv *service.Service
)

func Init(c *toml.Tree, app *boot.Bootstrapper) {
	srv = service.New(c, app)
	initRoute(app)
}

func initRoute(app *boot.Bootstrapper)  {

	apiApp := app.Party("/api", authMiddleware)
	{
		apiApp.Post("/navjson", navJson)
		apiApp.Post("/menujson",menuJson)
		apiApp.Post("/homejson",homeJson)
	}

	//无登录状态api
	statelessApiApp := app.Party("/sapi")
	{
		statelessApiApp.Post("/login", login)
		statelessApiApp.Post("/checkLogin", checkLogin)
	}

}

//判断是否登录
func authMiddleware(ctx iris.Context){
	uid:=srv.GetSessionUid(ctx)
	if uid == 0{
		support.ResponseJson(ctx, 500, "你的登录已失效，请重新登录")
	}
	ctx.Next()
}
