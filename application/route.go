package application

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"trensy/application/module/api"
	"trensy/application/module/api/stateless"
	"trensy/application/module/web"
	"trensy/application/module/web/page"
	"trensy/application/middleware"
	"trensy/application/service"
	"trensy/lib/boot"
	"trensy/lib/db"
	"trensy/lib/redis"
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

	serviceObj := service.New(app)

	//路由设置开始
	webMvc := mvc.New(app.Party("/"))
	webMvc.Register(serviceObj, app)

	webMvc.Router.Use(middleware.WebMvcInit(app))
	webMvc.Handle(new(web.Controller))
	pageMvc := mvc.New(app.Party("/page"))
	pageMvc.Register(serviceObj, app)
	//检查是否登录
	pageMvc.Router.Use(middleware.Auth(serviceObj))
	pageMvc.Handle(new(page.Controller))
	apiMvc := mvc.New(app.Party("/api"))
	apiMvc.Register(serviceObj, app)
	//检查是否登录
	apiMvc.Router.Use(middleware.Auth(serviceObj))
	apiMvc.Handle(new(api.Controller))

	apistatelessMvc := mvc.New(app.Party("/api/stateless"))
	apistatelessMvc.Register(serviceObj, app)
	apistatelessMvc.Handle(new(stateless.Controller))

}
