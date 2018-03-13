FROM node:alpine

COPY . /opt/app

WORKDIR /opt/app

RUN yarn install

CMD ["node", "index"]
