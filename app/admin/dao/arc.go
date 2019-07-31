package dao

import (
	"log"
	"time"
	"trensy/app/admin/model"
)

func (d *Dao) GetArc(id int) *model.Article{
	data := &model.Article{Id: id}
	ok,err :=d.DB.Get(data)
	if ok && err == nil {
		return data
	}else{
		data.Id=0
		return data
	}
}

func (d *Dao) AddArc(title string) *model.Article {
	article := &model.Article{
		Title:title,
		Content:title,
		Desc:title,
		IsDelete:0,
		CreatedAt:int(time.Now().Unix()),
		UpdatedAt:int(time.Now().Unix()),
	}
	_, err := d.DB.Insert(article)
	if err != nil {
		log.Fatal("insert error: ", err)
	}
	return article
}
