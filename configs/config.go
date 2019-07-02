package configs

import(
	"github.com/pelletier/go-toml"
	"log"
)

//type  AppConfig struct{
//	CookieHashKey string `yaml:"cookieHashKey"`
//	CookieBlockKey string `yaml:"cookieBlockKey"`
//}

var Conf = New()
/**
 * 返回单例实例
 * @method New
 */
func New() *toml.Tree {
	config, err := toml.LoadFile("./configs/config.toml")

	if err != nil {
		log.Fatal("TomlError ", err)
		return nil
	}

	return config
}