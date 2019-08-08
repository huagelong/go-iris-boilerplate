package view

import (
	"github.com/kataras/iris/view"
	"github.com/pelletier/go-toml"
)

func New(engine *view.DjangoEngine, c *toml.Tree) {
	list := funclist()
	for k, v := range list {
		engine.AddFunc(k, v)
	}
	//filter := filterlist()
	//for fk,fv :=range filter{
	//	engine.RegisterFilter(fk, fv)
	//}
}

func funclist() map[string]interface{} {
	list := make(map[string]interface{})
	//todo

	return list;
}
