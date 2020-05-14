FROM node:alpine as gerencia-filmes-back

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm start

EXPOSE 3000

CMD ["npm", "start"]