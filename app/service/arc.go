package service

import (
	"trensy/app/model"
)

func (s *Service) GetArc(id int) *model.Article {
	return s.Dao.GetArc(id)
}

func (s *Service) AddArc(title string) *model.Article {
	return s.Dao.AddArc(title)
}