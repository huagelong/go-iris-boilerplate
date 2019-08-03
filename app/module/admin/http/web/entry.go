package web

import (
	"github.com/kataras/iris"
)

func index(ctx iris.Context){
	ctx.View("admin/entry/index.html")
}

func login(ctx iris.Context){
	ctx.View("admin/entry/login.html")
}
