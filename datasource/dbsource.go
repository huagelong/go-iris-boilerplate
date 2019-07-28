package datasource

import (
	"gitee.com/trensy/duocaiCRM/g"
	"gitee.com/trensy/duocaiCRM/utils"
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
	"log"
	"sync"
	"time"
)

var (
	masterEngine *xorm.Engine
	slaveEngine *xorm.Engine
	lock sync.Mutex
)

func InstanceMaster() *xorm.Engine{
	if masterEngine != nil{
		return masterEngine
	}

	lock.Lock()
	defer lock.Unlock()

	if masterEngine != nil{
		return masterEngine
	}


	dbDriver := g.Config.Get("db.drive").(string)
    dbHost := g.Config.Get("db.master.host").(string)
	dbPort := g.Config.Get("db.master.port").(string)
	dbUser := g.Config.Get("db.master.user").(string)
	dbPwd := g.Config.Get("db.master.pwd").(string)
	dbDbname := g.Config.Get("db.master.dbname").(string)
	dbMaxIdleConns := int(g.Config.Get("db.master.maxIdleConns").(int64))
	dbMaxOpenConns := int(g.Config.Get("db.slave.maxOpenConns").(int64))

	driveSource := dbUser+":"+dbPwd+"@tcp("+dbHost+":"+dbPort+")/"+dbDbname+"?charset=utf8"
	//fmt.Println(driveSource)
	engine, err := xorm.NewEngine(dbDriver, driveSource)
	if err !=nil {
		log.Fatal("dbsource.InstanceMaster", err)
	}

	err = engine.Ping()
	if err != nil {
		log.Fatal("got err when ping db: ", err)
	}

	env := utils.GetEnv()

	if env == "prod" {
		engine.ShowSQL(false)
	} else{
		engine.ShowSQL(true)
	}

	//设置连接池的空闲数大小
	engine.SetMaxIdleConns(dbMaxIdleConns)
	//设置最大打开连接数
	engine.SetMaxOpenConns(dbMaxOpenConns)

	timeLocation := g.Config.Get("system.timeLocation").(string)
	var SysTimeLocation, _ = time.LoadLocation(timeLocation)
	engine.SetTZLocation(SysTimeLocation)
	// 性能优化的时候才考虑，加上本机的SQL缓存
	cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 1000)
	engine.SetDefaultCacher(cacher)
	masterEngine = engine
	return masterEngine
}

func InstanceSlave() *xorm.Engine{
	if slaveEngine != nil{
		return slaveEngine
	}

	lock.Lock()
	defer lock.Unlock()

	if slaveEngine != nil{
		return slaveEngine
	}

	dbDriver := g.Config.Get("db.drive").(string)
	dbHost := g.Config.Get("db.slave.host").(string)
	dbPort := g.Config.Get("db.slave.port").(string)
	dbUser := g.Config.Get("db.slave.user").(string)
	dbPwd := g.Config.Get("db.slave.pwd").(string)
	dbDbname := g.Config.Get("db.slave.dbname").(string)
	dbMaxIdleConns := int(g.Config.Get("db.slave.maxIdleConns").(int64))
	dbMaxOpenConns := int(g.Config.Get("db.slave.maxOpenConns").(int64))

	driveSource := dbUser+":"+dbPwd+"@tcp("+dbHost+":"+dbPort+")/"+dbDbname+"?charset=utf8"
	engine, err := xorm.NewEngine(dbDriver, driveSource)
	if err !=nil {
		log.Fatal("dbsource.InstanceSlave", err)
	}

	err = engine.Ping()
	if err != nil {
		log.Fatal("got err when ping db: ", err)
	}

	env := utils.GetEnv()
	if env == "prod" {
		engine.ShowSQL(false)
	} else{
		engine.ShowSQL(true)
	}

	//设置连接池的空闲数大小
	engine.SetMaxIdleConns(dbMaxIdleConns)
	//设置最大打开连接数
	engine.SetMaxOpenConns(dbMaxOpenConns)

	timeLocation := g.Config.Get("system.timeLocation").(string)
	var SysTimeLocation, _ = time.LoadLocation(timeLocation)
	engine.SetTZLocation(SysTimeLocation)
	// 性能优化的时候才考虑，加上本机的SQL缓存
	cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 1000)
	engine.SetDefaultCacher(cacher)
	slaveEngine = engine
	return slaveEngine
}
