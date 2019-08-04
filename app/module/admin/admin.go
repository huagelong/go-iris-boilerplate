package admin

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"trensy/app/dao"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/apistateless"
	"trensy/app/module/admin/http/web"
	"trensy/app/module/admin/middleware"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
	"trensy/lib/redis"
	"trensy/lib/db"
	"trensy/lib/session"
)

func New(app *boot.Bootstrapper) {
	//中间件
	app.Use(middleware.InitData())

	//初始化
	app.Session = session.New(app.Conf)
	app.DB = db.New(app.Conf, app.Env)
	app.Redis = redis.New(app.Conf)

	app.OnAnyErrorCode(func(ctx iris.Context) {
		app.Support.ShowStatusError(ctx, ctx.GetStatusCode())
	})

	daoObj := dao.New(app)
	serviceObj :=service.New(app, daoObj)

	webMvc := mvc.New(app.Party("/"))
	webMvc.Register(serviceObj,app)
	webMvc.Router.Use(middleware.WebMvcInit(app))
	webMvc.Handle(new(web.Controller))

	apiMvc := mvc.New(app.Party("/api"))
	apiMvc.Register(serviceObj,app)
	apiMvc.Router.Use(middleware.Auth(serviceObj))
	apiMvc.Handle(new(api.Controller))

	apistatelessMvc := mvc.New(app.Party("/api/stateless"))
	apistatelessMvc.Register(serviceObj,app)
	apistatelessMvc.Handle(new(apistateless.Controller))

}
