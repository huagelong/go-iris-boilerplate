package service

import (
	"gitee.com/trensy/duocaiCRM/app/dao"
	"gitee.com/trensy/duocaiCRM/datasource"
	"gitee.com/trensy/duocaiCRM/app/model"
)

type ArticleService interface {
	Get(id int) *model.Article
	Add(title string) *model.Article
}

type articleService struct {
	dao *dao.ArticleDao
	daoRead *dao.ArticleDao
}

func NewArticleService() ArticleService{
	return &articleService{
		dao:dao.NewArticleDao(datasource.InstanceMaster()),
		daoRead:dao.NewArticleDao(datasource.InstanceSlave()),
			}
}


func (s *articleService) Get(id int) *model.Article {
	return s.daoRead.Get(id)
}

func (s *articleService) Add(title string) *model.Article {
	return s.dao.Insert(title)
}