#!/usr/bin/env bash

if [[ ! -d bin  ]];then
  mkdir bin
  chmod 0777 bin
fi

if [ -f ./resource/config/app.toml ]; then
rm -rf ./resource/config/app.toml
fi

cp ./resource/config/app.simple.toml ./resource/config/app.toml
# 构建
echo 'building...'
gowatch
