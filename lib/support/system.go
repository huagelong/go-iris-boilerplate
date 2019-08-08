package support

import (
	"crypto/sha1"
	"fmt"
	"github.com/kataras/iris"
	"reflect"
)

//sha1加密
func (sp *Support) NewSha1(str string) string {
	hashKey := sp.Conf.Get("system.hashKey").(string)
	h := sha1.New()
	h.Write([]byte(str + hashKey))
	l := fmt.Sprintf("%x", h.Sum(nil))
	return l
}

func (sp *Support) ShowStatusError(ctx iris.Context, status int) {
	var msg string
	switch status {
	case 404:
		msg = "页面不存在"
	case 500:
		msg = "服务器报错!"
	case 403:
		msg = "你没有权限进行此操作!"
	default:
		msg = "出错啦!"
	}
	if ctx.IsAjax() {
		path := ctx.Request().URL.Path
		checkPre := path[1:4]
		if checkPre == "api" {
			sp.ResponseJson(ctx, status, msg)
			return
		}
	}

	ctx.ViewData("status", status)
	ctx.ViewData("msg", msg)
	ctx.ViewData("title", "出错了！~")
	_ = ctx.View("shared/error.html")
	ctx.StopExecution()
}

func (sp *Support) Struct2Map(obj interface{}) map[string]interface{} {
	t := reflect.TypeOf(obj)
	v := reflect.ValueOf(obj)

	var data = make(map[string]interface{})
	for i := 0; i < t.NumField(); i++ {
		data[t.Field(i).Name] = v.Field(i).Interface()
	}
	return data
}
