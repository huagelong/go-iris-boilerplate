package utils

import "os"

func GetEnv() string{
	//环境变量
	environment := os.Getenv("environment")
	if environment == "" {
		environment = "prod";
	}
	return environment
}