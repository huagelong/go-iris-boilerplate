package admin

import (
	"github.com/kataras/iris"
	"time"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/web"
	"trensy/lib/boot"
	"trensy/lib/casbinrbac"
	"trensy/lib/db"
	cm "trensy/app/module/admin/middleware/casbin"
)

func New(app *boot.Bootstrapper) {
	//中间件
	app.Use(func(ctx iris.Context) {
		ctx.Values().Set("startTime", time.Now().UnixNano())
		ctx.Next()
	})

	app.OnAnyErrorCode(func(ctx iris.Context) {
		var msg string
		switch ctx.GetStatusCode() {
		case 404:msg="页面不存在"
		case 500:msg="服务器报错!"
		default:
			msg="出错啦!"
		}
		err := iris.Map{
			"status":  ctx.GetStatusCode(),
			"msg": msg,
			"data":nil,
		}
		if ctx.IsAjax(){
			path := ctx.Request().URL.Path
			checkPre := path[1:4]
			if checkPre == "api"{
				_, _ = ctx.JSON(err)
				return
			}
		}

		ctx.ViewData("err", err)
		ctx.ViewData("title", "出错了！~")
		_ = ctx.View("shared/error.html")
	})

	//casbin权限控制
	enforcer := casbinrbac.GetEnforcer("./resource/config/rbac_model.conf", db.New(app.Conf, app.Env).GetMaster())
	app.Casbin = enforcer
	casbinMiddleware := cm.New(enforcer)
	app.Use(casbinMiddleware.ServeHTTP)

	app.Configure(web.New, api.New)
}
