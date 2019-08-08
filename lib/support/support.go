package support

import (
	"github.com/pelletier/go-toml"
)

type Support struct {
	Conf *toml.Tree
}

func New(conf *toml.Tree) *Support {
	return &Support{Conf: conf}
}
