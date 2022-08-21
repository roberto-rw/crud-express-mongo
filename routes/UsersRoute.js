const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');


router.get('/', userController.getUsers);
router.post('/insertar', userController.createUser);
router.get('/consultar/:nombre', userController.getUser);
// router.put('/actualizar/:id', controller.updateUser);

module.exports = router;


