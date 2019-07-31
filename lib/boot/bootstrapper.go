package boot

import (
	"context"
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
	"github.com/pelletier/go-toml"
	"log"
	"runtime"
	"time"
	"trensy/lib/support"
	"trensy/lib/view"
)

var App *Bootstrapper

type Configurator func(*Bootstrapper)

// 使用Go内建的嵌入机制(匿名嵌入)，允许类型之前共享代码和数据
// （Bootstrapper继承和共享 iris.Application ）
// 参考文章： https://hackthology.com/golangzhong-de-mian-xiang-dui-xiang-ji-cheng.html
type Bootstrapper struct {
	*iris.Application
	AppName      string  //应用名称
	AppSpawnDate time.Time //当前时间
}

// New returns a new Bootstrapper.
func New(appName string) *Bootstrapper {
	App = &Bootstrapper{
		AppName:      appName,
		AppSpawnDate: time.Now(),
		Application:  iris.New(),
	}

	return App
}

// SetupViews loads the templates.
func (app *Bootstrapper) SetupViews(resourcesPath string, c *toml.Tree) {
	viewsDir := resourcesPath+"/views"
	htmlEngine := iris.Django(viewsDir, ".html")
	// 每次重新加载模版（线上关闭它）
	if support.GetEnv(c) == "prod"{
		htmlEngine.Reload(false)
	}else{
		htmlEngine.Reload(true)
	}
	//func ,filter
    view.New(htmlEngine, c)
	// 给模版内置各种定制的方法
	//htmlEngine.AddFunc("FromUnixtimeShort", func(t int) string {
	//	dt := time.Unix(int64(t), int64(0))
	//	return dt.Format(SysTimeformShort)
	//})
	staticAssets := resourcesPath+"/public"
	app.Favicon(staticAssets +"/favicon.ico")
	app.StaticWeb("/", staticAssets)
	app.RegisterView(htmlEngine)
}

// SetupErrorHandlers prepares the http error handlers
// `(context.StatusCodeNotSuccessful`,  which defaults to < 200 || >= 400 but you can change it).
func (app *Bootstrapper) SetupErrorHandlers() {
	app.OnAnyErrorCode(func(ctx iris.Context) {
		err := iris.Map{
			"app":     app.AppName,
			"status":  ctx.GetStatusCode(),
			"msg": ctx.Values().GetString("message"),
			"data":nil,
		}

		if jsonOutput := ctx.URLParamExists("json"); jsonOutput {
			_, _ = ctx.JSON(err)
			return
		}

		ctx.ViewData("Err", err)
		ctx.ViewData("Title", "Error")
		_ = ctx.View("shared/error.html")
	})
}

// Configure accepts configurations and runs them inside the Bootstraper's context.
func (app *Bootstrapper) Configure(cs ...Configurator) {
	for _, c := range cs {
		c(app)
	}
}

// Bootstrap prepares our application.
// Returns itself.
func (app *Bootstrapper) Bootstrap(conf *toml.Tree) *Bootstrapper {
	runtime.GOMAXPROCS(runtime.NumCPU())
	log.SetFlags(log.Lshortfile | log.LstdFlags)

	app.SetupErrorHandlers()
	// static files
	resourcesPath := conf.Get("system.resourcesPath").(string)
	app.SetupViews(resourcesPath, conf)
	//环境变量
	environment :=support.GetEnv(conf)
	golog.Info("environment is " + environment)
	app.Use(recover.New())
	requestLogger := logger.New(logger.Config{
		Status: true,
		IP: false,
		Method: true,
		Path: true,
		Query: false,
		Columns:false,
	})
	app.Use(requestLogger)
	logLevel :=conf.Get("system.logLevel").(string)
	app.Logger().SetLevel(logLevel)

	iris.RegisterOnInterrupt(func() {
		timeout := 5 * time.Second
		ctx, cancel := context.WithTimeout(context.Background(), timeout)
		defer cancel()
		// 关闭所有主机
		_ = app.Shutdown(ctx)
	})

	return app
}