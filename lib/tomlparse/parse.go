package tomlparse

import (
	"github.com/kataras/golog"
	"github.com/pelletier/go-toml"
	"sync"
)

var (
	configInstance map[string]*toml.Tree
)

func Config(path string) *toml.Tree {
	if configInstance[path] != nil{
		return configInstance[path]
	}
	var lock sync.Mutex
	lock.Lock()
	defer lock.Unlock()

	if configInstance[path] != nil{
		return configInstance[path]
	}
	config, err := toml.LoadFile(path)
	if err != nil {
		golog.Fatal("TomlError err : "+err.Error())
		return nil
	}
	return config
}