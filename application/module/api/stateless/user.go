package stateless

type userStruct struct {
	IdToken    string `json:"idToken"`
	LoginToken string `json:"token"`
}

type loginStruct struct {
	UserName string `json:"userName"`
	Password string `json:"password"`
}

//检查登录情况
func (c *Controller) PostChecklogin() {
	user := &userStruct{}
	err := c.Ctx.ReadJSON(user)
	if err != nil {
		c.ResponseJson(c.Ctx, 500, "参数错误")
		return
	}
	idToken := user.IdToken
	loginToken := user.LoginToken
	if idToken != "" && loginToken != "" {
		userInfo := c.Service.GetUserByIdToken(idToken)
		if userInfo.Id == 0 {
			c.ResponseJson(c.Ctx, 403, "你没有访问权限，请重新登录！")
			return
		}
		if userInfo.LoginToken != loginToken {
			c.Service.SetLogout(c.Ctx)
			c.ResponseJson(c.Ctx, 403, "你的账号已经在其他地方登录，你被踢出，请重新登录")
			return
		}
	}
	c.ResponseJson(c.Ctx, 200, "认证成功！")
}

//登录处理
func (c *Controller) PostLogin() {
	login := &loginStruct{}
	err := c.Ctx.ReadJSON(login)

	if err != nil {
		c.ResponseJson(c.Ctx, 500, "参数错误!")
		return
	}

	if login.UserName == "" {
		c.ResponseJson(c.Ctx, 500, "账户不能为空!")
		return
	}

	if login.Password == "" {
		c.ResponseJson(c.Ctx, 500, "密码不能为空!")
		return
	}

	userModel, loginerr := c.Service.Login(login.UserName, login.Password)

	if loginerr != nil {
		c.ResponseJson(c.Ctx, 500, loginerr.Error())
		return
	}
	uid := userModel.Id
	if uid > 0 {
		//设置session
		c.Service.SetLogin(uid, c.Ctx)
		loginData := make(map[string]interface{})

		token := c.Service.CreateUUId()
		if ok := c.Service.UpdateLoginToken(token, uid); !ok {
			c.ResponseJson(c.Ctx, 500, "token 更新失败，请重试")
			return
		}

		loginData["idToken"] = userModel.IdToken
		loginData["token"] = token
		//c.App.Logger().Info(loginData)
		c.ResponseJson(c.Ctx, 200, "登录成功!", loginData)
	} else {
		c.ResponseJson(c.Ctx, 500, "账号或者密码错误!")
	}
}
