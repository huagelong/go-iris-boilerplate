#!/bin/bash

# 跨平台交叉静态编译
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o cmd/main cmd/main.go