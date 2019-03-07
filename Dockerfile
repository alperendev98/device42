# setup server
FROM node:8.11.3

RUN mkdir -p /usr/src/app

RUN ls -la .

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 5000

RUN npm install -g nodemon

CMD ["npm", "run", "server"]