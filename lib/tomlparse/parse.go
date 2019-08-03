package tomlparse

import (
	"github.com/kataras/golog"
	"github.com/pelletier/go-toml"
)


func Config(path string) *toml.Tree {
	config, err := toml.LoadFile(path)
	if err != nil {
		golog.Fatal("TomlError err : "+err.Error())
		return nil
	}
	return config
}