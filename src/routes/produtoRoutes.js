const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.listar);
router.get('/detail/:id', produtoController.detalhar);
router.post('/', produtoController.criar)
router.put('/:id', produtoController.atualizar)
router.delete('/:id', produtoController.deletar)


module.exports = router;