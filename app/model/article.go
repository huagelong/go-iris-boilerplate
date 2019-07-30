package model

type Article struct {
	Id				int		`xorm:"not null pk autoincr comment('主键id') INT(11)" form:"id"`
	Title			string	`xorm:"not null comment('标题') VARCHAR(50)" form:"title"`
	Desc			string	`xorm:"not null comment('描述') VARCHAR(200)" form:"desc"`
	Content			string	`xorm:"not null comment('内容') TEXT" form:"content"`
	IsDelete		int		`xorm:"not null default 0 comment('是否删除,1-删除，0-未删除') INT(1)" form:"is_delete"`
	CreatedAt		int		`xorm:"not null comment('创建时间') INT(11)" form:"created_at"`
	UpdatedAt		int	`xorm:"not null comment('修改时间') INT(11)" form:"updated_at"`
}
