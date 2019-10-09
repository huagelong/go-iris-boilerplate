package page

func (c *Controller) GetHome() {
	c.Ctx.View("page/home.html")
}

func (c *Controller) GetT404() {
	c.Ctx.View("page/t404.html")
}
