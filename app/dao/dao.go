package dao

import (
	"github.com/go-xorm/xorm"
	"trensy/lib/boot"
)

type Dao struct {
	App *boot.Bootstrapper
	DB  *xorm.EngineGroup
	DBMaster *xorm.Engine
}

func New(app *boot.Bootstrapper) *Dao {
	return &Dao{
		App:		app,
		DB:			app.DB.GetGroup(),
		DBMaster:	app.DB.GetMaster(),
	}
}
