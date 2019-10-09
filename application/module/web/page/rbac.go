package page

import "strconv"

type MenuStru struct {
	Id    string `json:"id"`
	Name  string `json:"name"`
	Url   string `json:"url"`
	Pid   string `json:"parentId"`
	Sort  string `json:"sort"`
	Style string `json:"style"`
}

//菜单列表
func (c *Controller) GetMenuls() {
	c.Ctx.View("page/rbac/menuls.html")
}

func (c *Controller) PostAddUpdateMenu() {
	menu := &MenuStru{}
	err := c.Ctx.ReadJSON(menu)
	if err != nil {
		c.ResponseJson(c.Ctx, 500, err.Error())
		return
	}
	mid, _ := strconv.Atoi(menu.Id)
	mpid, _ := strconv.Atoi(menu.Pid)
	msort, _ := strconv.Atoi(menu.Sort)
	errtodo := c.Service.AddUpdateMenu(mid, menu.Name, menu.Url, menu.Style, mpid, msort)

	if errtodo != nil {
		c.ResponseJson(c.Ctx, 500, errtodo.Error())
		return
	}

	c.ResponseJson(c.Ctx, 200, "操作成功！")
}

//权限列表
func (c *Controller) GetAccessls() {

}

//角色列表
func (c *Controller) GetRolels() {

}
