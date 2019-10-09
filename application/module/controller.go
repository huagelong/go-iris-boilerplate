package module

import (
	"github.com/kataras/iris"
	"trensy/application/service"
	"trensy/lib/boot"
)

type Controller struct {
	Service *service.Service
	App *boot.Bootstrapper
	Ctx iris.Context
}
/**
response 输出
 */
func (c *Controller) ResponseJson(ctx iris.Context, status int, msg string, data ...interface{})  {
	responseData := interface{}(nil)
	if len(data) > 0 {
		responseData = data[0]
	}
	c.Service.Support.ResponseJson(ctx, status, msg, responseData)
}
