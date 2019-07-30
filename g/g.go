package g

import (
	"trensy/datasource"
	"trensy/g/tomlparse"
	"github.com/kataras/golog"
)

var (
	Config = tomlparse.Config()
	DB = datasource.InstanceGroup()
	Log = golog.Default
)
