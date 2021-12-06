FROM node:16.13.1

RUN apt-get -y update && apt-get -y upgrade && apt-get -y install yarn git

WORKDIR /usr/src/app

RUN yarn global add react

ENTRYPOINT bash
