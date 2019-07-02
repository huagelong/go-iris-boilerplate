package dao

import (
	"gitee.com/trensy/duocaiCRM/models"
	"github.com/go-xorm/xorm"
)

type ArticleDao struct {
	engine *xorm.Engine
}

func NewArticleDao(engine *xorm.Engine) *ArticleDao{
	return &ArticleDao{
		engine:engine}
}

func (dao *ArticleDao) Get(id int) *models.ArticleModel {
	data := &models.ArticleModel{Id: id}
	ok,err :=dao.engine.Get(data)
	if ok && err == nil {
		return data
	}else{
		data.Id=0
		return data
	}
}

