package g

import (
	"gitee.com/trensy/duocaiCRM/datasource"
	"gitee.com/trensy/duocaiCRM/g/tomlparse"
)

var (
	Config = tomlparse.Config()
	DB = datasource.InstanceGroup()
)


func GetEnv() string{
	//环境变量
	environment := Config.Get("system.environment").(string)
	if environment == "" {
		environment = "prod";
	}
	return environment
}

