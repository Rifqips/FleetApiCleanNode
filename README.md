# Fleet Management REST API (Clean Node.js + Express + PostgreSQL + Docker)

## Fitur
- CRUD Vehicle (`/api/v1/vehicles`): list, detail, create, update, delete
- Clean layering: **routes → controller → service → repository → db**
- Validasi pakai Joi
- Docker Compose: `api`, `db` (Postgres 16), `adminer` (GUI)

## Quick Start
```bash
cp .env.example .env
docker compose up -d --build
# tunggu api up, lalu jalankan migrasi:
docker compose exec api npm run migrate
```

### Uji Coba
```bash
curl -X POST http://localhost:3000/api/v1/vehicles \
  -H "Content-Type: application/json" \
  -d '{"plate_number":"B1234CD","brand":"Toyota","model":"Hilux","year":2022,"status":"active"}'

curl "http://localhost:3000/api/v1/vehicles?q=toyota&page=1&limit=10"

curl http://localhost:3000/api/v1/vehicles/1

curl -X PUT http://localhost:3000/api/v1/vehicles/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"maintenance"}'

curl -X DELETE http://localhost:3000/api/v1/vehicles/1
```

## Struktur
```
src/
  config/
    db.js, env.js
  middlewares/
    errorHandler.js, validate.js
  modules/
    vehicles/
      controller.js, repository.js, routes.js, service.js
  routes/
    index.js
  server.js
db/
  migrations/001_init.sql
  migrate.js
```

## Ekstensi
- Tambah module `drivers`, `trips`, dsb mengikuti pola `vehicles`
- Tambah authentication (JWT) & RBAC
- Observability (pino, OpenTelemetry), tests (Jest), dan CI/CD
