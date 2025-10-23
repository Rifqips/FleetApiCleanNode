<<<<<<< HEAD
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
=======
# 🚚 FleetApiCleanNode

FleetApiCleanNode is a **cleanly structured RESTful API** built with **Node.js**, **Express**, and **PostgreSQL**, containerized using **Docker**.  
It serves as the backend foundation for a **Fleet Management System**, allowing easy management of vehicles, drivers, and operational data in a scalable and maintainable way.

---

## 🧱 Tech Stack

- **Node.js (Express Framework)**
- **PostgreSQL (via Docker Compose)**
- **Swagger UI** for interactive API documentation
- **Helmet & CORS** for security and cross-origin support
- **Morgan** for HTTP request logging
- **Docker** and **Docker Compose** for containerization

---

## 🚀 Features

✅ **Clean Modular Architecture**  
Separation of concerns between routes, controllers, services, and repositories for maintainability.

✅ **RESTful CRUD Endpoints**  
Complete CRUD operations for fleet entities such as vehicles and drivers.

✅ **PostgreSQL Integration**  
Fully containerized PostgreSQL database managed with Docker Compose.

✅ **Swagger Documentation**  
Auto-generated API documentation available at `/docs`.

✅ **Centralized Error Handling**  
Consistent API responses and error management middleware.

✅ **Environment Configuration**  
`.env` file support for flexible configuration between development and production.

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Rifqips/FleetApiCleanNode.git
cd FleetApiCleanNode
```

### 2️⃣ Copy Environment Variables
```bash
cp .env.example .env
```

### 3️⃣ Build and Start Containers
```bash
docker compose up -d --build
```

### 4️⃣ Access the Services
| Service | URL |
|----------|-----|
| **API** | [http://localhost:3000/api/v1](http://localhost:3000/api/v1) |
| **Swagger Docs** | [http://localhost:3000/docs](http://localhost:3000/docs) |
| **Adminer (DB GUI)** | [http://localhost:8080](http://localhost:8080) |

---

## 📘 API Documentation

FleetApiCleanNode provides **Swagger (OpenAPI)** documentation for all available endpoints.  
You can access it once the containers are running:

👉 **[http://localhost:3000/docs](http://localhost:3000/docs)**

---

## 🗂️ Project Structure

```
FleetApiCleanNode/
│
├── src/
│   ├── config/          # Environment and Swagger config
│   ├── modules/         # Feature modules (e.g. vehicles, drivers)
│   ├── middlewares/     # Global middlewares (error handler, validator)
│   ├── routes/          # Central route definitions
│   └── server.js        # Main Express server
│
├── db/
│   └── init/            # PostgreSQL init scripts
│
├── .env.example         # Example environment configuration
├── docker-compose.yml   # Docker service definitions
├── Dockerfile           # API Docker image definition
├── package.json         # Node dependencies and scripts
└── README.md            # Project documentation
```

---

## 🧩 Project Goals

FleetApiCleanNode aims to be a **starter boilerplate** for backend developers who want to build  
**clean, maintainable, and Docker-ready REST APIs** for fleet or logistics systems.

---

## 🧠 Author

**Rifqi P. Siliwangi**  
👤 GitHub: [@Rifqips](https://github.com/Rifqips)

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use and modify it for both personal and commercial projects.

---

### 💡 Tips
- For development without Docker, you can start the API directly:
  ```bash
  npm install
  npm run dev
  ```
- Then make sure your PostgreSQL is running locally and matches `.env` config.

---

_“Built with ❤️ using Node.js, Express, and Docker — clean code for a clean backend.”_
>>>>>>> ec7cf7ee2c9cbdc78e5563c3339e3b29d251e095
