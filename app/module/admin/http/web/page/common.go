package page

func (c *Controller) GetHome() {
	c.Ctx.View("admin/page/home.html")
}

func (c *Controller) GetT404() {
	c.Ctx.View("admin/page/t404.html")
}
