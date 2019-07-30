package support

import "trensy/g/tomlparse"

func GetEnv() string{
	//环境变量
	environment := tomlparse.Config().Get("system.environment").(string)
	if environment == "" {
		environment = "prod";
	}
	return environment
}


