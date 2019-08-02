package admin

import (
	"github.com/kataras/iris"
	"time"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/web"
	"trensy/lib/boot"
)

func New(app *boot.Bootstrapper) {
	//中间件
	app.Use(func(ctx iris.Context) {
		ctx.Values().Set("startTime", time.Now().UnixNano())
		ctx.Next()
	})

	app.Configure(web.New, api.New)
}
