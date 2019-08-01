package db

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
	"github.com/kataras/golog"
	"github.com/pelletier/go-toml"
	"sync"
	"time"
	"trensy/lib/support"
)

var engineMysqlGroup *xorm.EngineGroup

func InstanceMysqlGroup(c *toml.Tree) *xorm.EngineGroup  {
	if engineMysqlGroup != nil{
		return engineMysqlGroup
	}

	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if engineMysqlGroup != nil{
		return engineMysqlGroup
	}

	masterEngine := master(c)
	slaveEngine := slave(c)
	engine, err := xorm.NewEngineGroup(masterEngine, []*xorm.Engine{slaveEngine})
	if err !=nil {
		golog.Fatal("dbsource.engineGroup", err)
	}
	defer engine.Close()
	err = engine.Ping()
	if err != nil {
		golog.Fatal("got err when ping db: ", err)
	}

	env := support.GetEnv(c)

	if env == "prod" {
		engine.ShowSQL(false)
	} else{
		engine.ShowSQL(true)
	}
	timeLocation := c.Get("system.timeLocation").(string)
	var SysTimeLocation, _ = time.LoadLocation(timeLocation)
	engine.SetTZLocation(SysTimeLocation)
	// 性能优化的时候才考虑，加上本机的SQL缓存
	cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 1000)
	engine.SetDefaultCacher(cacher)
	golog.Info("dbgroup created ....")
	return engine
}

func master(c *toml.Tree) *xorm.Engine{
	dbDriver :=c.Get("db.drive").(string)
    dbHost :=c.Get("db.master.host").(string)
	dbPort :=c.Get("db.master.port").(string)
	dbUser :=c.Get("db.master.user").(string)
	dbPwd :=c.Get("db.master.pwd").(string)
	dbDbname :=c.Get("db.master.dbname").(string)
	dbMaxIdleConns := int(c.Get("db.master.maxIdleConns").(int64))
	dbMaxOpenConns := int(c.Get("db.slave.maxOpenConns").(int64))

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
	golog.Info("master db created ....")
	return engine
}

func slave(c *toml.Tree) *xorm.Engine{
	dbDriver :=c.Get("db.drive").(string)
	dbHost :=c.Get("db.slave.host").(string)
	dbPort :=c.Get("db.slave.port").(string)
	dbUser :=c.Get("db.slave.user").(string)
	dbPwd :=c.Get("db.slave.pwd").(string)
	dbDbname :=c.Get("db.slave.dbname").(string)
	dbMaxIdleConns := int(c.Get("db.slave.maxIdleConns").(int64))
	dbMaxOpenConns := int(c.Get("db.slave.maxOpenConns").(int64))

	driveSource := dbUser+":"+dbPwd+"@tcp("+dbHost+":"+dbPort+")/"+dbDbname+"?charset=utf8"
	engine, err := xorm.NewEngine(dbDriver, driveSource)
	if err !=nil {
		golog.Fatal("dbsource.InstanceSlave", err)
	}
	//设置连接池的空闲数大小
	engine.SetMaxIdleConns(dbMaxIdleConns)
	//设置最大打开连接数
	engine.SetMaxOpenConns(dbMaxOpenConns)
	golog.Info("slave db created ....")
	return engine
}
