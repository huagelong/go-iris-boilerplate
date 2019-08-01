package api

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"trensy/lib/support"
)

type userStruct struct {
	UserId int  `json:"userId"`
}

type loginStruct struct {
	UserName string `json:"userName"`
	Password string `json:"password"`
}

func checkLogin(ctx iris.Context)  {
	user := &userStruct{}
	ctx.ReadJSON(user)
	golog.Info("logout:",user)
	support.ResponseJson(ctx, 200, "没有权限")
}

func login(ctx iris.Context) {
	login := &loginStruct{}
	err := ctx.ReadJSON(login)
	if err !=nil{
		support.ResponseJson(ctx, 500, "参数错误!")
		return
	}

	if login.UserName == "" {
		support.ResponseJson(ctx, 500, "账户不能为空!")
		return
	}

	if login.Password == "" {
		support.ResponseJson(ctx, 500, "密码不能为空!")
		return
	}

	userModel,loginerr := srv.Login(login.UserName, login.Password)

	if loginerr !=nil{
		support.ResponseJson(ctx, 500, loginerr.Error())
		return
	}
	uid := userModel.Id
	if uid >0 {
		//设置session
		srv.SetLogin(uid, ctx)
		loginData :=make(map[string]interface{})

		token := srv.CreateUUId()
		if ok := srv.UpdateLoginToken(token, uid);!ok{
			support.ResponseJson(ctx, 500, "token 更新失败，请重试")
			return
		}
		loginData["userId"] = uid
		loginData["token"] = token
		support.ResponseJson(ctx, 200, "登录成功!", loginData)
		return
	}else{
		support.ResponseJson(ctx, 500, "账号或者密码错误!")
		return
	}
}