FROM node:20.11.1 as base

WORKDIR /usr/app
COPY . .
RUN npm install
RUN npx prisma generate

FROM base as dev
CMD ["npm", "run", "start:debug"]

FROM base as migration
CMD [ "npx", "prisma", "migrate", "deploy"]

FROM base as seeding
CMD [ "npx", "ts-node", "./migrations/seed.ts"]