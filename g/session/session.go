package session

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris/sessions"
	"github.com/kataras/iris/sessions/sessiondb/redis"
	"github.com/kataras/iris/sessions/sessiondb/redis/service"
	"sync"
	"time"
	"trensy/g/tomlparse"
)

var (
	instanceSession *sessions.Sessions
	instanceRedis *redis.Database
)

func InstanceSession() *sessions.Sessions {
	if instanceSession != nil{
		return instanceSession
	}
	expires := 24*time.Hour
	ses := sessions.New(sessions.Config{
		Cookie:   "tsessionid",
		Expires:  expires,
		AllowReclaim: true,
	})

	instanceSession = ses
	redisDb := redisConn()
	instanceSession.UseDatabase(redisDb)
	return instanceSession;
}

func redisConn()  *redis.Database {
	if instanceRedis != nil{
		return instanceRedis
	}
	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if instanceRedis != nil{
		return instanceRedis
	}
	golog.Info("session redis created!...")
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
	instanceRedis = db;
	//defer instanceRedis.Close()
	//iris.RegisterOnInterrupt(func() {
	//	_ = instanceRedis.Close()
	//})
	return instanceRedis
}