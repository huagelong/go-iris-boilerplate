package g

import (
	"trensy/g/db"
	"trensy/g/session"
	"trensy/g/tomlparse"
	"github.com/kataras/golog"
)

var (
	Config = tomlparse.Config()
	DB = db.InstanceMysqlGroup()
	Log = golog.Default
	Session = session.InstanceSession()
)
