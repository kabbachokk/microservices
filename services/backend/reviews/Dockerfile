FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN npm i --only=production

CMD [ "npm", "start" ]