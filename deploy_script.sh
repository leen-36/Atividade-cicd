
#!/bin/bash
set -e

echo "Iniciando o deploy..."

cd /caminho/da/aplicacao

git pull origin main
npm ci --omit=dev

pm2 restart my-app

echo "Deploy concluído com sucesso!"
