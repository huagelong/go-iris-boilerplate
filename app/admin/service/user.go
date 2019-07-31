package service

import (
	"errors"
	"trensy/app/admin/model"
	"trensy/lib/support"
)


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
