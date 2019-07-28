package utils

import (
	"gitee.com/trensy/duocaiCRM/g"
)

func GetEnv() string{
	//环境变量
	environment := g.Config.Get("system.environment").(string)
	if environment == "" {
		environment = "prod";
	}
	return environment
}