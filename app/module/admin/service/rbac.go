package service

import (
	"time"
	"trensy/app/model"
)

//添加access
func (s *Service)AddAccess(name, validateTag string , pid ,sort int) error {
	access := &model.Access{}
	access.Name = name
	access.ValidateTag= validateTag
	access.Pid = pid
	access.Sort = sort
	access.CreatedAt = int(time.Now().Unix())
	access.UpdatedAt = int(time.Now().Unix())
	affected, err := s.DB.Insert(access)

	if affected==0 && err !=nil{
		return err
	}
	return nil;
}
//更新 access
func (s *Service)UpdateAccess(id int, access model.Access) error {
	access.UpdatedAt = int(time.Now().Unix())
	_, err := s.DB.Id(id).Update(access)
	if err!=nil{
		return err
	}
	return nil
}

type AccessGroup struct {
	Access model.Access
	Child []model.Access
}

//获取所有access，按照分组排序
func (s *Service)GetAllAccess() map[int]AccessGroup {
	allAccess := make([]model.Access, 0)
	err := s.DB.OrderBy("sort ASC").Find(&allAccess)
	if err !=nil {
		return nil
	}
	//prePid := 0
	result := make(map[int]AccessGroup)
	for _, v := range allAccess  {
		if v.Pid == 0 {
			groupP := &AccessGroup{}
			groupP.Access = v
			result[v.Id] = *groupP
		}
	}
	//找到对应的子数据
	for _, vc := range allAccess  {
		if _,ok := result[vc.Pid];ok{
			result[vc.Pid].Child[vc.Id] = vc
		}
	}
	return result
}

//软删除权限
func (s *Service)DelAccess(id int) error {
	access :=&model.Access{}
	_,err := s.DB.Id(id).Delete(access)
	if err !=nil{
		return err
	}
	return nil
}

//添加角色
func (s *Service)AddRole(name string,companyid int) error {
	role := &model.Role{}
	role.Name = name
	role.CompanyId = companyid
	role.CreatedAt = int(time.Now().Unix())
	role.UpdatedAt = int(time.Now().Unix())
	affected, err := s.DB.Insert(role)
	if affected==0 && err !=nil{
		return err
	}
	return nil;
}

//更新角色
func (s *Service)UpdateRole(id int, name string) error{
	role := &model.Role{}
	role.Name = name
	role.UpdatedAt = int(time.Now().Unix())
	_, err := s.DB.Id(id).Update(role)
	if err!=nil{
		return err
	}
	return nil
}

//删除角色
func (s *Service)DelRole(id int) error {
	role :=&model.Role{}
	_,err := s.DB.Id(id).Delete(role)
	if err !=nil{
		return err
	}
	return nil
}

//批量绑定角色和权限,先清空，后绑定
func (s *Service)BindRoleAccess(accessId []int, roleId int) error {
	roleAccessGroup :=make([]model.RoleAccess,1)
	for k,v:=range accessId{
		roleAccess := &model.RoleAccess{}
		roleAccess.AccessId = v
		roleAccess.RoleId = roleId
		roleAccess.UpdatedAt = int(time.Now().Unix())
		roleAccess.CreatedAt = int(time.Now().Unix())
		roleAccessGroup[k] = *roleAccess
	}
	affected, err := s.DB.Insert(roleAccessGroup)
	if affected==0 && err !=nil{
		return err
	}
	return nil;
}

//绑定用户和角色,先清空，后绑定
func (s *Service)BindRoleUser(roleId []int,uid int) error {
	roleUserGroup := make([]model.RoleUser,1)
	for k,v:=range roleId{
		roleUser := &model.RoleUser{}
		roleUser.RoleId=v
		roleUser.Uid=uid
		roleUser.UpdatedAt = int(time.Now().Unix())
		roleUser.CreatedAt = int(time.Now().Unix())
		roleUserGroup[k] = *roleUser
	}
	affected, err := s.DB.Insert(roleUserGroup)
	if affected==0 && err !=nil{
		return err
	}
	return nil;
}

//获取用户绑定的角色
func (s *Service)GetUserRoles(uid int) ([]model.Role, error) {
	roleUser := make([]model.RoleUser,1)
	err := s.DB.Where("uid=?", uid).Find(&roleUser)
	if err !=nil{
		return nil, err
	}

	var roleIds []int
	for _,v:=range roleUser{
		roleIds = append(roleIds, v.RoleId)
	}

	role := make([]model.Role, 0)
	errrole := s.DB.Where("id in (?)", roleIds).Find(&role)
	if errrole != nil{
		return nil, errrole
	}
	return role, nil
}

//获取角色绑定的权限
func (s *Service)GetRoleAccess(roleId int) ([]int, error)  {
	roleAccess := make([]model.RoleAccess,1)
	err :=s.DB.Where("role_id=?", roleId).Find(&roleAccess)
	if err !=nil{
		return nil, err
	}
	var accessIds []int
	for _,v:=range roleAccess{
		accessIds = append(accessIds, v.AccessId)
	}
	return accessIds, err
}




