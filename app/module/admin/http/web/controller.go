package web

import (
	"github.com/kataras/iris"
	"trensy/app/module/admin/service"
	"trensy/lib/boot"
)

type Controller struct {
	Srv *service.Service
	App *boot.Bootstrapper
	Ctx iris.Context
}
