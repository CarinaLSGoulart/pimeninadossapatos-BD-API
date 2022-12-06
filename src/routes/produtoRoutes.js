const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.list);
//router.get('/produto/detail/:id', produtoController.detail);


module.exports = router;