#!/bin/bash
app="admin"
# 编译docker镜像
docker build -t trensy_${app} .