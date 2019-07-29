package route

import (
	"gitee.com/trensy/duocaiCRM/app/http/controllers"
	"gitee.com/trensy/duocaiCRM/app/service"
	"gitee.com/trensy/duocaiCRM/boot"
	"github.com/kataras/iris/mvc"
)

func Route (app *boot.Bootstrapper){
	index := mvc.New(app.Party("/"))
	index.Register(service.NewArticleService(), app)
	index.Handle(new(controllers.MvcController))
}
