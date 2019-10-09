package middleware

import (
	"github.com/kataras/iris"
	"time"
	"trensy/lib/boot"
)

//初始化数据
func InitData() iris.Handler {
	return func(ctx iris.Context) {
		ctx.Values().Set("startTime", time.Now().UnixNano())
		ctx.Next()
	}
}

//webmvc 初始化数据
func WebMvcInit(app *boot.Bootstrapper) iris.Handler {
	return func(ctx iris.Context) {
		appTitle := app.Conf.Get("setting.appTitle").(string)
		poweredBy := app.Conf.Get("setting.poweredBy").(string)
		ctx.ViewData("appTitle", appTitle)
		ctx.ViewData("poweredBy", poweredBy)
		ctx.Next()
	}
}
