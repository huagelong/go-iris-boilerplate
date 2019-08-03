package casbin

import (
	"github.com/kataras/golog"
	"github.com/kataras/iris"
	"net/http"
	"github.com/casbin/casbin/v2"
	"trensy/lib/boot"
)
// Casbin is the auth services which contains the casbin enforcer.
type Casbin struct {
	enforcer *casbin.Enforcer
	app *boot.Bootstrapper
}

func New(e *casbin.Enforcer, app *boot.Bootstrapper) *Casbin {
	return &Casbin{enforcer: e, app:app}
}

func (c *Casbin) ServeHTTP(ctx iris.Context) {
	role := ctx.Values().GetString("role")

	if !c.Check(ctx.Request(), role) {
		c.app.Support.ShowStatusError(ctx,http.StatusForbidden)
		return
	}
	ctx.Next()
}

// Check checks the username, request's method and path and
// returns true if permission grandted otherwise false.
func (c *Casbin) Check(r *http.Request, username string) bool {
	if username ==""{
		return true
	}
	method := r.Method
	path := r.URL.Path
	golog.Debug("method:", method, "path:", path)
	ok, _ := c.enforcer.Enforce(username, path, method)
	return ok
}
