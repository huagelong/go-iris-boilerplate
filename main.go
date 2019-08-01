package main

import (
	"flag"
	"github.com/kataras/iris"
	"trensy/app/module/admin"
	"trensy/lib/boot"
	"trensy/lib/tomlparse"
)

func main(){
	var confi = flag.String("c", "", "set configuration `file`")
	var isInstalli bool
	flag.BoolVar(&isInstalli, "install", false, "project install")
	flag.Parse()
	confPath := *confi
	isInstall := isInstalli

	if confPath == "" {
		flag.Usage()
	}
	//服务器配置
	conf := tomlparse.Config(confPath)
	port := conf.Get("system.port").(string)

	app := boot.New()
	app.Bootstrap(conf)

	//modules
	ok := admin.Init(conf, app, isInstall)
	if !ok {
		return
	}

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
