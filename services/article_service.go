package services

import (
	"gitee.com/trensy/duocaiCRM/dao"
	"gitee.com/trensy/duocaiCRM/datasource"
	"gitee.com/trensy/duocaiCRM/models"
)

type ArticleService interface {
	Get(id int) *models.Article
	Add(title string) *models.Article
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


func (s *articleService) Get(id int) *models.Article {
	return s.daoRead.Get(id)
}

func (s *articleService) Add(title string) *models.Article {
	return s.dao.Insert(title)
}