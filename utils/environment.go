package utils

import (
	"gitee.com/trensy/duocaiCRM/configs"
)

func GetEnv() string{
	//环境变量
	environment := configs.Conf.Get("system.environment").(string)
	if environment == "" {
		environment = "prod";
	}
	return environment
}