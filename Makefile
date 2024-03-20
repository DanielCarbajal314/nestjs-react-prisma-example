build:
	npm --prefix ./frontend install
	npm --prefix ./backend install
	docker compose build

up:
	docker compose up

format:
	docker compose exec api bash -c "npm run lint"
	docker compose exec ui bash -c "npm run lint"