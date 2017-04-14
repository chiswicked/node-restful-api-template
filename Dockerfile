FROM node:7.9.0-alpine

WORKDIR /src

ADD package.json /src/package.json

RUN npm install

ADD . /src

EXPOSE 8888

ENTRYPOINT ["npm", "run"]

CMD ["start"]