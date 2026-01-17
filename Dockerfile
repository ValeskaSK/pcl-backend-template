# Imagen base Node LTS
# Este Dockerfile es común a todos los microservicios

FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
