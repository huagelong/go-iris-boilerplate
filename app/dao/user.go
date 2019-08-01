package dao

import (
	"time"
	"trensy/app/model"
)

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

func  (d *Dao)CheckLogin(username, pwd string) *model.User{
	var userModel model.User
	ok,err := d.DB.Where("username=? and passwd=?", username, pwd).Get(&userModel)
	if ok && err == nil {
		return &userModel
	}else{
		userModel.Id=0
		return &userModel
	}
}

//更新token
func (d *Dao) UpdateToken(token string, uid int) bool{
	userModel := &model.User{}
	userModel.IdToken = token
	userModel.UpdatedAt = int(time.Now().Unix())
	_, err := d.DB.ID(uid).Update(userModel)
	if err != nil{
		return false
	}else{
		return true
	}
}

