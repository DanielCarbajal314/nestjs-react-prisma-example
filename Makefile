build:
	npm --prefix ./frontend install
	npm --prefix ./backend install
	docker compose build

up:
	docker compose up

down:
	docker compose down -v

format:
	docker compose exec api bash -c "npm run lint"
	docker compose exec ui bash -c "npm run prettier"

create-migration:
	docker compose exec api bash -c "npx prisma migrate dev --name ${name} --schema ./schema.prisma"

generate-client:
	docker compose exec api bash -c "npx prisma generate --schema=./schema.prisma"
	npm --prefix=./backend run build:dbclient
	