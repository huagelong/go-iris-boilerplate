package support

import (
	"github.com/kataras/iris"
)

// 标准返回结果数据结构封装。
// 返回固定数据结构的JSON:
// err:  错误码(0:成功, 1:失败, >1:错误码);
// msg:  请求结果信息;
// data: 请求结果,根据不同接口返回结果的数据结构不同;
func ResponseJson(ctx iris.Context, status int, msg string, data ...interface{}) {
	responseData := interface{}(nil)
	if len(data) > 0 {
		responseData = data[0]
	}

	mapData:= iris.Map{
		"status":	status,
		"msg": 		msg,
		"data":		responseData,
	}
	ctx.JSON(mapData)
	return
}
