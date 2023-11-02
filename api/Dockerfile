FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y zip

WORKDIR /app

COPY package*.json .

RUN npm i

RUN npm i -D typescript@5.0.4

COPY . .

RUN npm cache clean -f

RUN npm run build

COPY ./dist .

EXPOSE 3000

CMD ["npm", "run", "start"]
