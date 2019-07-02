package routes

import (
	"gitee.com/trensy/duocaiCRM/bootstrap"
	"gitee.com/trensy/duocaiCRM/apps/http/controllers"
	"gitee.com/trensy/duocaiCRM/services"
	"github.com/kataras/iris/mvc"
)

func MvcRoute (app *bootstrap.Bootstrapper){
	index := mvc.New(app.Party("/"))
	index.Register(services.NewArticleService(), app)
	index.Handle(new(controllers.MvcController))
}
