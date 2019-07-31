package api

import (
	"github.com/kataras/iris"
	"io/ioutil"
)

func navJson(ctx iris.Context)  {
	filename := "./app/admin/resource/public/resource/js/json/nav.json"
	plan, _ := ioutil.ReadFile(filename)
	data := string(plan[:])
	ctx.Header("Content-type", "application/json")
	ctx.WriteString(data)
}

func menuJson(ctx iris.Context)  {
	filename := "./app/admin/resource/public/resource/js/json/menu.json"
	plan, _ := ioutil.ReadFile(filename)
	data := string(plan[:])
	ctx.Header("Content-type", "application/json")
	ctx.WriteString(data)
}

func homeJson(ctx iris.Context)  {
	filename := "./app/admin/resource/public/resource/js/json/home.json"
	plan, _ := ioutil.ReadFile(filename)
	data := string(plan[:])
	ctx.Header("Content-type", "application/json")
	ctx.WriteString(data)
}
