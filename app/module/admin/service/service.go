package service

import (
	"github.com/kataras/iris/sessions"
	"github.com/pelletier/go-toml"
	"trensy/app/dao"
	"trensy/lib/boot"
	"trensy/lib/session"
)

type Service struct {
	App *boot.Bootstrapper
	Config *toml.Tree
	Dao *dao.Dao
	Session *sessions.Sessions
}

func New(c *toml.Tree, app *boot.Bootstrapper) *Service {
	return &Service{
		App:		app,
		Config:  	c,
		Dao:     	dao.New(c, app),
		Session: 	session.InstanceSession(c),
	}
}

