FROM node:14.21.2-alpine3.16
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD . /var/www/gateway
RUN npm install
CMD npm run build && npm run start:prod