package service

import (
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/sessions"
	"trensy/lib/boot"
	"trensy/lib/redis"
	"trensy/lib/support"
)

type Service struct {
	App      *boot.Bootstrapper
	Session  *sessions.Sessions
	Support  *support.Support
	Redis    *redis.Redis
	DB       *xorm.EngineGroup
	DBMaster *xorm.Engine
}

func New(app *boot.Bootstrapper) *Service {
	return &Service{
		App:      app,
		Session:  app.Session,
		Support:  app.Support,
		Redis:    app.Redis,
		DB:       app.DB.GetGroup(),
		DBMaster: app.DB.GetMaster(),
	}
}


