package model

import "time"

type Menu struct {
	Id        int       `xorm:"not null pk autoincr comment('主键id') INT(11)"`
	Name      string    `xorm:"not null default('') comment('导航名称') VARCHAR(88)"`
	Url       string    `xorm:"not null default('') comment('认证标识') VARCHAR(254)"`
	Pid       int       `xorm:"not null default(0)  comment('父id') INT(11)"`
	Sort      int       `xorm:"not null default(0)  comment('排序') INT(11)"`
	Style     string    `xorm:"not null default('') comment('样式') VARCHAR(88)"`
	DeletedAt time.Time `xorm:"not null default('0000-00-00 00:00:00') index('idx_deleted_at') comment('删除时间') DateTime deleted"`
	UpdatedAt int       `xorm:"not null default(0) comment('更新时间') INT(11)"`
	CreatedAt int       `xorm:"not null default(0) comment('创建时间') INT(11)"`
}

func (m *Menu) TableName() string {
	return "t_menu"
}
