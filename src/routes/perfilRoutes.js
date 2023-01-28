const express = require('express');
const router = express.Router();

const perfilController = require('../controllers/perfilController');

router.get('/perfil/:id', perfilController.detail);

module.exports = router;