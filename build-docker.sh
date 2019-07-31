#!/bin/bash
app="trensy"

source build-binary.sh

# 编译docker镜像
docker build -t ${app} .