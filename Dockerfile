# Use uma imagem Node.js como base
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Build da aplicação React
RUN npm run build

# Comando padrão para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "run", "dev"]
