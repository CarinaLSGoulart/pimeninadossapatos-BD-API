const express = require('express');
const router = express.Router();

const enderecoController = require('../controllers/enderecoController')


router.get('/enderecoDeEntrega', enderecoController.index);
router.get('/enderecoDeEntrega/:id', enderecoController.show);
router.post('/enderecoDeEntrega', enderecoController.store);
router.put('/enderecoDeEntrega/:id', enderecoController.update);
router.delete('/enderecoDeEntrega/:id', enderecoController.delete);

module.exports = router;