#!/bin/bash
case $1 in 
	start)
		nohup ./go_iris_boilerplate -conf ./resource/config/app.toml 2>&1 >> info.log 2>&1 /dev/null &
		echo "服务已启动..."
		sleep 1
	;;
	stop)
		killall go_iris_boilerplate
		echo "服务已停止..."
		sleep 1
	;;
	restart)
		killall go_iris_boilerplate
		sleep 1
		nohup ./go_iris_boilerplate -conf ./resource/config/app.toml  2>&1 >> info.log 2>&1 /dev/null &
		echo "服务已重启..."
		sleep 1
	;;
	*) 
		echo "$0 {start|stop|restart}"
		exit 4
	;;
esac
