package support

import (
	"crypto/sha1"
	"fmt"
	"github.com/kataras/iris"
)

//sha1加密
func (sp *Support)NewSha1(str string) string {
	hashKey := sp.Conf.Get("system.hashKey").(string)
	h := sha1.New()
	h.Write([]byte(str+hashKey))
	l := fmt.Sprintf("%x", h.Sum(nil))
	return l
}

//中断
func (sp *Support)Exit(ctx iris.Context)  {
	ctx.StopExecution()
	panic("exit")
}
