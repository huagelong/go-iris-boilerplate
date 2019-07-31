#!/usr/bin/env bash

if [[ ! -d bin  ]];then
  mkdir bin
  chmod 0777 bin
fi

# 构建
echo 'building...'
gowatch
