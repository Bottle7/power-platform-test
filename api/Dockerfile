FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y zip

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm cache clean -f

RUN npx tsc

COPY /dist .

EXPOSE 3000

CMD ["npm", "run", "start"]
