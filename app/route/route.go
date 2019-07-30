package route

import (
	"gitee.com/trensy/duocaiCRM/app/http/controllers"
	"gitee.com/trensy/duocaiCRM/boot"
)

func Route (app *boot.Bootstrapper){
	app.Configure(controllers.NewArc)
}
