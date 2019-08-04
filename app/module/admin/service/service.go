package service

import (
	"github.com/kataras/iris/sessions"
	"trensy/app/dao"
	"trensy/lib/boot"
	"trensy/lib/redis"
	"trensy/lib/support"
)

type Service struct {
	App     *boot.Bootstrapper
	Dao     *dao.Dao
	Session *sessions.Sessions
	Support *support.Support
	Redis   *redis.Redis
}

func New(app *boot.Bootstrapper, dao *dao.Dao) *Service {
	return &Service{
		App:     app,
		Dao:     dao,
		Session: app.Session,
		Support: app.Support,
		Redis:   app.Redis,
	}
}
