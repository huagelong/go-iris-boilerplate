package service

import (
	"github.com/kataras/iris"
	"github.com/pelletier/go-toml"
	"github.com/rs/xid"
	"trensy/app/model"
)

//通过idToken 获取用户信息
func (s *Service)GetUserByIdToken(idToken string) *model.User{
	return s.Dao.GetUserByIdToken(idToken)
}

//登录设置session
func (s *Service) SetLogin(uid int, ctx iris.Context){
	s.Session.Start(ctx).Set(LOGIN_SESSION_KEY, uid)
}

//获取session数据
func (s *Service)GetSessionUid(ctx iris.Context) int {
	uid,err:=s.Session.Start(ctx).GetInt(LOGIN_SESSION_KEY)
	if err != nil{
		return 0
	}
	return uid
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
	return s.Dao.UpdateLoginToken(token, uid)
}

//登录检查
func (s *Service) Login(username, pwd string) (*model.User, error){
	newPwd := s.Support.NewSha1(pwd)
	user ,err:= s.Dao.CheckLogin(username, newPwd)
	if user.Id >0 && err==nil {
		return user, nil
	}else{
		return user,err
	}
}

//rbac 权限处理
func (s *Service)  CasbinRBAC(conf *toml.Tree){

}
