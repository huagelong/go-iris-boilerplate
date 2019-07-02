package datasource

import (
	"fmt"
	"gitee.com/trensy/duocaiCRM/configs"
	"gitee.com/trensy/duocaiCRM/utils"
	"github.com/go-xorm/xorm"
	_ "github.com/go-sql-driver/mysql"
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

	dbDriver := configs.Conf.Get("db.drive").(string)
    dbHost := configs.Conf.Get("db.master.host").(string)
	dbPort := int(configs.Conf.Get("db.master.port").(int64))
	dbUser := configs.Conf.Get("db.master.user").(string)
	dbPwd := configs.Conf.Get("db.master.pwd").(string)
	dbDbname := configs.Conf.Get("db.master.dbname").(string)
	dbMaxIdleConns := int(configs.Conf.Get("db.master.maxIdleConns").(int64))
	dbMaxOpenConns := int(configs.Conf.Get("db.slave.maxOpenConns").(int64))

	driveSource :=fmt.Sprint("%s:%s@tcp(%s:%d)/%s?charset=utf8",
		dbUser,dbPwd,dbHost,dbPort,dbDbname)
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

	timeLocation := configs.Conf.Get("system.timeLocation").(string)
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

	dbDriver := configs.Conf.Get("db.drive").(string)
	dbHost := configs.Conf.Get("db.slave.host").(string)
	dbPort := int(configs.Conf.Get("db.slave.port").(int64))
	dbUser := configs.Conf.Get("db.slave.user").(string)
	dbPwd := configs.Conf.Get("db.slave.pwd").(string)
	dbDbname := configs.Conf.Get("db.slave.dbname").(string)
	dbMaxIdleConns := int(configs.Conf.Get("db.slave.maxIdleConns").(int64))
	dbMaxOpenConns := int(configs.Conf.Get("db.slave.maxOpenConns").(int64))

	driveSource :=fmt.Sprint("%s:%s@tcp(%s:%d)/%s?charset=utf8",
		dbUser,dbPwd,dbHost,dbPort,dbDbname)
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

	timeLocation := configs.Conf.Get("system.timeLocation").(string)
	var SysTimeLocation, _ = time.LoadLocation(timeLocation)
	engine.SetTZLocation(SysTimeLocation)
	// 性能优化的时候才考虑，加上本机的SQL缓存
	cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), 1000)
	engine.SetDefaultCacher(cacher)
	slaveEngine = engine
	return slaveEngine
}
