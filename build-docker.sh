#!/bin/bash
app="trensy"
# 跨平台交叉静态编译
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main main.go
# 编译docker镜像
docker build -t ${app} .