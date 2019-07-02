package controllers

import (
	"gitee.com/trensy/duocaiCRM/services"
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"gitee.com/trensy/duocaiCRM/bootstrap"
)

type MvcController struct {
	Ctx iris.Context
	App *bootstrap.Bootstrapper
	ArticleService services.ArticleService
}

func (c *MvcController) GetInfo() mvc.Result{

	data := c.ArticleService.Get(1)

	return mvc.View{
		Name: "index.html",
		Data: iris.Map{
			"Title":"首页",
			"Welcome":"欢迎",
			"Article":data}};
}

func (c *MvcController) GetArc() string{
	title := c.Ctx.URLParam("title")
     ok :=c.ArticleService.Add(title)
     //fmt.Println(c.App.AppName)
     if ok == false{
		c.App.Logger().Println("添加失败!")
	 }
	return "add success"
}