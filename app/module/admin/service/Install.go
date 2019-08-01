package service

import (
	"github.com/kataras/golog"
	"trensy/app/model"
)

func (s *Service) Install(){
	err := s.Dao.DB.Sync2(new(model.User))
	if err !=nil{
		golog.Fatal("sync database struct fail ", err)
	}else{
		golog.Info("install success!")
	}
}
