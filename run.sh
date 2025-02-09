#!/bin/bash
export NVM_DIR="$HOME/.nvm"

# Проверяем, существует ли скрипт nvm.sh, и если да, загружаем его
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
else
  echo "nvm.sh not found, please check if nvm is installed correctly"
  exit 1
fi

# Обновляем buildDate в package.json
BUILD_DATE=$(date +"%Y-%m-%d")
jq --arg date "$BUILD_DATE" '.buildDate = $date' package.json > package.tmp.json && mv package.tmp.json package.json


nvm use 18
npm run dev
