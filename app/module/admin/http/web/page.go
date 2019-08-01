package web

import "github.com/kataras/iris"

func pageHome(ctx iris.Context)  {
	ctx.View("admin/page/pageHome.html")
}

func page404(ctx iris.Context)  {
	ctx.View("admin/page/page404.html")
}
