package model

import (
	"time"
)

type User struct {
	Id            int       `xorm:"not null pk autoincr comment('主键id') INT(11)"`
	IdToken       string    `xorm:"not null default('') index('idx_idtoken_logintoken') unique comment('id 唯一token,对外') VARCHAR(88)"`
	Username      string    `xorm:"not null default('') unique comment('标题') VARCHAR(88)"`
	CompanyId     int       `xorm:"not null default(0) comment('公司id') INT(11)"`
	DisplayName   string    `xorm:"not null default('') unique comment('昵称') VARCHAR(100)"`
	FaceImg       string    `xorm:"not null default('') comment('头像') VARCHAR(250)"`
	Passwd        string    `xorm:"not null default('') comment('密码') VARCHAR(250)"`
	IsLock        int       `xorm:"not null default(0) comment('是否已锁定') INT(1)"`
	LastLoginTime int       `xorm:"not null default(0) comment('上次登录时间') INT(11)"`
	LoginToken    string    `xorm:"not null default('') index('idx_idtoken_logintoken') unique comment('登录token') VARCHAR(250)"`
	ReportUid     int       `xorm:"not null default(0) index('idx_report_uid') comment('上级uid') INT(11)"`
	DeletedAt     time.Time `xorm:"not null default('0000-00-00 00:00:00') index('idx_deleted_at') comment('删除时间') DateTime deleted"`
	UpdatedAt     int       `xorm:"not null default(0) comment('更新时间') INT(11)"`
	CreatedAt     int       `xorm:"not null default(0) comment('创建时间') INT(11)"`
}

func (m *User) TableName() string {
	return "t_user"
}



