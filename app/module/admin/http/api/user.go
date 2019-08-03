package api

import (
	"github.com/kataras/iris"
)

type userStruct struct {
	IdToken 	string  `json:"idToken"`
	LoginToken 	string	`json:"token"`
}

type loginStruct struct {
	UserName string `json:"userName"`
	Password string `json:"password"`
}
//检查登录情况
func checkLogin(ctx iris.Context) {
	user := &userStruct{}
	err := ctx.ReadJSON(user)
	if err !=nil{
		srv.Support.ResponseJson(ctx, 500, "参数错误")
	}
	idToken := user.IdToken
	loginToken :=user.LoginToken
	if idToken !="" && loginToken != ""{
		userInfo := srv.GetUserByIdToken(idToken)
		if userInfo.Id ==0 {
			srv.Support.ResponseJson(ctx, 9527, "你没有访问权限，请重新登录")
		}
		if userInfo.LoginToken != loginToken{
			srv.SetLogout(ctx)
			srv.Support.ResponseJson(ctx, 9527, "你的账号已经在其他地方登录，你被踢出，请重新登录")
		}
	}
	srv.Support.ResponseJson(ctx, 200, "认证成功！")
}

//登录处理
func login(ctx iris.Context) {
	login := &loginStruct{}
	err := ctx.ReadJSON(login)

	if err !=nil{
		 srv.Support.ResponseJson(ctx, 500, "参数错误!")
	}

	if login.UserName == "" {
		 srv.Support.ResponseJson(ctx, 500, "账户不能为空!")
	}

	if login.Password == "" {
		srv.Support.ResponseJson(ctx, 500, "密码不能为空!")
	}

	userModel,loginerr := srv.Login(login.UserName, login.Password)

	if loginerr !=nil{
		srv.Support.ResponseJson(ctx, 500, loginerr.Error())
	}
	uid := userModel.Id
	if uid >0 {
		//设置session
		srv.SetLogin(uid, ctx)
		loginData :=make(map[string]interface{})

		token := srv.CreateUUId()
		if ok := srv.UpdateLoginToken(token, uid);!ok{
			srv.Support.ResponseJson(ctx, 500, "token 更新失败，请重试")
		}
		loginData["idToken"] = userModel.IdToken
		loginData["token"] = token
		srv.Support.ResponseJson(ctx, 200, "登录成功!", loginData)
	}else{
		srv.Support.ResponseJson(ctx, 500, "账号或者密码错误!")
	}
}