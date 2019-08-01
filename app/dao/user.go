package dao

import (
	"time"
	"trensy/app/model"
)

func (d *Dao) GetUserByIdToken(idtoken string) *model.User {
	var userModel model.User
	ok,err := d.DB.Select("*").Where("id_token=?", idtoken).Get(&userModel)
	if ok && err == nil {
		return &userModel
	}else{
		userModel.Id=0
		return &userModel
	}
}

func (d *Dao) GetUserById(uid int) *model.User{
	var userModel model.User
	ok,err := d.DB.Where("id=?", uid).Get(&userModel)
	if ok && err == nil {
		return &userModel
	}else{
		userModel.Id=0
		return &userModel
	}
}

func  (d *Dao)CheckLogin(username, pwd string) (*model.User, error){
	userModel := &model.User{}
	ok,err := d.DB.Select("*").Where("username=? and passwd=?", username, pwd).Get(userModel)
	if ok && err == nil {
		return userModel, nil
	}else{
		userModel.Id=0
		return userModel, err
	}
}

//更新token
func (d *Dao) UpdateLoginToken(token string, uid int) bool{
	userModel := &model.User{}
	userModel.LoginToken = token
	userModel.LastLoginTime = int(time.Now().Unix())
	userModel.UpdatedAt = int(time.Now().Unix())
	_, err := d.DB.ID(uid).Update(userModel)
	if err != nil{
		return false
	}else{
		return true
	}
}

