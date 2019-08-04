package web

func (c *Controller)GetPageHome()  {
	c.Ctx.View("admin/page/pageHome.html")
}

func (c *Controller)GetPageT404()  {
	c.Ctx.View("admin/page/paget404.html")
}
