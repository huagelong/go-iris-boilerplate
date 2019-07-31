package web

import (
	"github.com/kataras/iris"
)

func index(ctx iris.Context){
	ctx.View("entry/index.html")
}

func login(ctx iris.Context){
	ctx.View("entry/login.html")
}