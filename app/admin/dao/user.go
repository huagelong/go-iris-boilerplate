package dao

import "trensy/app/admin/model"

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

