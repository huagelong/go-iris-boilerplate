#!/usr/bin/env bash

if [[ ! -d bin  ]];then
  mkdir bin
  chmod 0777 bin
fi

if [ ! -f ./configs/config.toml ]; then
cp ./configs/config.simple.toml ./configs/config.toml
fi

if [ ! -f ./configs/server.toml ]; then
cp ./configs/server.simple.toml ./configs/server.toml
fi

# 构建
echo 'building...'
gowatch
