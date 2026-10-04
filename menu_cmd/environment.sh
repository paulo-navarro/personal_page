# Project commands. Each function with a `## description` comment directly above it becomes a menu command.
# Functions without it are helpers and are ignored. (info/warn/error and color variables come from ./menu.)

## Stop containers
down() {
    docker compose down
}

## Start development environment
dev() {
    docker compose up node
}

## Start production environment (build)
prod() {
    docker compose --profile prod up --build web
}

## Start development environment in background
dev_detached() {
    docker compose up -d node
}

## Start production environment in background (build)
prod_detached() {
    docker compose --profile prod up -d --build web
}
