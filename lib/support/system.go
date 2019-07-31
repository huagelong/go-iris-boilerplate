package support

import (
	"crypto/sha1"
	"fmt"
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

//sha1加密
func NewSha1(str string, conf *toml.Tree) string {
	hashKey := conf.Get("system.hashKey").(string)
	h := sha1.New()
	h.Write([]byte(str+hashKey))
	l := fmt.Sprintf("%x", h.Sum(nil))
	return l
}
