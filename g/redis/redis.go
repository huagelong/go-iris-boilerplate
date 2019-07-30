package redis

import (
	"github.com/gomodule/redigo/redis"
	"github.com/kataras/golog"
	"strconv"
	"sync"
	"time"
	"trensy/g/tomlparse"
)

type Redis struct {
	Network	  string
	Connect   string //连接字符串
	Db        int    //数据库
	Maxidle   int    //最大空闲连接数，表示即使没有redis连接时依然可以保持N个空闲的连接，而不被清除，随时处于待命状态
	Maxactive int    //最大的激活连接数，表示同时最多有N个连接
	IdleTimeout int
}

var (
	r    *Redis
	redisClient *redis.Pool
)
/**
 * 返回单例实例
 * @method New
 */
func InstanceRedis() *Redis {
	if r != nil{
		return r
	}
	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if r != nil{
		return r
	}

	conf :=tomlparse.Config()
	connect := conf.Get("db.redis.addr").(string)
	db, _ := strconv.Atoi(conf.Get("db.redis.database").(string))
	maxidle:=int(conf.Get("db.redis.maxIdle").(int64))
	maxactive:=int(conf.Get("db.redis.maxActive").(int64))
	idleTimeout:=int(conf.Get("db.redis.idleTimeout").(int64))
	network := conf.Get("db.redis.network").(string)
	instanceRedis := &Redis{Network:network,Connect: connect, Db: db, Maxidle:maxidle, Maxactive:maxactive, IdleTimeout:idleTimeout}
	r = instanceRedis
	setPoll()
	return r
}

/**
 * 公共方法
 */
/**
 * 设置连接池
 * @method setPoll
 */
func setPoll() {
	redisClient = &redis.Pool{
		MaxIdle: r.Maxidle,
		MaxActive: r.Maxactive,
		IdleTimeout: time.Duration(r.IdleTimeout)*time.Second,
		Dial: func() (redis.Conn, error) {//建立连接
			c, err := redis.Dial(r.Network, r.Connect)
			if err != nil {
				golog.Fatal("redis.pool", err)
			}
			_, errping :=c.Do("PING", r.Db)
			if errping != nil {
				golog.Fatal("got err when ping redis: ", errping)
			}
			return c, nil
		},
		//是否在从池中取出连接前进行检验,如果检验失败,则从池中去除连接并尝试取出另一个
		TestOnBorrow: func(c redis.Conn, t time.Time) error {
			if time.Since(t) < time.Minute {
				return nil
			}
			_, err := c.Do("PING")
			return err
		},
	}
}

/**
 * 执行基本命令
 * @method func
 * @param  {[type]} n *Neo4j        [description]
 * @return {[type]}   [description]
 */
func (n *Redis) Do(cmd string, args ...interface{}) (interface{}, error) {
	conn := redisClient.Get()
	defer conn.Close()
	return conn.Do(cmd, args...)
}

/**
 * 设置键值对, ex单位是秒
 * @method func
 * @param  {[type]} n *Redis        [description]
 * @return {[type]}   [description]
 */
func (n *Redis) SetString(key string, value string, ex string) (interface{}, error) {
	conn := redisClient.Get()
	defer conn.Close()
	return conn.Do("SET", key, value, "EX", ex)
}
/**
 * 获取键的值
 * @method func
 * @param  {[type]} n *Redis        [description]
 * @return {[type]}   [description]
 */
func (n *Redis) GetString(key string) (string, error) {
	conn := redisClient.Get()
	defer conn.Close()
	value, err := redis.String(conn.Do("GET", key))
	return value, err
}