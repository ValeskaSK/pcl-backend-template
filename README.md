# PCL Backend Microservice Template

Template base para microservicios backend en Node.js con **Oracle Database (driver nativo `oracledb`)**, sin ORM y con SQL puro.

---

## Stack
- Node.js (LTS)
- Express
- Oracle (`oracledb`)
- Winston
- dotenv
---

## Estructura
```
src/
├── api/
│ ├── components/
│ └── middlewares/
├── config/
└── utils/
app.js
server.js
.env.example
```
---

## Configuración

Crear `.env` desde `.env.example`:

```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=1521
DB_SERVICE_NAME=FREE
DB_USER=pcl_dev_user
DB_PASSWORD=pcl_dev_password
DB_POOL_MIN=2
DB_POOL_MAX=10
DB_POOL_INCREMENT=1
```
---

## Ejecutar

```
npm install
npm run dev
```
---

## Health check

```
GET /api/v1/health
```

Respuesta:

```json
{"status":"ok","service":"pcl-backend-template","timestamp":"xxxx"}
```

## Uso

Copiar el repositorio y crear módulos en src/api/components/.

