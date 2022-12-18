FROM node:14.21.2-alpine3.16
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/auth
WORKDIR /var/www/auth
ADD . /var/www/auth
RUN npm install
CMD npm run build && npm run start:prod