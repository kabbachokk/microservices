FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && npm start