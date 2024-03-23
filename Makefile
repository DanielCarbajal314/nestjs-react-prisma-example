build:
	npm --prefix ./frontend install
	npm --prefix ./backend install
	docker compose build

up:
	docker compose up

format:
	docker compose exec api bash -c "npm run lint"
	docker compose exec ui bash -c "npm run lint"

create-migration:
	docker compose exec api bash -c "npx prisma migrate dev --name ${name} --schema ./src/adapters/db/prisma/schema.prisma"

generate-client:
	docker compose exec api bash -c "npx prisma generate --schema=./src/adapters/db/prisma/schema.prisma"

generate-client-local:
	npm --prefix=./backend run build:dbclient