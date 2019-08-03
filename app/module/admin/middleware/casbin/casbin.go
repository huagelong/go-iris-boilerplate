package casbin

import (
	"github.com/kataras/iris"
	"net/http"
	"github.com/casbin/casbin/v2"
)
// Casbin is the auth services which contains the casbin enforcer.
type Casbin struct {
	enforcer *casbin.Enforcer
}

func New(e *casbin.Enforcer) *Casbin {
	return &Casbin{enforcer: e}
}

// Wrapper is the router wrapper, prefer this method if you want to use casbin to your entire iris application.
// Usage:
// [...]
// app.WrapRouter(casbinMiddleware.Wrapper())
// app.Get("/dataset1/resource1", myHandler)
// [...]
func (c *Casbin) Wrapper() func(w http.ResponseWriter, r *http.Request, router http.HandlerFunc) {
	return func(w http.ResponseWriter, r *http.Request, router http.HandlerFunc) {
		if !c.Check(r) {
			w.WriteHeader(http.StatusForbidden)
			w.Write([]byte("403 Forbidden"))
			return
		}
		router(w, r)
	}
}

// ServeHTTP is the iris compatible casbin handler which should be passed to specific routes or parties.
// Usage:
// [...]
// app.Get("/dataset1/resource1", casbinMiddleware.ServeHTTP, myHandler)
// [...]
func (c *Casbin) ServeHTTP(ctx iris.Context) {
	if !c.Check(ctx.Request()) {
		ctx.StatusCode(http.StatusForbidden) // Status Forbidden
		ctx.StopExecution()
		return
	}
	ctx.Next()
}

// Check checks the username, request's method and path and
// returns true if permission grandted otherwise false.
func (c *Casbin) Check(r *http.Request) bool {
	username := Username(r)
	if username ==""{
		return true
	}
	method := r.Method
	path := r.URL.Path
	ok, _ := c.enforcer.Enforce(username, path, method)
	return ok
}

// Username gets the username from the basicauth.
func Username(r *http.Request) string {
	username, _, _ := r.BasicAuth()
	return username
}
