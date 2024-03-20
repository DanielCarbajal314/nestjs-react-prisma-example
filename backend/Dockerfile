FROM node:20.11.1 as base

WORKDIR /usr/app
COPY . .
RUN npm install

CMD ["npm", "run", "start:debug"]