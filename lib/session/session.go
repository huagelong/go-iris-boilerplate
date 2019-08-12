package session

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris/sessions"
	"github.com/kataras/iris/sessions/sessiondb/redis"
	"github.com/pelletier/go-toml"
	"sync"
	"time"
)

var (
	instanceSession *sessions.Sessions
	instanceRedis   *redis.Database
)

func New(c *toml.Tree) *sessions.Sessions {
	if instanceSession != nil {
		return instanceSession
	}

	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if instanceSession != nil {
		return instanceSession
	}

	expires := 6 * time.Hour
	ses := sessions.New(sessions.Config{
		Cookie:       "tsessionid",
		Expires:      expires,
		AllowReclaim: true,
	})

	instanceSession = ses
	redisDb := redisConn(c)
	instanceSession.UseDatabase(redisDb)
	return instanceSession;
}

func redisConn(conf *toml.Tree) *redis.Database {
	if instanceRedis != nil {
		return instanceRedis
	}
	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if instanceRedis != nil {
		return instanceRedis
	}
	golog.Info("session redis created!...")
	db := redis.New(redis.Config{
		Network:     conf.Get("db.redis.network").(string),
		Addr:        conf.Get("db.redis.addr").(string),
		MaxActive:   int(conf.Get("db.redis.maxActive").(int64)),
		Password:    conf.Get("db.redis.password").(string),
		Database:    conf.Get("db.redis.database").(string),
		Prefix:      conf.Get("db.redis.prefix").(string),
	})
	instanceRedis = db;
	//defer instanceRedis.Close()
	//iris.RegisterOnInterrupt(func() {
	//	_ = instanceRedis.Close()
	//})
	return instanceRedis
}
