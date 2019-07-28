package bootstrap

import (
	"gitee.com/trensy/duocaiCRM/g"
	"gitee.com/trensy/duocaiCRM/utils"
	"github.com/gorilla/securecookie"
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
	"github.com/kataras/iris/sessions"
	"time"
)


const (
	// Favicon is the relative 9to the "StaticAssets") favicon path for our app.
	Favicon = "favicon.ico"

	SysTimeform string = "2006-01-02 15:04:05"

	SysTimeformShort string = "2006-01-02"

)


type Configurator func(*Bootstrapper)

// 使用Go内建的嵌入机制(匿名嵌入)，允许类型之前共享代码和数据
// （Bootstrapper继承和共享 iris.Application ）
// 参考文章： https://hackthology.com/golangzhong-de-mian-xiang-dui-xiang-ji-cheng.html
type Bootstrapper struct {
	*iris.Application
	AppName      string  //应用名称
	AppSpawnDate time.Time //当前时间
	Sessions *sessions.Sessions //session
}

// New returns a new Bootstrapper.
func New(appName string, cfgs ...Configurator) *Bootstrapper {
	app := &Bootstrapper{
		AppName:      appName,
		AppSpawnDate: time.Now(),
		Application:  iris.New(),
	}

	for _, cfg := range cfgs {
		cfg(app)
	}

	return app
}

// SetupViews loads the templates.
func (app *Bootstrapper) SetupViews(viewsDir string) {
	htmlEngine := iris.HTML(viewsDir, ".html").Layout("shared/layout.html")
	// 每次重新加载模版（线上关闭它）
	if utils.GetEnv() == "prod"{
		htmlEngine.Reload(false)
	}else{
		htmlEngine.Reload(true)
	}
	// 给模版内置各种定制的方法
	//htmlEngine.AddFunc("FromUnixtimeShort", func(t int) string {
	//	dt := time.Unix(int64(t), int64(0))
	//	return dt.Format(SysTimeformShort)
	//})
	app.RegisterView(htmlEngine)
}

// SetupSessions initializes the sessions, optionally.
func (app *Bootstrapper) SetupSessions(expires time.Duration, cookieHashKey, cookieBlockKey []byte) {
	app.Sessions = sessions.New(sessions.Config{
		Cookie:   "SECRET_SESS_COOKIE_" + app.AppName,
		Expires:  expires,
		Encoding: securecookie.New(cookieHashKey, cookieBlockKey),
	})
}

//// SetupWebsockets prepares the websocket server.
//func (b *Bootstrapper) SetupWebsockets(endpoint string, onConnection websocket.ConnectionFunc) {
//	ws := websocket.New(websocket.Config{})
//	ws.OnConnection(onConnection)
//
//	b.Get(endpoint, ws.Handler())
//	b.Any("/iris-ws.js", func(ctx iris.Context) {
//		ctx.Write(websocket.ClientSource)
//	})
//}

// SetupErrorHandlers prepares the http error handlers
// `(context.StatusCodeNotSuccessful`,  which defaults to < 200 || >= 400 but you can change it).
func (app *Bootstrapper) SetupErrorHandlers() {
	app.OnAnyErrorCode(func(ctx iris.Context) {
		err := iris.Map{
			"app":     app.AppName,
			"status":  ctx.GetStatusCode(),
			"message": ctx.Values().GetString("message"),
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
func (app *Bootstrapper) Bootstrap() *Bootstrapper {
	app.SetupErrorHandlers()
	// static files
	resourcesPath := g.Config.Get("system.resourcesPath").(string)
	app.SetupViews(resourcesPath+"/views")
	staticAssets := resourcesPath+"/public"
	app.Favicon(staticAssets +"/"+ Favicon)
	app.StaticWeb("/", staticAssets)

	//session
	cookieHashKey := g.Config.Get("system.cookieHashKey").(string)
	cookieBlockKey := g.Config.Get("system.cookieBlockKey").(string)
	app.SetupSessions(
		24*time.Hour,
		[]byte(cookieHashKey),//the-big-and-secret-fash-key-here
		[]byte(cookieBlockKey))//lot-secret-of-characters-big-too
	// middleware, after static files
	app.Use(recover.New())
	app.Use(logger.New())

	return app
}
