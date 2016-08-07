FROM node:5.0.0

MAINTAINER superalsrk "https://github.com/superalsrk"

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app/

RUN npm run build

RUN npm install -g pm2

ENV PORT 8080

EXPOSE 8080

ENTRYPOINT pm2 start start.js