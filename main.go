package main

import (
	"flag"
	"github.com/kataras/iris"
	"trensy/app/module/admin/http/api"
	"trensy/app/module/admin/http/web"
	"trensy/lib/boot"
	"trensy/lib/tomlparse"
)

func main(){
	var confi = flag.String("c", "./resource/config/app.toml", "set configuration `file`")
	flag.Parse()
	confPath := *confi
	if confPath == "" {
		flag.Usage()
	}
	//服务器配置
	conf := tomlparse.Config(confPath)
	port := conf.Get("system.port").(string)
	appname :=conf.Get("system.appname").(string)

	app := boot.New(appname)
	app.Bootstrap(conf)

	web.Init(conf, app)
	api.Init(conf, app)

	app.Use(func(ctx iris.Context) {
		//ctx.ViewLayout("./shared/layout.html")
		appTitle := conf.Get("system.appTitle").(string)
		poweredBy := conf.Get("system.poweredBy").(string)
		ctx.ViewData("appTitle", appTitle)
		ctx.ViewData("poweredBy", poweredBy)
		ctx.Next()
	})

	globalConfig := iris.TOML(confPath)
	_ = app.Run(iris.Addr(port),
		iris.WithConfiguration(globalConfig),
		iris.WithoutInterruptHandler,
		//按下CTRL/CMD+C时跳过错误的服务器：
		iris.WithoutServerError(iris.ErrServerClosed),
		//启用更快的json序列化和优化：
		iris.WithOptimizations,
	)
}
