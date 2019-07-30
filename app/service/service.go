package service

import (
	"trensy/app/model"
	"trensy/g"
	"log"
	"time"
)

type ArticleService struct {}

func (s *ArticleService) Get(id int) *model.Article {
	data := &model.Article{Id: id}
	ok,err :=g.DB.Get(data)
	if ok && err == nil {
		return data
	}else{
		data.Id=0
		return data
	}
}

func (s *ArticleService) Add(title string) *model.Article {
	article := &model.Article{
		Title:title,
		Content:title,
		Desc:title,
		IsDelete:0,
		CreatedAt:int(time.Now().Unix()),
		UpdatedAt:int(time.Now().Unix()),
	}
	_, err := g.DB.Insert(article)
	if err != nil {
		log.Fatal("insert error: ", err)
	}
	return article
}