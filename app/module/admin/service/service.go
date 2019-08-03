package service

import (
	"github.com/kataras/iris/sessions"
	"trensy/app/dao"
	"trensy/lib/boot"
	"trensy/lib/support"
	"trensy/lib/session"
	"trensy/lib/redis"
)

type Service struct {
	App *boot.Bootstrapper
	Dao *dao.Dao
	Session *sessions.Sessions
	Support *support.Support
	Redis 	*redis.Redis
}

func New(app *boot.Bootstrapper) *Service {
	return &Service{
		App:		app,
		Dao:     	dao.New(app),
		Session:	session.New(app.Conf),
		Support:	app.Support,
		Redis:	redis.New(app.Conf),
	}
}

