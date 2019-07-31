#!/bin/bash

if [[ ! -d bin  ]];then
  mkdir bin
  chmod 0777 bin
fi

# 跨平台交叉静态编译
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o ./bin/main main.go