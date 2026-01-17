/**
 * Health Routes
 * -------------
 * Define las rutas de diagnóstico del microservicio.
 */

const express = require('express');
const { getHealth } = require('./health.controller');

const router = express.Router();

// GET /api/v1/health
router.get('/', getHealth);

module.exports = router;
