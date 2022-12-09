const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController')

router.get('/', estoqueController.list);
router.get('/detail/:id', estoqueController.detail);
router.post('/', estoqueController.create)
router.put('/:id', estoqueController.update)
router.delete('/:id', estoqueController.delete)

module.exports = router;