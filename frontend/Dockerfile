FROM node:20.11.1

WORKDIR /usr/app

COPY . .
RUN npm install vite -g
RUN npm install

CMD ["npm", "run", "dev"]