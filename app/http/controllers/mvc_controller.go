package controllers

import (
	"gitee.com/trensy/duocaiCRM/bootstrap"
	"gitee.com/trensy/duocaiCRM/app/service"
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
)

type MvcController struct {
	Ctx iris.Context
	App *bootstrap.Bootstrapper
	ArticleService service.ArticleService
}

func (c *MvcController) GetInfo() mvc.Result{
	id ,_:= c.Ctx.URLParamInt("id")
	data := c.ArticleService.Get(id)

	return mvc.View{
		Name: "index.html",
		Data: iris.Map{
			"Title":"首页",
			"Welcome":"欢迎",
			"Article":data}};
}

func (c *MvcController) GetArc() string{
	title := c.Ctx.URLParam("title")
	//fmt.Println(title)
     ok :=c.ArticleService.Add(title)
     if ok.Id == 0 {
		c.App.Logger().Println("添加失败!")
	 }
	return "add success"
}