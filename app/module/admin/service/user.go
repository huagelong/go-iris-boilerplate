package service

import (
	"errors"
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"github.com/rs/xid"
	"trensy/app/model"
	"trensy/lib/support"
)

//登录设置session
func (s *Service) SetLogin(uid int, ctx iris.Context){
	s.Session.Start(ctx).Set(LOGIN_SESSION_KEY, uid)
}

//退出
func (s *Service) SetLogout(ctx iris.Context){
	s.Session.Start(ctx).Delete(LOGIN_SESSION_KEY)
}

//获取用户信息
func (s *Service) GetUserInfo(uid int) *model.User{
	user := s.Dao.GetUserById(uid)
	return user
}

//获取token
func (s *Service) CreateUUId() string  {
	guid := xid.New()
	token := guid.String()
	return token
}

//更新token
func (s * Service) UpdateLoginToken(token string , uid int) bool {
	return s.Dao.UpdateToken(token, uid);
}

//登录检查
func (s *Service) Login(username, pwd string) (*model.User, error){
	newPwd := support.NewSha1(pwd, s.Config)
	user := s.Dao.CheckLogin(username, newPwd)
	golog.Info(user)
	if user.Id >0 {
		return user, nil
	}else{
		err := errors.New("账户或者密码错误")
		return user,err
	}
}
