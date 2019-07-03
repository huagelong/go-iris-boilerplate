#!/usr/bin/env bash

if [[ ! -d bin  ]];then
  mkdir bin
  chmod 0777 bin
fi

if [ -f ./resources/configs/config.toml ]; then
rm -rf ./resources/configs/config.toml
fi

if [ -f ./resources/configs/server.toml ]; then
rm -rf ./resources/configs/server.toml
fi

cp ./resources/configs/config.simple.toml ./resources/configs/config.toml
cp ./resources/configs/server.simple.toml ./resources/configs/server.toml
# 构建
echo 'building...'
gowatch
