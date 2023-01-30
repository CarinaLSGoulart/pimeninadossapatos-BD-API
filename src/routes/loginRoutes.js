const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')

router.get('/', loginController.list);
router.post('/', loginController.create)
router.put('/:id', loginController.update)
router.delete('/:id', loginController.delete)


module.exports = router;