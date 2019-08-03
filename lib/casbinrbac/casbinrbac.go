package casbinrbac

import (
	"github.com/casbin/casbin/v2"
	"trensy/lib/casbinrbac/xormadapter"
	"github.com/go-xorm/xorm"
	"github.com/kataras/golog"
	"sync"
)

var enforceObj *casbin.Enforcer
//rbac 权限处理
func GetEnforcer(confPath string,db *xorm.EngineGroup) *casbin.Enforcer{
	if enforceObj != nil{
		return enforceObj
	}
	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if enforceObj != nil{
		return enforceObj
	}

	engine ,err:= xormadapter.NewAdapterByEngine(db)
	//golog.Debug("engine:",engine)
	if err !=nil{
		golog.Fatal("casbin conn db error:", err)
	}

	e ,err:= casbin.NewEnforcer(confPath, engine)
	if err !=nil{
		golog.Fatal("NewEnforcer error:", err)
	}
	//golog.Debug("e:",e)
	enforceObj = e
	return enforceObj
}