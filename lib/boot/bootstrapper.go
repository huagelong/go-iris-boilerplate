package boot

import (
	"context"
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/sessions"
	"github.com/pelletier/go-toml"
	"log"
	"runtime"
	"time"
	"trensy/lib/db"
	"trensy/lib/middleware/recover"
	"trensy/lib/redis"
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
	AppSpawnDate time.Time //当前时间
	Env          string    //开发环境
	Conf         *toml.Tree
	Support      *support.Support
	Session      *sessions.Sessions
	DB           *db.DBEngine
	Redis        *redis.Redis
}

// New returns a new Bootstrapper.
func New(conf *toml.Tree) *Bootstrapper {

	environment := conf.Get("system.environment").(string)
	if environment == "" {
		environment = "prod";
	}

	App = &Bootstrapper{
		AppSpawnDate: time.Now(),
		Application:  iris.New(),
		Conf:         conf,
		Env:          environment,
	}
	return App
}

// SetupViews loads the templates.
func (app *Bootstrapper) SetupViews(resourcesPath string) {
	staticAssets := resourcesPath + "/public"
	app.Favicon(staticAssets + "/favicon.ico")
	//app.StaticWeb("/", staticAssets)
	app.HandleDir("/",staticAssets,iris.DirOptions{
		IndexName: "/index.html",
		Gzip: true,
		ShowList: false,
	})

	viewsDir := resourcesPath + "/views"
	htmlEngine := iris.Django(viewsDir, ".html")
	// 每次重新加载模版（线上关闭它）
	if app.Env == "prod" {
		htmlEngine.Reload(false)
	} else {
		htmlEngine.Reload(true)
	}
	//func ,filter
	view.New(htmlEngine, app.Conf)
	app.RegisterView(htmlEngine)
}

// Configure accepts configurations and runs them inside the Bootstraper's context.
func (app *Bootstrapper) Configure(cs ...Configurator) {
	for _, c := range cs {
		c(app)
	}
}

// Bootstrap prepares our application.
// Returns itself.
func (app *Bootstrapper) Bootstrap() *Bootstrapper {
	runtime.GOMAXPROCS(runtime.NumCPU())
	log.SetFlags(log.Lshortfile | log.LstdFlags)
	// static files
	resourcesPath := app.Conf.Get("system.resourcesPath").(string)
	app.SetupViews(resourcesPath)
	//环境变量
	environment := app.Env
	golog.Info("environment is " + environment)
	app.Use(recover.New())
	app.Use(logger.New())
	logLevel := app.Conf.Get("system.logLevel").(string)
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
