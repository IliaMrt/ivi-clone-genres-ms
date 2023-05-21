FROM node:19-alpine3.16 as production

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "run", "start:docker"]