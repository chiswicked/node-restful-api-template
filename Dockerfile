FROM ubuntu:16.04

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y nodejs npm

RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

# ENV NODE_ENV production

WORKDIR /src

ADD package.json /src/package.json

RUN npm install

ADD . /src

EXPOSE 8888

# Commented out auto run to test Travis CI integration
#CMD npm start