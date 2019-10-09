package service

import (
	"github.com/kataras/iris"
	"github.com/rs/xid"
	"time"
	"trensy/application/model"
	"trensy/application/constdata"
)

//通过idToken 获取用户信息
func (s *Service) GetUserByIdToken(idToken string) *model.User {
	var userModel model.User
	ok, err := s.DB.Select("*").Where("id_token=?", idToken).Get(&userModel)
	if ok && err == nil {
		return &userModel
	} else {
		userModel.Id = 0
		return &userModel
	}
}

//登录设置session
func (s *Service) SetLogin(uid int, ctx iris.Context) {
	s.Session.Start(ctx).Set(constdata.LOGIN_SESSION_KEY, uid)
}

//获取session数据
func (s *Service) GetSessionUid(ctx iris.Context) int {
	uid, err := s.Session.Start(ctx).GetInt(constdata.LOGIN_SESSION_KEY)
	if err != nil {
		return 0
	}
	return uid
}

//退出
func (s *Service) SetLogout(ctx iris.Context) {
	s.Session.Start(ctx).Delete(constdata.LOGIN_SESSION_KEY)
}

//获取用户信息
func (s *Service) GetUserInfo(uid int) *model.User {
	var userModel model.User
	ok, err := s.DB.Where("id=?", uid).Get(&userModel)
	if ok && err == nil {
		return &userModel
	} else {
		userModel.Id = 0
		return &userModel
	}
}

//获取token
func (s *Service) CreateUUId() string {
	guid := xid.New()
	token := guid.String()
	return token
}

//更新token
func (s *Service) UpdateLoginToken(token string, uid int) bool {
	userModel := &model.User{}
	userModel.LoginToken = token
	userModel.LastLoginTime = int(time.Now().Unix())
	userModel.UpdatedAt = int(time.Now().Unix())
	_, err := s.DB.ID(uid).Update(userModel)
	if err != nil {
		return false
	} else {
		return true
	}
}

//登录检查
func (s *Service) Login(username, pwd string) (*model.User, error) {
	newPwd := s.Support.NewSha1(pwd)
	user, err := s.CheckLogin(username, newPwd)
	if user.Id > 0 && err == nil {
		return user, nil
	} else {
		return user, err
	}
}

//检查登录处理
func (s *Service) CheckLogin(username, pwd string) (*model.User, error) {
	userModel := &model.User{}
	ok, err := s.DB.Select("*").Where("username=? and passwd=?", username, pwd).Get(userModel)
	if ok && err == nil {
		return userModel, nil
	} else {
		userModel.Id = 0
		return userModel, err
	}
}
