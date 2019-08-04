package admin

import (
	"github.com/kataras/iris"
	"time"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/web"
	"trensy/lib/boot"
	"trensy/lib/session"
)

func New(app *boot.Bootstrapper) {
	app.Session = session.New(app.Conf)

	//中间件
	app.Use(func(ctx iris.Context) {
		ctx.Values().Set("startTime", time.Now().UnixNano())
		ctx.Next()
	})

	app.OnAnyErrorCode(func(ctx iris.Context) {
		app.Support.ShowStatusError(ctx,ctx.GetStatusCode())
	})

	app.Configure(web.New, api.New)
}
