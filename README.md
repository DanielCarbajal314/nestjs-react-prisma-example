# nestjs-react-prisma-example
NestJs with prisma Backend with Vite React Typescript frontend, fully containerized. To run the application it be run on a single command (asuming you have docker installed):
```
make build up
```
This command will start the app in develpment mode (watch mode for vite and nestjs)

# Command usage
The app has a Makefile with the next commands:
- __build__: Build the containers
- __up__: Start the containers injecting the .env file as enviromental varialbles
- __format__: Runs Linter in both frontend and backend source code
- __create-migration__: create a prisma migration
- __generate-client__: generate the prisma client on the container and locally for development

# Dependencies

#### Backend
The backend is implemented with [NestJs](https://nestjs.com/) in OOP approach. It used [Prisma](https://www.prisma.io/) as an ORM to handler database interaction and migrations. All layer are decoupled with interfaces and the usage of mediator pattern with [NestJs CQRS](https://github.com/nestjs/cqrs). For data validations it uses [class-validator](https://github.com/typestack/class-validator) and for Logging it uses [Winston](https://github.com/winstonjs/winston). The whole backend is containerd in a Dockerfile with 3 targets:
- __dev__: Runs the server in developer mode, hot realoding ./src path in backend folder
- __migration__: Runs prisma migration after the database is accepting client connections
- __seeding__: Runs a npm command ones to seed the database

The api is documented with [Swagger](https://swagger.io/) over http://localhost:3000/api

#### Frontend
The frontend is implemented with [React](https://react.dev/) and [Vite](https://vitejs.dev/) following a functional approach. It also uses [react-query](https://tanstack.com/query/v5) for server state management and [ant design](https://ant.design/) as UI component library. The Dockerfile runs vite on watch mode. It uses prettier for formating.
#### Databases
It uses postgresql database for data persistency. Also PGAdmin is hosted over http://localhost:8080