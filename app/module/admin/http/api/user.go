package api

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"trensy/lib/support"
)

type userStruct struct {
	IdToken 	string  `json:"idToken"`
	LoginToken 	string	`json:"token"`
}

type loginStruct struct {
	UserName string `json:"userName"`
	Password string `json:"password"`
}

func checkLogin(ctx iris.Context) {
	user := &userStruct{}
	ctx.ReadJSON(user)

	uid:=srv.GetSessionUid(ctx)
	if uid == 0{
		support.ResponseJson(ctx, 500, "你的登录已失效，请重新登录")
		return
	}

	idToken := user.IdToken
	loginToken :=user.LoginToken
	if idToken !="" && loginToken != ""{
		userInfo := srv.GetUserByIdToken(idToken)
		if userInfo.Id ==0 {
			support.ResponseJson(ctx, 500, "你没有访问权限，请重新登录")
			return
		}
		golog.Info(userInfo.LoginToken, loginToken)
		if userInfo.LoginToken != loginToken{
			srv.SetLogout(ctx)
			support.ResponseJson(ctx, 500, "你的账号已经在其他地方登录，你被踢出，请重新登录")
			return
		}
	}

	support.ResponseJson(ctx, 200, "认证成功！")
}

func login(ctx iris.Context) {
	login := &loginStruct{}
	err := ctx.ReadJSON(login)
	if err !=nil{
		 support.ResponseJson(ctx, 500, "参数错误!")
	}

	if login.UserName == "" {
		 support.ResponseJson(ctx, 500, "账户不能为空!")
	}

	if login.Password == "" {
		support.ResponseJson(ctx, 500, "密码不能为空!")
	}

	userModel,loginerr := srv.Login(login.UserName, login.Password)

	if loginerr !=nil{
		support.ResponseJson(ctx, 500, loginerr.Error())
	}
	uid := userModel.Id
	if uid >0 {
		//设置session
		srv.SetLogin(uid, ctx)
		loginData :=make(map[string]interface{})

		token := srv.CreateUUId()
		if ok := srv.UpdateLoginToken(token, uid);!ok{
			support.ResponseJson(ctx, 500, "token 更新失败，请重试")
		}
		loginData["idToken"] = userModel.IdToken
		loginData["token"] = token
		support.ResponseJson(ctx, 200, "登录成功!", loginData)
	}else{
		support.ResponseJson(ctx, 500, "账号或者密码错误!")
	}
}