package main

import (
	"flag"
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"time"
	"trensy/app/model"
	"trensy/app/module/admin"
	"trensy/lib/boot"
	"trensy/lib/db"
	"trensy/lib/support"
	"trensy/lib/tomlparse"
)

func main(){
	var (
		isInstalli bool
		confi string
	)
	flag.StringVar(&confi, "conf", "", "set configuration `file`")
	flag.BoolVar(&isInstalli, "install", false, "project install")
	flag.Parse()
	confPath := confi
	isInstall := isInstalli

	if confPath == "" {
		flag.Usage()
	}
	//服务器配置
	conf := tomlparse.Config(confPath)
	port := conf.Get("system.port").(string)

	app := boot.New(conf)
	app.Bootstrap()
	app.Support = support.New(conf)
	//加入对象
	if isInstall {
		install(app)
		return
	}

	app.Configure(admin.New)

	app.Use(func(ctx iris.Context) {
		//开始时间
		ctx.Values().Set("startTime", time.Now().UnixNano())
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

//安装同步数据库
func install(app *boot.Bootstrapper){
	dbObj := db.New(app.Conf, app.Env)
	err := dbObj.GetMaster().Sync2(new(model.User))
	if err !=nil{
		golog.Fatal("sync database struct fail ", err)
	}else{
		golog.Info("install success!")
	}
}

