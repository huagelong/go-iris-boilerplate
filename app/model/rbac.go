package model

import "time"

type Role struct {
	Id        int       `xorm:"not null pk autoincr comment('主键id') INT(11)"`
	Name      string    `xorm:"not null default('') comment('角色名称') VARCHAR(88)"`
	CompanyId int       `xorm:"not null default(0) comment('公司id') INT(11)"`
	DeletedAt time.Time `xorm:"not null default('0000-00-00 00:00:00') index('idx_deleted_at') comment('删除时间') DateTime deleted"`
	UpdatedAt int       `xorm:"not null default(0) comment('更新时间') INT(11)"`
	CreatedAt int       `xorm:"not null default(0) comment('创建时间') INT(11)"`
}

func (m *Role) TableName() string {
	return "t_role"
}

type RoleUser struct {
	Id        int       `xorm:"not null pk autoincr comment('主键id') INT(11)"`
	Uid       int       `xorm:"not null default(0)  comment('用户id') INT(11)"`
	RoleId    int       `xorm:"not null default(0)  comment('角色id') INT(11)"`
	DeletedAt time.Time `xorm:"not null default('0000-00-00 00:00:00') index('idx_deleted_at') comment('删除时间') DateTime deleted"`
	UpdatedAt int       `xorm:"not null default(0) comment('更新时间') INT(11)"`
	CreatedAt int       `xorm:"not null default(0) comment('创建时间') INT(11)"`
}

func (m *RoleUser) TableName() string {
	return "t_role_user"
}

type Access struct {
	Id          int       `xorm:"not null pk autoincr comment('主键id') INT(11)"`
	Name        string    `xorm:"not null default('') comment('权限名称') VARCHAR(88)"`
	ValidateTag string    `xorm:"not null default('') comment('认证标识') VARCHAR(254)"`
	Pid         int       `xorm:"not null default(0)  comment('父id') INT(11)"`
	Sort        int       `xorm:"not null default(0)  comment('排序') INT(11)"`
	DeletedAt   time.Time `xorm:"not null default('0000-00-00 00:00:00') index('idx_deleted_at') comment('删除时间') DateTime deleted"`
	UpdatedAt   int       `xorm:"not null default(0) comment('更新时间') INT(11)"`
	CreatedAt   int       `xorm:"not null default(0) comment('创建时间') INT(11)"`
}

func (m *Access) TableName() string {
	return "t_access"
}

type RoleAccess struct {
	Id        int       `xorm:"not null pk autoincr comment('主键id') INT(11)"`
	AccessId  int       `xorm:"not null default(0)  comment('权限id') INT(11)"`
	RoleId    int       `xorm:"not null default(0)  comment('角色id') INT(11)"`
	DeletedAt time.Time `xorm:"not null default('0000-00-00 00:00:00') index('idx_deleted_at') comment('删除时间') DateTime deleted"`
	UpdatedAt int       `xorm:"not null default(0) comment('更新时间') INT(11)"`
	CreatedAt int       `xorm:"not null default(0) comment('创建时间') INT(11)"`
}

func (m *RoleAccess) TableName() string {
	return "t_role_access"
}
