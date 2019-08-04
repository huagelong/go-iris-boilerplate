package middleware

import (
	"github.com/kataras/iris"
	"trensy/app/module/admin/service"
)

func Auth(serviceObj *service.Service) iris.Handler {
	return func(ctx iris.Context) {
		uid:= serviceObj.GetSessionUid(ctx)
		if uid == 0{
			serviceObj.Support.ResponseJson(ctx, 403, "你的登录已失效，请重新登录")
		}
		ctx.Next()
	}
}
