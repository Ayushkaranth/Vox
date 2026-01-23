FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY patch-swr-default.mjs ./

RUN npm install

COPY . .

EXPOSE 3000 

CMD ["npm", "run", "dev"]