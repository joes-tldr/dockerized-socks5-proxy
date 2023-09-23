FROM node:lts-alpine

WORKDIR /app

COPY ./package*.json ./

RUN set -xv; \
    [ -r './package-lock.json' ] && npm ci || npm install

COPY ./socks5-proxy-server.js ./

CMD [ "npm", "start" ]
EXPOSE 1080
