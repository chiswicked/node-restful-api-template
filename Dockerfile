FROM ubuntu:16.04

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

# ENV NODE_ENV production

WORKDIR /src

ADD package.json /src/package.json

RUN npm install

ADD . /src

EXPOSE 8888

ENTRYPOINT ["npm", "run"]

CMD ["start"]