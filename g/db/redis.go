package db

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/sessions/sessiondb/redis"
	"github.com/kataras/iris/sessions/sessiondb/redis/service"
	"sync"
	"time"
	"trensy/g/tomlparse"
)

var(
	instanceRedis *redis.Database
)

func InstanceRedis()  *redis.Database {
	if instanceRedis != nil{
		return instanceRedis
	}
	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if instanceRedis != nil{
		return instanceRedis
	}

	conf := tomlparse.Config()
	db := redis.New(service.Config{
		Network:   conf.Get("db.redis.network").(string),
		Addr:      conf.Get("db.redis.addr").(string),
		IdleTimeout:   time.Duration(int(conf.Get("db.redis.idleTimeout").(int64))) * time.Second,
		MaxIdle:int(conf.Get("db.redis.maxIdle").(int64)),
		MaxActive: int(conf.Get("db.redis.maxActive").(int64)),
		Password:  conf.Get("db.redis.password").(string),
		Database:  conf.Get("db.redis.database").(string),
		Prefix:    conf.Get("db.redis.prefix").(string),
	})
	iris.RegisterOnInterrupt(func() {
		db.Close()
	})

	defer db.Close()
	instanceRedis = db;
	return db
}