package web

import "github.com/kataras/iris"

func pageHome(ctx iris.Context)  {
	ctx.View("page/pageHome.html")
}

func page404(ctx iris.Context)  {
	ctx.View("page/page404.html")
}
