package service

import (
	"errors"
	"github.com/kataras/iris"
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

//登录检查
func (s *Service) login(username, pwd string) (*model.User, error){
	newPwd := support.NewSha1(pwd, s.Config)
	user := s.Dao.CheckLogin(username, newPwd)
	if user.Id >0 {
		return user, nil
	}else{
		err := errors.New("账户或者密码错误")
		return user,err
	}
}
