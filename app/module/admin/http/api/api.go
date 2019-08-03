package api

import (
	"github.com/kataras/iris"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
)

var (
	srv *service.Service
)

func New(app *boot.Bootstrapper) {
	srv = service.New(app)
	initRoute(app)
}

func initRoute(app *boot.Bootstrapper)  {

	//无登录状态api
	statelessApiApp := app.Party("/api/stateless")
	{
		statelessApiApp.Post("/login", login)
		statelessApiApp.Post("/checkLogin", checkLogin)
	}


	apiApp := app.Party("/api", authMiddleware)
	{
		apiApp.Post("/navjson", navJson)
		apiApp.Post("/menujson",menuJson)
		apiApp.Post("/homejson",homeJson)
	}
}

//判断是否登录
func authMiddleware(ctx iris.Context){
	uid:=srv.GetSessionUid(ctx)
	if uid == 0{
		srv.Support.ResponseJson(ctx, 403, "你的登录已失效，请重新登录")
	}
	ctx.Next()
}