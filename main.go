package main

import (
	"context"
	"gitee.com/trensy/duocaiCRM/app/route"
	"gitee.com/trensy/duocaiCRM/boot"
	"gitee.com/trensy/duocaiCRM/g"
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"log"
	"time"
)

func main(){
	log.SetFlags(log.Lshortfile | log.LstdFlags)
	//服务器配置
	conf := g.Config
	port := conf.Get("system.port").(string)
	logLevel :=conf.Get("system.logLevel").(string)
	appname :=conf.Get("system.appname").(string)

	app := boot.New(appname)
	app.Bootstrap()
	app.Configure(route.Route)
	app.Logger().SetLevel(logLevel)

	//环境变量
	environment := g.GetEnv()
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

