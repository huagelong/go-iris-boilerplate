package dao

import (
	"github.com/go-xorm/xorm"
	"trensy/lib/boot"
	"trensy/lib/db"
)

type Dao struct {
	App *boot.Bootstrapper
	DB  *xorm.EngineGroup
	DBMaster *xorm.Engine
}

func New(app *boot.Bootstrapper) *Dao {
	return &Dao{
		App:		app,
		DB:			db.New(app.Conf, app.Env).GetGroup(),
		DBMaster:	db.New(app.Conf, app.Env).GetMaster(),
	}
}
