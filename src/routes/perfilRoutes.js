const express = require('express');
const router = express.Router();

const perfilController = require('../controllers/perfilController')

router.get('/', perfilController.detalhar);
router.post('/', perfilController.criar)
router.put('/:id', perfilController.atualizar)
router.delete('/:id', perfilController.deletar)


module.exports = router;