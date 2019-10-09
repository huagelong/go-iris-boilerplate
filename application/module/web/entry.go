package web

func (c *Controller) Get() {
	c.Ctx.View("entry/index.html")
}

func (c *Controller) GetLogin() {
	c.Ctx.View("entry/login.html")
}
