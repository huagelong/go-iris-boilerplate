package routes

import (
	"gitee.com/trensy/duocaiCRM/bootstrap"
	"gitee.com/trensy/duocaiCRM/app/http/controllers"
	"gitee.com/trensy/duocaiCRM/app/service"
	"github.com/kataras/iris/mvc"
)

func MvcRoute (app *bootstrap.Bootstrapper){
	index := mvc.New(app.Party("/"))
	index.Register(service.NewArticleService(), app)
	index.Handle(new(controllers.MvcController))
}
