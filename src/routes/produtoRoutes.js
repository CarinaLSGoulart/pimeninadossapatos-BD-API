const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.list);
router.get('/detail/:id', produtoController.detail);
router.post('/', produtoController.create)
router.put('/:id', produtoController.update)
router.delete('/:id', produtoController.delete)


module.exports = router;