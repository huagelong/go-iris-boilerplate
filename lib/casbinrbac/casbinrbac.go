package casbinrbac

import (
	"github.com/casbin/casbin/v2"
	xormadapter "github.com/casbin/xorm-adapter"
	"github.com/go-xorm/xorm"
	"github.com/kataras/golog"
)


//rbac 权限处理
func GetEnforcer(confPath string,db *xorm.Engine) *casbin.Enforcer{
	engine ,err:= xormadapter.NewAdapterByEngine(db)
	if err !=nil{
		golog.Fatal("casbin conn db error:", err)
	}
	e ,_:= casbin.NewEnforcer(engine, confPath)
	return e
}