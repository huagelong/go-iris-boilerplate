package web

func (c *Controller) Get() {
	c.Ctx.View("admin/entry/index.html")
}

func (c *Controller) GetLogin() {
	c.Ctx.View("admin/entry/login.html")
}
