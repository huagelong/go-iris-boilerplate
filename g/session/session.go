package session

import (
	"github.com/kataras/iris/sessions"
	"time"
	"trensy/g/db"
)

var (
	instanceSession *sessions.Sessions
)

func InstanceSession() *sessions.Sessions {
	if instanceSession != nil{
		return instanceSession
	}
	expires := 24*time.Hour
	ses := sessions.New(sessions.Config{
		Cookie:   "SECRET_SESS_COOKIE",
		Expires:  expires,
		AllowReclaim: true,
	})

	instanceSession = ses
	redis:=db.InstanceRedis()
	instanceSession.UseDatabase(redis)
	return instanceSession;
}