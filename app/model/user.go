package model

import "time"

type User struct {
	Id					int 		`xorm:"not null pk autoincr comment('主键id') INT(11)" form:"id"`
	IdToken				string		`xorm:"not null default('') index('idx_idtoken_logintoken') unique comment('id 唯一token,对外') VARCHAR(88)" form:"idtoken"`
	Username			string		`xorm:"not null default('') unique comment('标题') VARCHAR(88)" form:"username"`
	CompanyId			int 		`xorm:"not null default(0) comment('公司id') INT(11)" form:"company_id"`
	DisplayName			string		`xorm:"not null default('') unique comment('昵称') VARCHAR(100)" form:"display_name"`
	FaceImg				string		`xorm:"not null default('') comment('头像') VARCHAR(250)" form:"face_img"`
	Passwd				string		`xorm:"not null default('') comment('密码') VARCHAR(250)" form:"passwd"`
	IsLock				int			`xorm:"not null default(0) comment('是否已锁定') INT(1)" form:"is_lock"`
	LastLoginTime		int			`xorm:"not null default(0) comment('上次登录时间') INT(11)" form:"last_login_time"`
	LoginToken			string		`xorm:"not null default('') index('idx_idtoken_logintoken') unique comment('登录token') VARCHAR(250)" form:"login_token"`
	ReportUid			int			`xorm:"not null default(0) index('idx_report_uid') comment('上级uid') INT(11)" form:"report_uid"`
	DeletedAt			time.Time	`xorm:"not null default(0) comment('删除时间') DateTime deleted" form:"deleted_at"`
	UpdatedAt			int			`xorm:"not null default(0) comment('更新时间') INT(11)" form:"updated_at"`
	CreatedAt			int			`xorm:"not null default(0) comment('创建时间') INT(11)" form:"created_at"`
}

func (m *User) TableName() string  {
	return "t_user"
}
