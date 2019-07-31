package api

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"trensy/lib/support"
)

type user struct {
	userId int
}

func checkLogin(ctx iris.Context)  {
	var user user
	ctx.ReadJSON(&user)
	golog.Info("logout:",user)
	support.ResponseJson(ctx, 200, "没有权限")
}

func login(ctx iris.Context)  {

}