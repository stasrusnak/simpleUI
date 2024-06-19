#!/bin/bash
export NVM_DIR="$HOME/.nvm"

# Проверяем, существует ли скрипт nvm.sh, и если да, загружаем его
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
else
  echo "nvm.sh not found, please check if nvm is installed correctly"
  exit 1
fi

nvm use 18
npm run dev
