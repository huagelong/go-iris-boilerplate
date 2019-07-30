package route

import (
	"trensy/app/http/controllers"
	"trensy/boot"
)

func Route (app *boot.Bootstrapper){
	app.Configure(controllers.NewArc)
}
