package dao

import (
	"github.com/go-xorm/xorm"
	"github.com/pelletier/go-toml"
	"trensy/boot"
	"trensy/lib/db"
	"trensy/lib/redis"
)

type Dao struct {
	App *boot.Bootstrapper
	Config *toml.Tree
	DB  *xorm.EngineGroup
	Redis *redis.Redis
}

func New(c *toml.Tree, app *boot.Bootstrapper) *Dao {
	return &Dao{
		App:		app,
		Config: 	c,
		DB:     	db.InstanceMysqlGroup(c),
		Redis:  	redis.InstanceRedis(c),
	}
}
