package main

import (
	"context"
	"gitee.com/trensy/duocaiCRM/app/routes"
	"gitee.com/trensy/duocaiCRM/bootstrap"
	"gitee.com/trensy/duocaiCRM/g"
	"gitee.com/trensy/duocaiCRM/utils"
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"time"
)
var app *bootstrap.Bootstrapper

func main(){
	//log.SetFlags(log.Lshortfile | log.LstdFlags)
	//服务器配置
	conf := g.Config
	port := conf.Get("system.port").(string)
	logLevel :=conf.Get("system.logLevel").(string)
	appname :=conf.Get("system.appname").(string)

	app = bootstrap.New(appname)
	app.Bootstrap()
	app.Configure(routes.MvcRoute)
	app.Logger().SetLevel(logLevel)

	//环境变量
	environment := utils.GetEnv()
	golog.Info("environment is " + environment)

	iris.RegisterOnInterrupt(func() {
		timeout := 5 * time.Second
		ctx, cancel := context.WithTimeout(context.Background(), timeout)
		defer cancel()
		// 关闭所有主机
		_ = app.Shutdown(ctx)
	})

	configPath := "./resource/config/app.toml"
	globalConfig := iris.TOML(configPath)

	_ = app.Run(iris.Addr(port),
		iris.WithConfiguration(globalConfig),
		iris.WithoutInterruptHandler,
		//按下CTRL/CMD+C时跳过错误的服务器：
		iris.WithoutServerError(iris.ErrServerClosed),
		//启用更快的json序列化和优化：
		iris.WithOptimizations)
}

