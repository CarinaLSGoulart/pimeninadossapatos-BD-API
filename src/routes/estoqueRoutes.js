const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController')

router.get('/', estoqueController.listar);
router.get('/detail/:id', estoqueController.detalhar);
router.post('/', estoqueController.criar)
router.put('/:id', estoqueController.atualizar)
router.delete('/:id', estoqueController.deletar)

module.exports = router;