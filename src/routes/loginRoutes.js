const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')

router.get('/', loginController.listar);
router.post('/', loginController.criar)
router.put('/:id', loginController.atualizar)
router.delete('/:id', loginController.deletar)


module.exports = router;