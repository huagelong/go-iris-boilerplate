package api

import (
	"io/ioutil"
)

func (c *Controller)PostNavjson()  {
	filename := "./resource/public/static/js/json/nav.json"
	plan, _ := ioutil.ReadFile(filename)
	data := string(plan[:])
	c.Ctx.Header("Content-type", "application/json")
	c.Ctx.WriteString(data)
}

func (c *Controller)PostMenujson()  {
	filename := "./resource/public/static/js/json/menu.json"
	plan, _ := ioutil.ReadFile(filename)
	data := string(plan[:])
	c.Ctx.Header("Content-type", "application/json")
	c.Ctx.WriteString(data)
}

func (c *Controller)PostHomejson()  {
	filename := "./resource/public/static/js/json/home.json"
	plan, _ := ioutil.ReadFile(filename)
	data := string(plan[:])
	c.Ctx.Header("Content-type", "application/json")
	c.Ctx.WriteString(data)
}
