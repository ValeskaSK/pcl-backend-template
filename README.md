# PCL Backend Microservice Template

Template base para microservicios backend en Node.js con **Oracle Database**
(usando el driver nativo `oracledb`), sin ORM y con SQL puro.

Este repositorio define **infraestructura común**, no lógica de negocio.

---

## Stack
- Node.js (LTS)
- Express
- Oracle Database (`oracledb`)
- Winston
- dotenv

---

## Estructura base


```
src/
├── api/
│   └── routes/
│       └── health.js
├── middlewares/
│   └── errorHandler.middleware.js
├── config/
│   └── database.config.js
├── utils/
│   └── ApiError.js
app.js
server.js
.env.example


```
---


> Los módulos de dominio (`auth`, `geo`, `identity`, etc.) **NO forman parte del template**
> y deben crearse en cada microservicio bajo `src/api/components/`.

---

## Configuración

Crear un archivo `.env` a partir de `.env.example`:

```env
NODE_ENV=development
PORT=3000

DB_HOST=localhost
DB_PORT=1521
DB_SERVICE_NAME=FREE
DB_USER=pcl_dev_user
DB_PASSWORD=pcl_dev_password

DB_POOL_MIN=1
DB_POOL_MAX=5
DB_POOL_INCREMENT=1

```
---

## Ejecución

```
npm install
npm run dev
```
---

## Health check

```
GET /health

```

Respuesta:

```json
{ "status": "ok" }
```

## Uso del template

1. Clonar este repositorio.
2. Renombrarlo según el microservicio.
3. Crear módulos de dominio en `src/api/components/`.
4. Definir rutas, servicios y lógica propia del microservicio.

