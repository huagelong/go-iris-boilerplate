package db

import (
	"trensy/g/support"
	"trensy/g/tomlparse"
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
	"github.com/kataras/golog"
	"sync"
	"time"
)

var engineMysqlGroup *xorm.EngineGroup

func InstanceMysqlGroup() *xorm.EngineGroup  {
	if engineMysqlGroup != nil{
		return engineMysqlGroup
	}

	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if engineMysqlGroup != nil{
		return engineMysqlGroup
	}

	masterEngine := master()
	slaveEngine := slave()
	engine, err := xorm.NewEngineGroup(masterEngine, []*xorm.Engine{slaveEngine})
	if err !=nil {
		golog.Fatal("dbsource.engineGroup", err)
	}

	err = engine.Ping()
	if err != nil {
		golog.Fatal("got err when ping db: ", err)
	}

	env := support.GetEnv()

	if env == "prod" {
		engine.ShowSQL(false)
	} else{
		engine.ShowSQL(true)
	}
	g := tomlparse.Config()
	timeLocation := g.Get("system.timeLocation").(string)
	var SysTimeLocation, _ = time.LoadLocation(timeLocation)
	engine.SetTZLocation(SysTimeLocation)
	// 性能优化的时候才考虑，加上本机的SQL缓存
	cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 1000)
	engine.SetDefaultCacher(cacher)
	golog.Info("dbgroup created ....")
	return engine
}

func master() *xorm.Engine{
	g := tomlparse.Config()
	dbDriver := g.Get("db.drive").(string)
    dbHost := g.Get("db.master.host").(string)
	dbPort := g.Get("db.master.port").(string)
	dbUser := g.Get("db.master.user").(string)
	dbPwd := g.Get("db.master.pwd").(string)
	dbDbname := g.Get("db.master.dbname").(string)
	dbMaxIdleConns := int(g.Get("db.master.maxIdleConns").(int64))
	dbMaxOpenConns := int(g.Get("db.slave.maxOpenConns").(int64))

	driveSource := dbUser+":"+dbPwd+"@tcp("+dbHost+":"+dbPort+")/"+dbDbname+"?charset=utf8"
	//fmt.Println(driveSource)
	engine, err := xorm.NewEngine(dbDriver, driveSource)
	if err !=nil {
		golog.Fatal("dbsource.InstanceMaster", err)
	}

	//设置连接池的空闲数大小
	engine.SetMaxIdleConns(dbMaxIdleConns)
	//设置最大打开连接数
	engine.SetMaxOpenConns(dbMaxOpenConns)
	golog.Info("master created ....")
	return engine
}

func slave() *xorm.Engine{

	g := tomlparse.Config()
	dbDriver := g.Get("db.drive").(string)
	dbHost := g.Get("db.slave.host").(string)
	dbPort := g.Get("db.slave.port").(string)
	dbUser := g.Get("db.slave.user").(string)
	dbPwd := g.Get("db.slave.pwd").(string)
	dbDbname := g.Get("db.slave.dbname").(string)
	dbMaxIdleConns := int(g.Get("db.slave.maxIdleConns").(int64))
	dbMaxOpenConns := int(g.Get("db.slave.maxOpenConns").(int64))

	driveSource := dbUser+":"+dbPwd+"@tcp("+dbHost+":"+dbPort+")/"+dbDbname+"?charset=utf8"
	engine, err := xorm.NewEngine(dbDriver, driveSource)
	if err !=nil {
		golog.Fatal("dbsource.InstanceSlave", err)
	}

	//设置连接池的空闲数大小
	engine.SetMaxIdleConns(dbMaxIdleConns)
	//设置最大打开连接数
	engine.SetMaxOpenConns(dbMaxOpenConns)
	golog.Info("slave created ....")
	return engine
}
