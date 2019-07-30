package service

import (
	"gitee.com/trensy/duocaiCRM/app/model"
	"gitee.com/trensy/duocaiCRM/datasource"
	"log"
	"time"
)

type articleService struct {}

func (s *articleService) Get(id int) *model.Article {
	data := &model.Article{Id: id}
	ok,err :=datasource.Db.Get(data)
	if ok && err == nil {
		return data
	}else{
		data.Id=0
		return data
	}
}

func (s *articleService) Add(title string) *model.Article {
	article := &model.Article{
		Title:title,
		Content:title,
		Desc:title,
		IsDelete:0,
		CreatedAt:int(time.Now().Unix()),
		UpdatedAt:int(time.Now().Unix()),
	}
	_, err := datasource.Db.Insert(article)
	if err != nil {
		log.Fatal("insert error: ", err)
	}
	return article
}