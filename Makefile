.PHONY: dev prod dev-detached prod-detached down
down:
	docker compose down


dev:
	docker compose up node


prod:
	docker compose --profile prod up --build web


dev-detr compose up -d node


prod-detached:
	docker compose --profile prod up -d --build web
