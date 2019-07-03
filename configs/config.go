package configs

import(
	"github.com/pelletier/go-toml"
	"log"
)


var Conf = New()
/**
 * 返回单例实例
 * @method New
 */
func New() *toml.Tree {
	config, err := toml.LoadFile("./resources/configs/config.toml")

	if err != nil {
		log.Fatal("TomlError ", err)
		return nil
	}

	return config
}