package support

import (
	"github.com/pelletier/go-toml"
)

func GetEnv(c *toml.Tree) string{
	//环境变量
	environment := c.Get("system.environment").(string)
	if environment == "" {
		environment = "prod";
	}
	return environment
}


